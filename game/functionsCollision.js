function checkBubbleCollision(bubbles, player, puffBubbles, ctx, platforms, bouncers, boxes){
  bubbles.forEach((bubble) => {//player con bubble
    if(bubble.collides(player) && !bubble.runnerBubble) {
      if(player.electricShieldIsActive){
        electroShockSound.play()
        bubble.vy = -10;
        if(bubble.w >= 150){
          bubble.isElectrifiedButBig = 0.1; //permite que las burbujas muy grandes no disminuyan tanto de tamaño
        } else {
          bubble.isElectrifiedButBig = 0; //permite que las burbujas muy grandes no disminuyan tanto de tamaño
        }
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
              if(bubble.w >= 90){
                player.x = (bubble.x + bubble.w/2) - player.w/2;
                player.y = (bubble.y + bubble.h/2) - player.h/2;
                   player.loseLife(0.003, false); //el daño al jugador se le hace según lo que marca el daño de la burbuja. a burbuja más pequeña, menos daño
              } else {
                 bubble.vy = -bubbleSpeedY; // rebota encima del jugador haciéndole daño
                  player.loseLife(bubble.damage, true); //el daño al jugador se le hace según lo que marca el daño de la burbuja. a burbuja más pequeña, menos daño
              }
            }
          }
      }
      player.wasNotDamaged = false;
      bubbleSplash2.play();
    } else return true;
  });


  bubbles.forEach((bubble) => {//  bubble con bullet
    player.bulletArray = player.bulletArray.filter((bullet) => {
      if (bullet.collides(bubble)&& !bubble.runnerBubble && !bullet.isBig) {
        let hea = new HealingDamage(ctx, -10 + (bullsEyeForHealth*20), 20)
        game.player.life.healingDamages.push(hea)
        totalShootsPerLevelSucces++;
        if(barDamageIsActivated){
          amountOfDamageForBar++;
          game.cadenaAnim.img.framex++;
          let cadenaSoundPiece = new Audio("/public/sounds/swordTakenSound1.mp3");
          cadenaSoundPiece.volume = 0.01
          cadenaSoundPiece.play();

          if(amountOfDamageForBar >= 4){
            amountOfDamageForBar = 0;
            player.barAmount++;
          }
        }
        if(healingDamageIsActivated){
          bullsEyeForHealth++;
          if(bullsEyeForHealth>= amountOfBullsEyeForHealth){
            game.player.gainLife(1)
            bullsEyeForHealth = 0;
            player.life.healingDamages = []
          }
        }
        if(bubble.w >= 130 && bubble.w <= 199 ){
          bubbleAbsorbBullet.play()
          bubble.hitAmount++;
          bubble.hitAmount++;
          bubble.w += 10;
          bubble.h += 10;
        } else if (bubble.w >= 200){
          bubbleAbsorbBullet.play()
          bubble.hitAmount++
          bubble.w += 10;
          bubble.h += 10;
        } else {
          bubblePuff(bubble, puffBubbles, bubbles, ctx, bullet.timeStop);
          bubblePopSound1.play();
        }
        if(bubble.hitAmount >= 6){
          bubblePuff(bubble, puffBubbles, bubbles, ctx);
          bubblePopSound1.play();
        }
        if(bullet.electrified){
          return true
        } else {
          return false;
        }
      } else return true;
    });
  });
 bubbles.forEach((bubble) => {//  bubble con bullet
  player.bulletArray.forEach((bullet) => {
      if (bullet.collides(bubble)&& !bubble.runnerBubble && bullet.isBig) {
        let hea = new HealingDamage(ctx, -10 + (bullsEyeForHealth*20), 20)
        game.player.life.healingDamages.push(hea)
        totalShootsPerLevelSucces++;
        if(barDamageIsActivated){
          amountOfDamageForBar++;
          game.cadenaAnim.img.framex++;
          let cadenaSoundPiece = new Audio("/public/sounds/swordTakenSound1.mp3");
          cadenaSoundPiece.volume = 0.01
          cadenaSoundPiece.play();


          if(amountOfDamageForBar >= 4){
            amountOfDamageForBar = 0;
            player.barAmount++;
          }
        }
        if(healingDamageIsActivated){
        bullsEyeForHealth++;
        if(bullsEyeForHealth>= amountOfBullsEyeForHealth){
          game.player.gainLife(1)
          bullsEyeForHealth = 0;
          player.life.healingDamages = []
        }
      }
        bigWeaponBubble(ctx, bullet,  player)
        bullet.dispose = false;
      } else return true;
    });
  });

  bubbles.forEach((bubble) => {//bubble con fire
    player.bulletFireArray.forEach((bullet) => {
      if (bullet.collides(bubble) && !bubble.runnerBubble) {
        if(fireDesaceleration){
          bullet.vy = -0.3;
        }
        if(bubble.w >= 80){
          bubble.w -= bullet.damage/5;
          bubble.h -= bullet.damage/5;
        } else {
          bubble.w -= bullet.damage;
          bubble.h -= bullet.damage;
        }
        if (bubble.w <= bubble.explodingSize) {
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
      if (bullet.collides(bubble) && !bubble.runnerBubble) {
        if(bubble.w >=200){
          bullet.solidState = true;
        }else if (bubble.w >=140 && bubble.w <= 199) {
          bullet.solidState = true;
        } else {
          bullet.life --;
          bubblePuff(bubble, puffBubbles, bubbles, ctx);
          bubblePopSound1.play(); //todo -- Sonido paso 3) invocar el sonido
          if (bullet.life <= 0) {
            bullet.dispose = false;
          }
        }
        return false;
      } else return true;
    });
  });
  
  bubbles.forEach((bubble) => {//bubble con platform
    platforms.forEach((platform) => {
      if (platform.collides(bubble) && !bubble.runnerBubble) {
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
  for (let i = 0; i < bubbles.length; i++) {
    const bubble1 = bubbles[i];
    for (let j = 0; j < bubbles.length; j++) {
      if (i !== j) {
        const bubble2 = bubbles[j];
        if (bubble2.collides(bubble1) && !bubble1.runnerBubble1 && bubble1.bounceFromEachOtherB) {
            bubbleBounceSound.play();
            bounceFromObstacles(bubble1, bubble2);
          break;
        }
      }
    }
  }
  

  bubbles.forEach((bubble) => {//bubble con boxes
    boxes.forEach((box) => {
      if (box.collides(bubble)&& !bubble.runnerBubble) {
        bubbleBounceSound.play()
        bounceFromObstacles(bubble, box);
      } else return true;
    });
  });

  bubbles.forEach((bubble) => {//bubble con bouncer
    bouncers.forEach((bouncer) => {
      if (bouncer.collides(bubble)&& !bubble.runnerBubble) {
        bubbleBounceSound.play()
        bounceFromObstacles(bubble, bouncer, 5);
      } else return true;
    });
  });


  bubbles.forEach((bubble) => {//  bulletBar con Bubble
    player.swordArray.forEach((bullet) => {
      if (bullet.collides(bubble)&& !bubble.runnerBubble) {
        coins += 2;
        bubble.swordSpeed = -2;
        player.swordPowerUp++;
        handleSwordClick()
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
    player.ableToJump = true;
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
    bar.shootBarSound.volume = 0;
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
        if(player.y + player.h <= bubble.y + 20 ){
          player.vy = -3;
        } else {
          if (!player.auraIsActive) {
            player.loseLife(bubble.damage, true); //el daño al jugador se le hace según lo que marca el daño de la burbuja. a burbuja más pequeña, menos daño
            bubble.vy = -bubbleSpeedY; // rebota encima del jugador haciéndole daño
            losingMoney(player, 3);
            darkBubbleCollisionBlind = true;
            game.stop();
            game.start()
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
            if(bubble.w >= CTXW/8){
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


   darkBubbles.forEach((bubble) => {//bouncer con darkBubble
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
          bubble.x -= 10;
          bubble.y -= 10;
          darkBubbbleHit.play()
          if(bubble.w >= CTXW/5){
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

  function swordCollision(platforms, player, boxes){
    platforms.forEach((platform) => {//sword con bullets normales
      player.swordArray.forEach((bullet) => {
        if (bullet.collides(platform)) {
          if (!platform.isSolid) {
            platformHitSolid.play()
            basicBulletBounce(bullet, platform);
          } else {
            platformHitBreak.play()
            const newColor = platform.calculateNewColorSword();
            platform.damagedBySword = 3;
            platform.color = newColor;
            if (platform.life <= 0) {
              coins+=5;
              player.life.amountOfGainedCoins = 5;
              player.life.isGaining = true;
              coinsSound1.play()
              platform.x = -200;
            }
          }
          return true;
        } else return true;
      });
    });
    boxes.forEach((box) => {//  box con bullet
      player.swordArray.filter((bullet) => {
        if (bullet.collides(box)) {
          box.boxHitSword();
          return false;
        } else return true;
      });
    });
  }
  function bulletCollidesFire(player){
    player.bulletArray.forEach((bullet) => {//  bulletBar con bullet
      player.bulletFireArray.forEach((fire) => {
        if (bullet.collides(fire) && shopBulletWithFire) {
          fire.shootFireToSides();
          bullet.dispose = false;
          return false;
        } else return true;
      });
    });
  }