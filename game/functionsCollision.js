

function checkBubbleCollision(bubbles, player, bubbleSplash2, bubblePopSound1, puffBubbles, ctx, platforms, bouncers, boxes){
  bubbles.forEach((bubble) => {//player con bubble
    if(bubble.collides(player) && !player.immune) {
      if(player.y + player.h <= bubble.y +30 && bubble.w>=20){
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
 bubbles.forEach((bubble) => {//  bubble con bullet
    player.bulletArray = player.bulletArray.filter((bullet) => {
      if (bullet.collides(bubble) && !bullet.isBig) {
        bubblePuff(bubble, puffBubbles,bubbles, ctx);
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
  bubbles.forEach((bubble) => {//bubble con platform
    boxes.forEach((box) => {
      if (box.collides(bubble)) {
        bubble.bubbleBounceSound.play()
        bounceFromBox(bubble, box);
      } else return true;
    });
  });

  bubbles.forEach((bubble) => {//bubble con bouncer
    bouncers.forEach((bouncer) => {
      if (bouncer.collides(bubble)) {
        bubble.bubbleBounceSound.play()
        bounceFromObstacles(bubble, bouncer);
      } else return true;
    });
  });
}
