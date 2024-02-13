//variables
const ore = "ore";
const wood = "wood";
const supply_types = [ore, wood];
const supply_costs = {
ore: 3,
wood: 1
}

const sword = "sword";
const axe = "axe";
const weapon_types = [sword, axe];
const weapon_price = { // Amount each weapon sells for
sword: 5,
axe: 4
}
const weapon_make_requirements = {
sword: {ore: 2, wood: 1},
axe: {ore: 1, wood: 2}
}
// Blacksmith's state
let blacksmith = {
  ore: 5,
  wood: 10,
  gold: 10,
  fireActive: 0,
  weapons: {
    sword: 0,
    axe: 0
  }
};

function fire() {
  if (blacksmith.fireActive === 0) {
    blacksmith.fireActive = 1;
    if (blacksmith.wood > 0) {
      blacksmith.wood -= 1;
      console.log("You have made fire!");
    } else {
      console.log("You have no wood!");
    }
  } else {
    blacksmith.fireActive = 0;
    console.log("You have put out the fire!");
  }
}

function buy(item) {
  if (blacksmith.fireActive === 1) {
    console.log("You cannot buy when fire is active");
  } else {
    if (item === "wood") {
      if (blacksmith.gold >= 1) {
        blacksmith.wood += 1;
        blacksmith.gold -= 1;
        console.log("Bought wood for 1 gold.");
      } else {
        console.log("You don't have enough money to buy wood");
      }
    } else if (item === "ore") {
      if (blacksmith.gold >= 3) {
        blacksmith.ore += 1;
        blacksmith.gold -= 3;
        console.log("Bought ore for 3 gold.");
      } else {
        console.log("You don't have enough money to buy ore");
      }
    } else {
      console.log("Cannot buy unknown item type: " + item);
    }
  }
}
function make(weapon) {
  if (blacksmith.fireActive === 0) {
    console.log("You need to have the fire on")
  } else {
      if (weapon === "sword") {
    if (blacksmith.ore >= weapon_make_requirements.sword.ore && blacksmith.wood >= weapon_make_requirements.sword.wood) {
      blacksmith.ore -= weapon_make_requirements.sword.ore;
      blacksmith.wood -= weapon_make_requirements.sword.wood;
      blacksmith.weapons.sword++;
      console.log("You have made a sword");
    } else {
      console.log("You need more materials to make a sword");
    }
  } else if (weapon === "axe") {
    if (blacksmith.ore >= weapon_make_requirements.axe.ore && blacksmith.wood >= weapon_make_requirements.axe.wood) {
      blacksmith.ore -= weapon_make_requirements.axe.ore;
      blacksmith.wood -= weapon_make_requirements.axe.wood;
      blacksmith.weapons.axe++;
      console.log("You have made an axe");
    } else {
      console.log("You need more materials to make an axe");
    }
  } else {
    console.log("Invalid weapon type");
  }
}
}

function sell(weapon) {
  if (blacksmith.fireActive === 1) {
    console.log("You cannot sell when fire is active");
  } else {
  if (weapon === "sword") {
    if (blacksmith.weapons.sword > 0) {
      blacksmith.weapons.sword--;
      blacksmith.gold += 5;
      console.log("You have sold a sword");
    } else {
      console.log("You don't have any swords to sell");
    }
  } else if (weapon === "axe") {
    if (blacksmith.weapons.axe > 0) {
      blacksmith.weapons.axe--;
      blacksmith.gold += 4;
      console.log("You have sold an axe");
    } else {
      console.log("You don't have any axes to sell");
    }
  } else {
    console.log("Invalid weapon type");
  }
}
}

function inventory() {
  console.log("Inventory:");
  console.log(" Ore: "+ blacksmith.ore);
  console.log(" Wood: "+ blacksmith.wood);
  console.log(" Gold: "+ blacksmith.gold);
  console.log(" Weapons:");
  for (const [weapon, quantity] of Object.entries(blacksmith.weapons)) {
  console.log(" " + weapon + ": " + quantity);
  }
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
