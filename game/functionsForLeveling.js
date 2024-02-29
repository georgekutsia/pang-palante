

function invertImage(ctx, x, y, w, h, img) {
  ctx.clearRect(x, y, w, h);
  ctx.translate(x + w / 2, y + h / 2);
  ctx.rotate(Math.PI);
  ctx.drawImage(img, -w / 2, -h / 2, w, h);
  ctx.setTransform(1, 0, 0, 1, 0, 0);
}

function randomLootFromBox(ctx, flamethrowers, healings, bars, auras, machineguns, blasters, coins, steps, hooks, x, y){
  const randomItem = Math.floor(Math.random() *9) + 1;
  if(randomItem === 1){
    const flamethrower = new Flamethrower(ctx, x, y  )
    flamethrowers.push(flamethrower)
  } else if(randomItem === 2){
    const healingItem = new Healing(ctx, x, y )
    healings.push(healingItem)
  } else if(randomItem === 3){
    const aura = new Aura(ctx, x, y)
    auras.push(aura)
  }else if(randomItem === 4){
    const machinegun = new Machinegun(ctx, x, y)
    machineguns.push(machinegun)
  } else if(randomItem === 5 ){
    const bar = new Bars(ctx, x, y)
    bars.push(bar)
  }else if(randomItem === 6){
    const blaster = new MegaFireBlaster(ctx, x, y)
    blasters.push(blaster)
  }else if(randomItem === 7){
    const coin = new Coins(ctx, x, y)
    coins.push(coin)
    }else if(randomItem === 8){
      const step = new Steps(ctx, x, y)
      steps.push(step)
  }else if(randomItem === 9){
    const hook = new Hook(ctx, x, y)
    hooks.push(hook)
}
}


function levelChangeMessagesDisplay(){
  changingLevelImg$$.style.display = "none";
  levelChangeText1$$.style.display = "none";
  levelChangeText2$$.style.display = "none";
  levelChangeText3$$.style.display = "none";
  levelChangeText4$$.style.display = "none";
}

function specificLootFromBox(ctx, specificLoot, flamethrowers, healings, bars, auras,machineguns,blasters, coins, steps, hooks, electros, x, y){
  if(specificLoot === 1){
    const flamethrower = new Flamethrower(ctx, x, y  )
    flamethrowers.push(flamethrower)
  } else if(specificLoot === 2){
    const healingItem = new Healing(ctx, x, y )
    healings.push(healingItem)
  } else if(specificLoot === 3){
    const aura = new Aura(ctx, x, y)
    auras.push(aura)
  }else if(specificLoot === 4){
    const machinegun = new Machinegun(ctx, x, y)
    machineguns.push(machinegun)
  }else if(specificLoot === 5){
    const bar = new Bars(ctx, x, y)
    bars.push(bar)
  }else if(specificLoot === 6){
      const blaster = new MegaFireBlaster(ctx, x, y)
      blasters.push(blaster)
  }else if(specificLoot === 7){
    const coin = new Coins(ctx, x, y)
    coins.push(coin)
  }else if(specificLoot === 8){
    const step = new Steps(ctx, x, y)
    steps.push(step)
  }else if(specificLoot === 9){
    const hook = new Hook(ctx, x, y)
    hooks.push(hook)
}else if(specificLoot === 10){
  const electro = new Electro(ctx, x, y)
  electros.push(electro)
}
}


