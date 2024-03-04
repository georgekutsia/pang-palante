

function checkBubbleCollision(bubbles, player, bubbleSplash2, bubblePopSound1, puffBubbles, ctx, platforms, bouncers, boxes){
  bubbles.forEach((bubble) => {//player con bubble
    if(bubble.collides(player)) {
        if(player.electricShieldIsActive){
          electroShockSound.play()
          bubble.vy = -10;
          bubble.isElectrified = true;
          setTimeout(() => {
            bubble.isElectrified = false;
          }, electricShieldTime);
        }
        if(!playerIsImmune){
          if(player.y + player.h <= bubble.y +30 && bubble.w>=20){
            player.vy = -10;
          } else {
            if (!player.auraIsActive && !player.electricShieldIsActive) { 
              player.loseLife(bubble.damage, true); //el daño al jugador se le hace según lo que marca el daño de la burbuja. a burbuja más pequeña, menos daño
              bubble.vy = -bubbleSpeedY; // rebota encima del jugador haciéndole daño
            }
          }
      }
      player.wasNotDamaged = false;
      bubbleSplash2.play();
    } else return true;
  });
 bubbles.forEach((bubble) => {//  bubble con bullet
    player.bulletArray = player.bulletArray.filter((bullet) => {
      if (bullet.collides(bubble) && !bullet.isBig) {
        bubblePuff(bubble, puffBubbles, bubbles, ctx);
       bubblePopSound1.play();
        return false;
      } else return true;
    });
  });
 bubbles.forEach((bubble) => {//  bubble con bullet
  player.bulletArray.forEach((bullet) => {
      if (bullet.collides(bubble) && bullet.isBig) {
        bigWeaponBubble(ctx, bullet,  player)
        bullet.y = -300;
      } else return true;
    });
  });

  bubbles.forEach((bubble) => {//bubble con fire
    player.bulletFireArray.forEach((bullet) => {
      if (bullet.collides(bubble)) {
        bubble.w -= bullet.damage;
        bubble.h -= bullet.damage;
        if (bubble.w <= bubble.explodingSize * 2) {
          const elx = bubble.x;
          const ely = bubble.y;
          const puffBubble = new BubblePuff( ctx, elx, ely, bubble.w, bubble.h);
          puffBubbles.push(puffBubble);
          bubble.x = -100;
        }
      } else return true;
    });
  });
  bubbles.forEach((bubble) => {//  bulletBar con Bubble
    player.bulletBarArray.forEach((bullet) => {
      if (bullet.collides(bubble)) {
        bullet.life -= 1;
        if (bullet.life <= 0) {
          bullet.dispose = false;
        }
        bubblePuff(bubble, puffBubbles, bubbles, ctx);
        bubblePopSound1.play(); //todo -- Sonido paso 3) invocar el sonido
        return false;
      } else return true;
    });
  });
  
  bubbles.forEach((bubble) => {//bubble con platform
    platforms.forEach((platform) => {
      if (platform.collides(bubble)) {
        if (platform.isBouncable) {
        bubble.bubbleBounceSound.play()
          bounceFromObstacles(bubble, platform);
        } else if (!platform.isBouncable) {
          bubble.y = platform.y - bubble.h;
          bubble.vy = platform.vy;
          bubble.vx = platform.vx;
        }
      } else return true;
    });
  });

  bubbles.forEach((bubble) => {//bubble con boxes
    boxes.forEach((box) => {
      if (box.collides(bubble)) {
        bubble.bubbleBounceSound.play()
        bounceFromObstacles(bubble, box);
      } else return true;
    });
  });

  bubbles.forEach((bubble) => {//bubble con bouncer
    bouncers.forEach((bouncer) => {
      if (bouncer.collides(bubble)) {
        bubble.bubbleBounceSound.play()
        bounceFromObstacles(bubble, bouncer, 5);
      } else return true;
    });
  });


  bubbles.forEach((bubble) => {//  bulletBar con Bubble
    player.swordArray.forEach((bullet) => {
      if (bullet.collides(bubble)) {
        coins += 2;
        bubble.swordSpeed = -2;
        player.swordPowerUp++;
        bubblePuff(bubble, puffBubbles, bubbles, ctx);
        bubblePopSound1.play(); //todo -- Sonido paso 3) invocar el sonido
        return false;
      } else return true;
    });
  });
}



function bouncerPlayerCollision(player, bouncer){
  if (player.y +  player.h/2 <= bouncer.y   ) {
    player.vy =  -15 ;
  }
  if (player.y +  player.h/2 >= bouncer.y   ) {
    player.vy =  15 ;
  }
  if(player.x + player.w/2 <= bouncer.x ){
    player.vx = -10 ;
  }
  if(player.x + player.w/2> bouncer.x + bouncer.w ){
    player.vx = 10 ;
  }

}

