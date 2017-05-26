////// Arbiter Game Object

var arbiter = {
    currentEnemy: [0],
    currentEnemyWeakness: 'Hammer',
    currentEnemyResist: 'Sword',
    currentHeroHealth: 100,
    currentEnemyHealth: 100,
    totalEnemyHealth: 100,
    percentEnemyHealth: function() {this.currentEnemyHealth / this.totalEnemyHealth * 100},
    currentWeapon: 'Sword',
    currentEnemyAttack: 'Pectin Slap',
    dmgLvl: 60,
    runCalcDmg: false,
    currentDamage: 1,
    attackPhase: true,
    enemyAttack: true,
    htmlId: 'enemyDead'
    
};


////// Enemies Variables/Objects

// Enemy Object Array
var enemyArray = [blob, bullBlob, flyingMonkey, flyingSheep, plant, gremlin, zombie, boss, hero, enemyDead];



// Enemy Object Constructor
var Enemy = function(name, htmlId, attack, enemyHealth, titleCardText, weakness, resist) {
    this.name = name;
    this.htmlId = htmlId;
    this.attack = attack;
    this.enemyHealth = enemyHealth;
    this.titleCardText = titleCardText;
    this.weakness = weakness;
    this.resist = resist;
}

// Enemy Objects

var blob = new Enemy('Blob', 'enemyBlob', 'Pectin Slap', 100, 'Bill vs. Mighty Micro-Blob', 'Hammer', 'Sword');

var bullBlob = new Enemy('Bull Blob', 'enemyBullBlob', 'Pectin Slap', 200, 'Bill vs. Bull Blob!', 'Sword', 'Hammer');

var flyingMonkey = new Enemy('Flying Monkey of Doom', 'enemyFlyingMonkey', 'Flung Dung', 350, 'Bill vs. Flying Monkey of Doom!', 'Fire', 'Axe');

var flyingSheep = new Enemy('Flying Ewe of Wooly Doom', 'enemyFlyingSheep', 'Static Cling', 600, 'Bill vs. Flying Ewe of Wooly Doom!', 'Meteor', 'Hammer');

var gremlin = new Enemy('Gremlin Punk', 'enemyGremlin', 'Shaving Cream Prank', 800, 'Bill vs. Gremlin Punk!','Hammer', 'Fire');

var plant = new Enemy('Carnivorous Tulip', 'enemyPlant', 'Chloro-fiend', 1200, 'Bill vs. Carnivorous Tulip!','Fire','Sword');

var zombie = new Enemy('Stone Temple Zombie', 'enemyZombie', 'Brains', 1400, 'Bill vs. Stone Temple Zombie!','Axe', 'Sword');

var boss = new Enemy('King Mondo Mato', 'enemyBoss', 'When in Roma', 2000, 'Bill vs. Ulitmate Boss: King Mondo Mato!','Sword', 'Meteor');

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
    
    arbiter.runCalcDmg === true;

    if (arbiter.currentEnemyWeakness == arbiter.currentWeapon) {
        arbiter.dmgLvl *= 2;
        console.log('Weakness to ' + arbiter.currentEnemyWeakness + '! 2x Damage!')
        document.getElementById('effectLogUpdate').textContent = 'Weakness to ' + this.weakness + '! 2x Damage!';
    } else if (arbiter.currentEnemyResist = arbiter.currentWeapon) {
        arbiter.dmgLvl /= 2;
        console.log('Resistance to ' + arbiter.currentEnemyResist + '! 1/2 Damage!')
        document.getElementById('effectLogUpdate').textContent = 'Resistance to ' + this.resist + '! Damage reduced by half!';

    } else {
console.log('nothing found');
document.getElementById('effectLogUpdate').textContent = 'Damage is normal.';
}
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

/*arbiter.prototype.updateArbiter = function (htmlId, currentEnHealth, totalEnHealth, runCalc, currentEnWeak, currentEnRes){
    arbiter.htmlId = htmlId;
    arbiter.currentEnemyHealth = currentEnHealth;
    arbiter.totalEnemyHealth = totalEnHealth;
    arbiter.runCalcDmg === false;
    arbiter.currentEnemyWeakness = this.weakness;
    arbiter.currentEnemyResist = this.resist;
    console.log(arbiter.currentEnemyWeakness);
console.log(arbiter.currentEnemyResist);
}
console.log(arbiter.currentEnemyWeakness);
console.log(arbiter.currentEnemyResist);
*/

Enemy.prototype.enemyAppears = function() {
    console.log( "initiated enemyAppearsTurn function for " + this.name );
    document.getElementById('enemyBattleCard').textContent = this.titleCardText;
    document.getElementById('enemyDead').id = this.htmlId;
    arbiter.htmlId = this.htmlId;
    arbiter.currentEnemyHealth = this.enemyHealth;
    arbiter.totalEnemyHealth = this.enemyHealth;
    document.getElementById('enemyHealthBarFill').style.width = '100%';
    arbiter.runCalcDmg === false;
    arbiter.currentEnemyWeakness = this.weakness;
    arbiter.currentEnemyResist = this.resist;
    console.log(arbiter.currentEnemyWeakness);
    console.log(arbiter.currentEnemyResist);
    console.log( "completed enemyAppearsTurn function for " + this.name);
};



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

console.log(arbiter.currentEnemyWeakness);
console.log(arbiter.currentEnemyResist);

function flickerBlink(){
    var counter = 0;
    var flicker = setInterval(function(){
    counter++;
    console.log("Counter is at" + counter);
    document.querySelector('.enemy').classList.toggle('enemyFlicker');
    console.log('enemyFlicker On');
    if (counter > 13) {
        clearInterval(flicker);
        console.log("Clear Interval Passed");
        }
    }, 20);
}


/*
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
*/

function lowerEnemyHealth(){
    if (arbiter.runCalcDmg === false) {
         console.log(arbiter.dmgLvl);
        calcDmgLvl();
        console.log(arbiter.dmgLvl);
    };
         
   arbiter.currentEnemyHealth -= Math.floor(Math.random() * 7 + 1) * arbiter.dmgLvl;
    console.log(arbiter.currentEnemyHealth);
    if (arbiter.currentEnemyHealth < 5) {
        document.getElementById('enemyHealthBarFill').style.width = '0%';
        document.querySelector('.enemy').id = "enemyDead";
        console.log(arbiter.htmlId);
        attackTurnStart();

    } else {
        console.log(arbiter.currentEnemyHealth);
        console.log(arbiter.totalEnemyHealth);
        var tempPercent = (arbiter.currentEnemyHealth / arbiter.totalEnemyHealth * 100);
    flickerBlink();
        console.log(tempPercent);
    document.getElementById('enemyHealthBarFill').style.width = tempPercent + '%';    
    arbiter.enemyAttack = true;
    console.log(arbiter.percentEnemyHealth());
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
