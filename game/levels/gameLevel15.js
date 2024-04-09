
function level15( ctx, bubbles, levelBalls, darkBubbles, steps){
  levelBallItem15(ctx, levelBalls)
  addBubble15(ctx, bubbles)
  addDarkBubble15(ctx, darkBubbles)
  addSteps15(ctx, steps)

}
function levelBallItem15(ctx, levelBalls) {  
      const levelBall2 = new LevelBall(ctx, CTXW-120, 0)
      levelBalls.push(levelBall2)
}

function addBubble15(ctx, bubbles){ 
    const bubble1 = new Bubble(ctx, CTXW/2 -275, 20, 150, 150, -0.04, 0.08, 0.000017, true, 40000)
    const bubble2 = new Bubble(ctx, CTXW/2 -75, 20, 150, 150, -0.00001, 0.08, 0.000017, true, 40000)
    const bubble3 = new Bubble(ctx, CTXW/2 + 125, 20, 150, 150, 0.04, 0.08, 0.000017, true, 40000)
    bubbles.push(bubble1, bubble2, bubble3);
}


  function addDarkBubble15(ctx, darkBubbles){
      let bu = new DarkBubble(ctx, 1, 90, 20, 20, 0.5, 0.3, 0.000001, 0, true, true)
      darkBubbles.push(bu)
  }


function addSteps15(ctx, steps){
  for (let i = 0; i < 3; i++) {
    const step = new Steps(ctx, CTXW/2 - 100 + i*100, CTXH - 100 - i*10)
    steps.push(step)
  }
}