function platformPlayerCollision(player, platform){
  if (player.y <= platform.y - 10 &&player.x <= platform.x + platform.w &&player.x + player.w > platform.x) {
    if(player.electricShieldIsActive &&platform.canBeElectrified && !platform.isElectrified){
      electroPlatformSound.play()
      platform.vx = -0.5;
      platform.isElectrified = true;
      platform.electroShocked = true;
    }
    if (platform.isBrakable) {
      platform.braking--; 
      platform.goingToBreak = true;
    }
    player.y = platform.y - player.h;
    jumpDownDistance = 0;
    player.x += platform.vx; // si le digo que es igual player.vx = platform.vx, se ve el jugador moviendose por cómo estan configurados los frames de movimiento
    player.vy = platform.vy;
    player.ableToJump = true;
    ALT = 16;
  }
  if (player.y + player.h >= platform.y + platform.h) {//colisión por la parte inferior de la plataforma
    player.vy = 0;
    jumpDownDistance = 0;
    if(player.hookedOnPlatform){
      player.y = player.y - 80;
      player.hookedOnPlatform = false;
      player.g = 1;
    }

  }
  if (player.x >= platform.x + platform.w ||player.x <= platform.x) {//colisión por los lados de la plataforma
    jumpDownDistance = 0;
    player.vy = 0;
    player.vx = 0;
    player.g = 2;
  }
}

function barCollidesObstacle(bar, obstacle, barHit, player){
    bar.solidState = true;
    bar.y = obstacle.y + obstacle.h;
    bar.vy = 0;
    barHit.play();
    player.shootBarSound.volume = 0;
    bar.img.src = "../public/Imagenes/weaponBarSolid.png";
}

function checkBarCollisions(bulletBarArray, obstacles, collisionHandler, player) {
  bulletBarArray.forEach((bar) => {
    obstacles.forEach((obstacle) => {
      if (bar.collidesTop(obstacle)) {
        barCollidesObstacle(bar, obstacle, collisionHandler, player);
      }
    });
  });
}



function checkHookCollisions(hookArray, obstacles, barHit, player) {
  hookArray.forEach((hook) => {
    obstacles.forEach((obstacle) => {
      if (hook.collidesTop(obstacle)) {
          player.hookedOnPlatform = true;;
          player.vy = -26;
          hook.solidState = true;
          hook.y = obstacle.y + obstacle.h;
          hook.vy = 0;
          barHit.play();
          hook.img.src = "../public/Imagenes/weaponBarSolid.png";
          setTimeout(() => {
            player.g = 1
          }, 500);
      }
    });
  });
}





//miniboses fire

function bossFireCollision (miniBoses, object){
  miniBoses.forEach((e) => {e.explosiveArray.forEach((exp) => {
    object.forEach((ob) => {
    if(exp.collides(ob)){
      exp.exploded = true;
      exp.img.frame = 5;
      exp.vx = -0.5;
      exp.vy = 0;
      exp.canCollide = false;
      }})})
    })
  }




  function checkDarkBubbleCollision(darkBubbles, player, bubbleSplash2, platforms, darkBubbleExplosion, bubbles, puffBubbles, bouncers){
    darkBubbles.forEach((bubble) => {//player darkbubble
      if (bubble.collides(player) && !playerIsImmune) {
        if(player.y + player.h <= bubble.y +30 ){
          player.vy = -3;
        } else {
          if (!player.auraIsActive) {
            player.loseLife(bubble.damage, true); //el daño al jugador se le hace según lo que marca el daño de la burbuja. a burbuja más pequeña, menos daño
            bubble.vy = -bubbleSpeedY; // rebota encima del jugador haciéndole daño
          }
        }
        player.wasNotDamaged = false;
        bubbleSplash2.play();
      } else return true;
    });

    darkBubbles.forEach((bubble) => {//darkbubble con platform
      platforms.forEach((platform) => {
        if (platform.collides(bubble)) {
          if(platform.isSolid){
            const newColor = platform.calculateNewColor();
            platform.color = newColor;
            if(bubble.w >= CTXW/4){
              darkBubbleExplosion(darkBubbleExplosion, bubble, bubbles, puffBubbles)//explota y genera bubbles pequeños
            }
          }
          if (platform.isBouncable) {
            bubble.bubbleBounceSound.play();
            bounceFromObstacles(bubble, platform);
          } else if (!platform.isBouncable) {
            bubble.y = platform.y - bubble.h;
            bubble.vy = platform.vy;
            bubble.vx = platform.vx;
          }
        } else return true;
      });
    });


   darkBubbles.forEach((bubble) => {//bubble con darkBubble
     bouncers.forEach((bouncer) => {
        if (bouncer.collides(bubble)) {
          bubble.bubbleBounceSound.play();
          bounceFromObstacles(bubble, bouncer);
        } else return true;
      });
    });

    darkBubbles.forEach((bubble) => {//  bulletBar con dark bubble
      player.bulletBarArray.forEach((bullet) => {
        if (bullet.collides(bubble)) {
          bubble.vx = bubble.vx * -1
          return false;
        } else return true;
      });
    });

    darkBubbles.forEach((bubble) => {//  darkbubble con bullet
      player.bulletArray = player.bulletArray.filter((bullet) => {
        if (bullet.collides(bubble)) {
          bubble.w += 2;
          bubble.h += 2;
          bubble.x -= 1;
          bubble.y -= 1;
          bubble.darkBubbbleHit.play()
          if(bubble.w >= CTXW/4){
            darkBubbleExplosion(darkBubbleExplosion, bubble, bubbles, puffBubbles)//explota y genera bubbles pequeños
          }
          return false;
        } else return true;
      });
    });
  }