let tick = 440;
function level1(gameTime, ctx, platforms, bouncers, stairs, flamethrowers, healings, auras, boxes){
  tick++
  addPlatforms(ctx, platforms)
  addBouncer(ctx, bouncers)
  addStair(ctx, stairs)
  if(tick >= 460){
    flamethrowerItem(ctx, flamethrowers)
    healingItem(ctx, healings)
    auraItem(ctx, auras)
       // ctx, array.push, nivel de resistencia, de 1 dificil a 3 fácil
    boxItem(ctx, boxes, 1)
    tick = 0;
  }
}

function addPlatforms(ctx, platforms){
  const platform = new Platform(ctx, 20, 20, 25, 5, "../public/Imagenes/obstacles/platformSolid1.png", false, true);
  platforms.push(platform);
}
      //!  la anchura más la altura de la plataforma nunca debe superar 60, para que el total de red sea como máximo 240;
      //opciones de anchura y altura  son 25, 5 la estándar y mínima. Las siguiente suben de 10 en 10 en anchura

function addBouncer(ctx, bouncers){
  const bouncer1 = new Bouncer(ctx, 30, 70, 20, 80)
  bouncers.push(bouncer1)
}


function addStair(ctx, stairs) {                         // this.ctx, ubicacion en eje x, ubicacion en eje y, ancho y alto. la última sería la imágen
  //! la escalera no debería colgar sola en el aire, debería tener una parte de la plataforma debajo o pasan cosas raras con la gravedad
  const stair1 = new Stair(ctx, 81, 90,  30, 40);
  stairs.push(stair1,);
}

function flamethrowerItem(ctx, flamethrowers) {  //función para añadir obstáculo
  const flamethrower = new Flamethrower(ctx)
  flamethrowers.push(flamethrower)
}

function healingItem(ctx, healings) {  //función para añadir obstáculo
  const healingItem = new Healing(ctx )
  healings.push(healingItem)
}

function auraItem(ctx, auras) {  //función para añadir obstáculo
  const aura = new Aura(ctx)
  auras.push(aura)
}

function boxItem(ctx, boxes,boxLevel) {  //función para añadir obstáculo
  const box = new Box(ctx, boxLevel)
  boxes.push(box)
}