const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const danoDragon = () => {
  return getRandomInt(15, dragon.strength);
}

const danoWarrior = () => {
  const danoMaximo = warrior.strength * warrior.weaponDmg;
  return getRandomInt(warrior.strength, danoMaximo);
}

const danoMage = () => {
  let danoMage;
  let manaMage;
  if (mage.mana < 15) {
    danoMage = 'Não possui mana suficiente';
    manaMage = 0;
  } else {
    danoMage = getRandomInt(mage.intelligence, mage.intelligence * 2);
    manaMage = 15;
  }

  return {dano: danoMage, mana: manaMage};
}

const gameActions = {
  // Crie as HOFs neste objeto.
  warrior1: (danoWarrior) => {
    const dano = danoWarrior();
    
    dragon.healthPoints = dragon.healthPoints - dano;
    warrior.damage = dano;
  },
  mage1: (danoMage) => {
    const obj = danoMage()
    const dano = obj.dano;
    const mana = obj.mana;
    
    dragon.healthPoints = dragon.healthPoints - dano;
    mage.damage = dano;
    mage.mana = mana;
  },
  dragon1: (danoDragon) => {
    const dano = danoDragon();

    mage.healthPoints = mage.healthPoints - dano;
    warrior.healthPoints = warrior.healthPoints - dano;
    dragon.damage = dano;
  },
  battleMembers: () => battleMembers,
};

gameActions.warrior1(danoWarrior);
gameActions.mage1(danoMage);
gameActions.dragon1(danoDragon);
console.log(gameActions.battleMembers());