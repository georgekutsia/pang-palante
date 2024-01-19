function bubbleBounce(elem1, elem2){
  if (elem1.y < elem2.y + 5 ) {
    elem1.vy = -3;
  }
  if(elem1.y > elem2.y + elem2.h -5){
    elem1.vy = 3;
  }
  if(elem1.x < elem2.x +5){
    elem1.vx = -0.5;
  } 
  if(elem1.x > elem2.x +elem2.w - 5){
    elem1.vx = 0.5;
  }
}

function bubblePuff(bubble, puffBubbles, bubbles, ctx){
  const elx = bubble.x;
  const ely = bubble.y;
  bubble.x = -100
  const puffBubble = new BubblePuff(ctx, elx, ely, bubble.w, bubble.h)
  puffBubbles.push(puffBubble)
  const smallBubble1 = new Bubble(ctx, -0.5, -1, elx, ely, bubble.w/2, bubble.h/2, bubble.g + 0.03, bubble.damage / 2 )// al explotar una burbuja, crea otra en su lugar, usando su ubicación y dimensiones para hacerla más pequeña
  const smallBubble2 = new Bubble(ctx, 0.5, -1, elx, ely, bubble.w/2, bubble.h/2, bubble.g + 0.03, bubble.damage / 2 )
  bubbles.push(smallBubble1, smallBubble2)
}

