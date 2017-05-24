////// Arbiter Game Object

var arbiter = {
    currentEnemy: [0],
    currentHeroHealth: 100,
    currentEnemyHealth: 100,
    currentWeapon: 'Fire',
    currentEnemyAttack: 'Pectin Slap',
    dmgLvl: 10,
    currentDamage: 1,
    attackPhase: true,
    enemyAttack: true,
    htmlId: 'enemyDead'
};

////// Enemies Variables/Objects

// Enemy Object Array
var enemyArray = [blob, bullBlob, flyingMonkey, flyingSheep, plant, gremlin, zombie, boss, hero, enemyDead];



// Enemy Object Constructor
var Enemy = function(name, htmlId, attack, titleCardText, weakness, resist) {
    this.name = name;
    this.htmlId = htmlId;
    this.attack = attack;
    this.titleCardText = titleCardText;
    this.weakness = weakness;
    this.resist = resist;
}

// Enemy Objects

var blob = new Enemy('Blob', 'enemyBlob', 'Pectin Slap', 'Bill vs. Mighty Micro-Blob', 'Hammer', 'Sword');

var bullBlob = new Enemy('Bull Blob', 'enemyBullBlob', 'Pectin Slap', 'Bill vs. Bull Blob!', 'Sword', 'Hammer');

var flyingMonkey = new Enemy('Flying Monkey of Doom', 'enemyFlyingMonkey', 'Flung Dung', 'Bill vs. Flying Monkey of Doom!', 'Fire', 'Axe');

var flyingSheep = new Enemy('Flying Ewe of Wooly Doom', 'enemyFlyingSheep', 'Static Cling', 'Bill vs. Flying Ewe of Wooly Doom!', 'Meteor', 'Hammer');

var gremlin = new Enemy('Gremlin Punk', 'enemyGremlin', 'Shaving Cream Prank', 'Bill vs. Gremlin Punk!','Hammer', 'Fire');

var plant = new Enemy('Carnivorous Tulip', 'enemyPlant', 'Chloro-fiend', 'Bill vs. Carnivorous Tulip!','Fire', 'Sword');

var zombie = new Enemy('Stone Temple Zombie', 'enemyZombie', 'Braaaaaiiiiinnnsss...', 'Bill vs. Stone Temple Zombie!','Axe', 'Sword');

var boss = new Enemy('King Mondo Mato', 'enemyBoss', 'When in Roma', 'Bill vs. Ulitmate Boss: King Mondo Mato!','Sword', 'Meteor');

var hero = new Enemy('Bill', 'enemyHero', arbiter.currentWeapon, 'Bill vs... ', 'Tomato', 'Ooze');

var enemyDead = new Enemy(' ', 'enemyDead', ' ', ' ',' ', ' ', ' ', ' ', ' ');


var weapons = ['Sword', 'Axe', 'Hammer', 'Fire', 'Meteors'];



// function clear status and effect logs
function updateStatusEffect(statusText, effectText) {
    document.getElementById('statusLogUpdate').textContent = statusText;
    document.getElementById('effectLogUpdate').textContent = effectText;
}

//////// Switch Equipped Weapon on button click
function clockRun(){
    console.log("Running down the clock");
}
// Equip Sword on Click
document.getElementById('itemSword').addEventListener('click', function(){
    document.getElementById('weaponEquipped').src = "weaponSword.png";
    arbiter.currentWeapon = 'Sword';
    console.log('Equipped Sword');
    updateStatusEffect('Bill equipped the Sword.', '');
});
// Equip Axe on Click
document.getElementById('itemAxe').addEventListener('click', function(){
    document.getElementById('weaponEquipped').src = "weaponAxe.png";
    arbiter.currentWeapon = 'Axe';
    console.log('Equipped Axe');
    updateStatusEffect('Bill equipped the Axe.', '');    
});

// Equip Axe on Click
document.getElementById('itemHammer').addEventListener('click', function(){
    document.getElementById('weaponEquipped').src = "weaponHammer.png";
    arbiter.currentWeapon = 'Hammer';
    console.log('Equipped Hammer');
    updateStatusEffect('Bill equipped the Hammer.', '');    
});


Enemy.prototype.testDmgLvl = calcDmgLvl;

function calcDmgLvl() {
    console.log(this.weakness);
    console.log(arbiter.currentWeapon);
    if (this.weakness == arbiter.currentWeapon) {
        arbiter.dmgLvl *= 2;
        console.log('Weakness to ' + this.weakness + '! 2x Damage!')
        document.getElementById('effectLogUpdate').textContent = 'Weakness to ' + this.weakness + '! 2x Damage!';
    } else if (this.resist = arbiter.currentWeapon) {
        arbiter.dmgLvl /= 2;
        console.log('Resistance to ' + this.resist + '! 1/2 Damage!')
        document.getElementById('effectLogUpdate').textContent = 'Resistance to ' + this.resist + '! Damage reduced by half!';

    } else {
console.log('nothing found');    }
}

