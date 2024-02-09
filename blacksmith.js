//variables
let wood = 2
let fireActive = false

let money = 0
let ore = 0

let sword = 0
let axe = 0


// Functions

function fire(){
    if(fire === false){
        fireActive = false
        console.log("You have put out the fire!")
    } else if (wood > 0){
        fireActive = true
        wood = wood - 1 
        console.log("You have made fire!")
    } else {
        console.log("You have no wood!")
    }
}

function buy(wood){
  if (money = 1) {
    wood = 1
    console.log("Shop List: Wood = $1 Ore = $3")
  } else if (money > 1) {
    console.log("You don't have enough money")
  }
}

function buy(ore){
  if (money = 3) {
  ore = 1 
  console.log("Shop List: Wood = $1 Ore = $3")
  } else if (money < 3){
    console.log("You don't have enough money")
  }
}

/**
 * make
 */
function make(sword){
  if (ore = 2, wood = 1){
    console.log("You have made a sword")
  } else if (ore < 2, wood < 1){
    console.log("You need more materials to make a sword")
  }
}

function make(axe){
  if (ore = 1, wood = 2){
    console.log("You have made an axe")
  } else if (ore < 1, wood < 2){
    console.log("You need more materials to make an axe")
  }
}

/**
 * sell
 */
function sell(sword){
  if (sword = 1){
    money = money + 5
    console.log("You have sold a sword")
  } else if (sword < 1){
    console.log("You don't have a sword to sell")
  }
}

function sell(axe){
  if (axe = 1){
    money = money + 4
    console.log("You have sold a axe")
  } else if (axe < 1){
    console.log("You don't have an axe to sell")
  }
}



/**
 * inventory
 * Shows the players current inventory
 */
function inventory(){


}


/**
 * Help Command
 * Returns the instruction on how to play the game.
 */
function help () {
  return `INSTRUCTIONS:
  Blacksmith is a simple text base game. 
  
  As a blacksmith you convert ore and wood into swords and axes. You buy your resources using gold and sell your weapons for gold.
  
  COMMANDS:
  - buy(item)
  - make(item)
  - sell(item)
  - fire()
  - inventory()
  - help()`
}

// Log the help() function
console.log(help())
