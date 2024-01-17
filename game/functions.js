function bubbleBounce(paramFirst, paramSecond){
  if (paramFirst.y <= paramSecond.y -20) { //para que rebote justo en el top
    paramFirst.vy = -3;
  } else if (paramFirst.vx < 0) {
    paramFirst.vx = 0.5;
  } else if (paramFirst.vx > 0) {
    paramFirst.vx = -0.5;
  }
}