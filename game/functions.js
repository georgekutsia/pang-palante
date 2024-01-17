// function bubbleBounce(paramFirst, paramSecond){
//   if (paramFirst.y <= paramSecond.y -20) { //para que rebote justo en el top
//     paramFirst.vy = -3;
//   } else if (paramFirst.vx < 0) {
//     paramFirst.vx = 0.5;
//   } else if (paramFirst.vx > 0) {
//     paramFirst.vx = -0.5;
//   }
// }
function bubbleBounce(elem1, elem2){
  if (elem1.y < elem2.y + 5 ) { //para que rebote justo en el top
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