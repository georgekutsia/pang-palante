

function checkBubbleCollision(bubbles, player, puffBubbles, ctx, platforms, bouncers, boxes){
  bubbles.forEach((bubble) => {//player con bubble
    if(bubble.collides(player)) {
      if(player.electricShieldIsActive){
        electroShockSound.play()
        bubble.vy = -10;
        bubble.isElectrified = true;
        setTimeout(() => {
          bubble.isElectrified = false;
        }, shieldsDuration);
      }
      if(!playerIsImmune){
          if(player.y + player.h <= bubble.y +30 && bubble.w>=20 && boots){
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
        bubbleBounceSound.play()
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
        bubbleBounceSound.play()
        bounceFromObstacles(bubble, box);
      } else return true;
    });
  });

  bubbles.forEach((bubble) => {//bubble con bouncer
    bouncers.forEach((bouncer) => {
      if (bouncer.collides(bubble)) {
        bubbleBounceSound.play()
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
    if(bouncer.canBounce){
      player.vy =  -15 ;
      player.g = 1;
    } else {
      player.vy = -1;
      player.vx = 0;  
    }
  }
  if (player.y +  player.h/2 >= bouncer.y   ) {
    if(bouncer.canBounce){
    player.vy =  15 ;
    player.g = 1;
  } else {
    player.vy = 1;
    player.vx = 0;
  }
  }
  if(player.x + player.w/2 <= bouncer.x ){
    if(bouncer.canBounce){
    player.vx = -6 ;
    player.g = 1;
  } else {
    player.x  = player.x - 1;
    D = 0;
    setTimeout(() => {
      D = 68;
    }, 100);
  }
  }
  if(player.x + player.w/2> bouncer.x + bouncer.w ){
    if(bouncer.canBounce){
    player.vx = 6 ;
    player.g = 1;
  } else {
    player.x  = player.x + 1;
    A = 0;
    setTimeout(() => {
      A = 65
    }, 100);
  }
  }

}

function platformPlayerCollision(player, platform){
  if (player.y <= platform.y - player.h/1.5&& player.x <= platform.x + platform.w && player.x + player.w > platform.x) {
    if(player.electricShieldIsActive && platform.canBeElectrified && !platform.isElectrified){  // si el jugador activa el escudo eléctrico, la plataforma puede ser electrificada y luego se activa
      electroPlatformSound.play()
      platform.vx = -1.5;
      if(platform.canMoveY){
        platform.vy = -1.5;
      }
      platform.isElectrified = true;  //activa la animación de electricidad y movimiento
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
  if (player.x + player.w >= platform.x + platform.w  || player.x <= platform.x) {//colisión por los lados de la plataforma. Por alguna razón, funciona
    jumpDownDistance = 0;
    player.g = 2;
  }
}

function barCollidesObstacle(bar, obstacle, player){
    bar.solidState = true;
    bar.y = obstacle.y + obstacle.h;
    bar.vy = 0;
    barHit.play();
    shootBarSound.volume = 0;
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



function checkHookCollisions(hookArray, obstacles, player) {
  hookArray.forEach((hook) => {
    obstacles.forEach((obstacle) => {
      if (hook.collidesTop(obstacle) 
      ) {
    if(obstacle.canBeElectrified === false
      || obstacle.canBounce === true){
        player.hookedOnPlatform = true;
        player.y = player.y - 10
        player.vy = -26;
        hook.solidState = true;
        hook.y = obstacle.y + obstacle.h;
        hook.vy = 0;
        hook.dispose = false;
        barHit.play();
        setTimeout(() => {
          player.g = 1
        }, 500);
      }
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




  function checkDarkBubbleCollision(darkBubbles, player, platforms, bubbles, puffBubbles, bouncers){
    darkBubbles.forEach((bubble) => {//player darkbubble
      if (bubble.collides(player) && !playerIsImmune) {
        if(player.y + player.h <= bubble.y +30 ){
          player.vy = -3;
        } else {
          if (!player.auraIsActive) {
            player.loseLife(bubble.damage, true); //el daño al jugador se le hace según lo que marca el daño de la burbuja. a burbuja más pequeña, menos daño
            bubble.vy = -bubbleSpeedY; // rebota encima del jugador haciéndole daño
            losingMoney(player, 3)
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
              darkBubbleExplosion( bubble, bubbles, puffBubbles)//explota y genera bubbles pequeños
            }
          }
          if (platform.isBouncable) {
            darkBubbleBounceSound.play();
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
          darkBubbleBounceSound.play();
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
          bubble.w += 20;
          bubble.h += 20;
          bubble.x -= 1;
          bubble.y -= 1;
          darkBubbbleHit.play()
          if(bubble.w >= CTXW/4){
            darkBubbleExplosion( bubble, bubbles, puffBubbles)//explota y genera bubbles pequeños
          }
          return false;
        } else return true;
      });
    });
  }

  
  function losingMoney (player, amount){
    coins -= amount
    player.life.isLosing = true;
    player.life.amountOfGainedCoins = amount;
  }