/*function updateCurrentEnemyAttack () {
    console.log(arbiter.currentEnemyAttack);
    for (var i = 0; i <= )
}*/
function updateCurrentWeapon(weapontype) {
        console.log(arbiter.currentWeapon);
    arbiter.currentWeapon = window.prompt('Which weapon? Sword, Axe, Hammer, Fire or Meteors?');
    console.log(arbiter.currentWeapon);
}


////////////////////////////////////////////////
var currentEnemy = 0;
var nextEnemy = 0;
var lastEnemy = 0;
var attackPhase = true;
var currentWeapon = 'sword';
var blob, bullBlob, flyingMonkey, flyingSheep, plant, gremlin, zombie, boss;
var enemyCurrentHealth = 100;
var Character = function() {
    
}


function nextEnemy() {
    
}
Enemy.prototype.intitateTurn = function() {
    if (attackPhase = true ) {
            console.log( "initiated initiateTurn function for " + this.name );
    arbiter.currentEnemy = Math.floor(Math.random() * 7 + 1);
    document.getElementById('enemyDead').id = this.htmlId;
            console.log( "completed initiateTurn function for " + this.name );
}

}

Enemy.prototype.updateEnemy = function(lastHtmlId) {
        
}

Enemy.prototype.enemyAppears = function() {
            console.log( "initiated enemyAppearsTurn function for " + this.name );
    document.getElementById('enemyBattleCard').textContent = this.titleCardText;
    document.getElementById('enemyDead').id = this.htmlId;
    arbiter.htmlId = this.htmlId;
            console.log( "completed enemyAppearsTurn function for " + this.name );

}

Enemy.prototype.updateStatusLog = function() {
            console.log( "initiated updateStatusLog function for " + this.name );
    document.getElementById('statusLogUpdate').textContent = this.name + ' used ' + this.attack + '. ';
    document.getElementById('effectLogUpdate').textContent = this.effectiveness;
            console.log( "completed updateStatusLog function for " + this.name );  
}
attackTurnStart();

function attackTurnStart(){
    console.log
    enemyDead.intitateTurn();
    switch (arbiter.currentEnemy){
        case enemyArray[currentEnemy] = 0:
            console.log(blob.name);
            blob.enemyAppears();
            blob.updateStatusLog();
            break;
        case enemyArray[currentEnemy] = 1:
            console.log(bullBlob.name);
            bullBlob.enemyAppears();
            bullBlob.updateStatusLog();
            break;
        case enemyArray[currentEnemy] = 2:
            console.log(flyingMonkey.name);
            flyingMonkey.enemyAppears();
            flyingMonkey.updateStatusLog();
            break;
        case enemyArray[currentEnemy] = 3:
            console.log(flyingSheep.name);
            flyingSheep.enemyAppears();
            flyingSheep.updateStatusLog();
            break;
        case enemyArray[currentEnemy] = 4:
            console.log(gremlin.name);
            gremlin.enemyAppears();
            gremlin.updateStatusLog();
            break;
        case enemyArray[currentEnemy] = 5:
            console.log(plant.name);
            plant.enemyAppears();
            plant.updateStatusLog();
            break;
        case enemyArray[currentEnemy] = 6:
            console.log(zombie.name);
            zombie.enemyAppears();
            zombie.updateStatusLog();
            break;
        case enemyArray[currentEnemy] = 7:
            console.log(boss.name);
            boss.enemyAppears();
            boss.updateStatusLog();
            break;
        case enemyArray[currentEnemy] = 8:
            console.log(hero.name);
            break;
        case enemyArray[currentEnemy] = 9:
            console.log(hero.name);
            break;
    default:
        console.log('nope');
        break;
}
}


function toggleBlink() {
    var x = document.querySelector('.enemy');
    var i = 0;
   
    var flicker = function(){for (i = 0; i < 8; i++) { 
        setInterval(function() { 
            document.querySelector('.enemy').classList.toggle('enemyFlicker');
            console.log('enemyFlicker On');
    }, 200); 
    
}}
    flicker();
    clearInterval(flicker);
}


function lowerEnemyHealth(){
   arbiter.currentEnemyHealth -= Math.floor(Math.random() * 7 + 1) * arbiter.dmgLvl;
    
    if (arbiter.currentEnemyHealth < 5) {
        document.getElementById('enemyHealthBarFill').style.width = '0%';
        document.querySelector('.enemy').id = "enemyDead";
        console.log(arbiter.htmlId);
        

    } else {
    document.getElementById('enemyHealthBarFill').style.width = arbiter.currentEnemyHealth + '%';
    toggleBlink();
    
    console.log(arbiter.htmlId);
    arbiter.enemyAttack = true;
    setTimeout(enemyAttack, 1200);

    }
};

document.getElementById('weaponEquipped').addEventListener('click', lowerEnemyHealth);
function enemyAttack () {
    if (arbiter.enemyAttack === true) {
        console.log('its clobbering time');
        arbiter.enemyAttack === false;
    }
}
