
let levelTick = 2849;
function level1(gameTime, ctx, platforms, bouncers, stairs, flamethrowers, healings, auras, boxes){
   levelTick++
  if(levelTick > 2850){
  addPlatforms(ctx, platforms)
  addBouncer(ctx, bouncers)
  addStair(ctx, stairs)
  // flamethrowerItem(ctx, flamethrowers)
  // healingItem(ctx, healings)
  auraItem(ctx, auras)
  boxItem(ctx, boxes)
  levelTick = 0;
  }
}

function addPlatforms(ctx, platforms){
                                                          //! ctx, x, y , w, h, image de 1 a 4,  si se puede romper o no a disparos, si se romperá al ponerse encima
  const platform = new Platform(ctx, 20, 20, 25, 5, "../public/Imagenes/obstacles/platformSolid1.png", false, true);
  const platform1 = new Platform(ctx, 60, 90, 25, 5, "../public/Imagenes/obstacles/platformSolid2.png", true, true);
  const platform2 = new Platform(ctx, 90, 90, 25, 5, "../public/Imagenes/obstacles/platformSolid3.png", true, true);
  platforms.push(platform, platform1,platform2);
}
      //!  la anchura más la altura de la plataforma nunca debe superar 60, para que el total de red sea como máximo 240;
      //opciones de anchura y altura  son 25, 5 la estándar y mínima. Las siguiente suben de 10 en 10 en anchura

function addBouncer(ctx, bouncers){
  const bouncer1 = new Bouncer(ctx, 30, 70, 20, 30)
  bouncers.push(bouncer1)
}


function addStair(ctx, stairs) {                         // this.ctx, ubicacion en eje x, ubicacion en eje y, ancho y alto. la última sería la imágen
  //! la escalera no debería colgar sola en el aire, debería tener una parte de la plataforma debajo o pasan cosas raras con la gravedad
  const stair1 = new Stair(ctx, 81, 90,  30, 40);
  stairs.push(stair1,);
}

function boxItem(ctx, boxes) {  
  const box1 = new Box(ctx, 100, 20,  3)
  const box2 = new Box(ctx, 130, 20,  2)
  const box3 = new Box(ctx, 160, 20,  1)
  boxes.push(box1, box2, box3)
}
