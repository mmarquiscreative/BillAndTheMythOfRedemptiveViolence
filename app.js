
/////////////////////////
//                     //
//  *** Variables ***  //
//                     //
/////////////////////////


//******//  Storage Variables  //******// 

//--// Damage Calculation
var dmgLvl = [0, 1, 2, 3, 4];
var damageLevel = 10;

//--// Weapons/Attacks
var currentWeapon = 0;
var currentAttackType = 0;

// Stored Data Variables
var currentEnemy = 7;
var nextEnemy = 6;
var enemy = new Object();
    enemy.currentEnemy = 1; 
    enemy.currentHealth = 100;

var hero = {currentHealth: 100};
var calculatedDamage = 0;

// State Variables
var heroTurn = true;

// var hitDamage = calculateDamage;


var hitDamage;

// Bar fills 
var enemyHealthBarFill = document.getElementById('enemyHealthBarFill');



//******//  Section: Game Characters  //******// 


// Character Object Constructor

function Character(name, htmlId, attack, effectivenessSword, effectivenessAxe, effectivenessHammer, effectivenessFire, effectivenessNeutrino, callId, effectivenessText0, effectivenessText1, effectivenessText2, effectivenessText3, titleCardText) {
    this.name=name;
    this.htmlId = htmlId;
    this.attack = attack; 
    this.effectivenessSword = effectivenessSword;
    this.effectivenessAxe = effectivenessAxe;
    this.effectivenessHammer = effectivenessHammer;
    this.effectivenessFire = effectivenessFire;
    this.effectivenessNeutrino = effectivenessNeutrino;
    this.callId = callId;
    this.effectivenessText0 = effectivenessText0;
    this.effectivenessText1 = effectivenessText1;
    this.effectivenessText2 = effectivenessText2;
    this.effectivenessText3 = effectivenessText3;
    this.titleCardText = titleCardText;
}


//--// Character Objects (Enemies)

var blob = new Character('Micro-Blob', 'enemyBlob', 'Pectin Slap', dmgLvl[0], dmgLvl[0], dmgLvl[0], dmgLvl[0], dmgLvl[3], document.getElementById('enemyBlob'), 'Please puny non-vegetable. You are but a shallot to me.', "It was moderately effective.", 'Slice and dice baby! Slice and dice!', 'Holy cats! That worked amazing!', "Bill vs a Micro-Blob");


var bullBlob = new Character('Bull Blob', 'enemyBullBlob', 'Goo Cannon', dmgLvl[1], dmgLvl[0], dmgLvl[0], dmgLvl[1], dmgLvl[4], document.getElementById('enemyBullBlob'), 'Please puny non-vegetable. You are but a shallot to me.', "It was moderately effective.", 'Slice and dice baby! Slice and dice!', 'Holy cats! That worked amazing!', "Bill vs a Bull Blob");


var flyingMonkey = new Character('Flying Monkey', 'enemyFlyingMonkey', 'Bananarang', dmgLvl[0], dmgLvl[0], dmgLvl[0], dmgLvl[2], dmgLvl[5], document.getElementById('enemyFlyingMonkey'), 'Please puny non-vegetable. You are but a shallot to me.', "It was moderately effective.", 'Slice and dice baby! Slice and dice!', 'Holy cats! That worked amazing!', "Bill vs a Flying Monkey");


var flyingSheep = new Character('Flying Sheep', 'enemyFlyingSheep', 'Static Cloud', dmgLvl[2], dmgLvl[0], dmgLvl[1], dmgLvl[0], dmgLvl[5], document.getElementById('enemyFlyingSheep'), 'Please puny non-vegetable. You are but a shallot to me.', "It was moderately effective.", 'Slice and dice baby! Slice and dice!', 'Holy cats! That worked amazing!', "Bill vs a Flying Sheep");


var gremlin = new Character('Gremlin', 'enemyGremlin', 'Shaving Cream Prank', dmgLvl[0], dmgLvl[1], dmgLvl[2], dmgLvl[0], dmgLvl[4], document.getElementById('enemyGremlin'), 'Please puny non-vegetable. You are but a shallot to me.', "It was moderately effective.", 'Slice and dice baby! Slice and dice!', 'Holy cats! That worked amazing!', "Bill vs a Gremlin");


var plant = new Character('Carnivorous Tulip', 'enemyPlant', 'Chloro-Form', dmgLvl[0], dmgLvl[2], dmgLvl[0], dmgLvl[2], dmgLvl[5], document.getElementById('enemyPlant'), 'Please puny non-vegetable. You are but a shallot to me.', "It was moderately effective.", 'Slice and dice baby! Slice and dice!', 'Holy cats! That worked amazing!', "Bill vs a Carnivorous Tulip");


var zombie = new Character('Rock Zombie', 'enemyZombie', 'Braaaaaiiinnnssss...', dmgLvl[0], dmgLvl[1], dmgLvl[2], dmgLvl[2], dmgLvl[3], document.getElementById('enemyZombie'), 'Please puny non-vegetable. You are but a shallot to me.', "It was moderately effective.", 'Slice and dice baby! Slice and dice!', 'Holy cats! That worked amazing!', "Bill vs a Rock Zombie");


var boss = new Character("Mondo 'Mato King", 'enemyBoss', 'Antioxidance', dmgLvl[2], dmgLvl[1], dmgLvl[1], dmgLvl[0], dmgLvl[2], document.getElementById('enemyBoss'), 'Please puny non-vegetable. You are but a shallot to me.', "It was moderately effective.", 'Slice and dice baby! Slice and dice!', 'Holy cats! That worked amazing!', "Bill vs the Mondo 'Mato King");


//--// Array of Character Objects (Enemies)
var enemies = [boss, zombie, plant, gremlin, flyingSheep, flyingMonkey, bullBlob, blob];




//******//  Section: Game Weapons and Attack Variables  //******// 

//--// weaponType Object Constructor
function WeaponType(name, htmlId) {
    this.name = name;
    this.htmlId = htmlId;
}

//--// weaponType variables
var sword = new WeaponType('Sword', 'weaponSword');
var axe = new WeaponType('Axe', 'weaponAxe');
var hammer = new WeaponType('Hammer', 'weaponHammer');

//--// weaponType Object Array
var weaponType = [sword, axe, hammer];

//--// weaponType getElementById Shorthand
var weaponSword = document.getElementById('weaponSword');
var weaponAxe = document.getElementById('weaponAxe');
var weaponHammer = document.getElementById('weaponHammer');

//--// Attack Type Array -- informs currentAttackType variable

var attackType = ['Sword', 'Axe', 'Hammer', 'Fire', 'Meteor Strike'];


//******//  Section: Button Variables  //******// 

//--// buttonItem Object Constructor
function ButtonItem(name, htmlId, buttonClickFunction) {
    this.name = name;
    this.htmlId = htmlId;
    this.buttonClickFunction = buttonClickFunction;
}


//--// buttonItem Objects
var fireAttack = new ButtonItem('Fire Attack', 'FireAttack', buttonFireAttack);
var healBurst = new ButtonItem('Heal Burst', 'HealBurst', buttonHealBurst);
var ectoArmor = new ButtonItem('Ecto Armor', 'EctoArmor', buttonEctoArmor);
var meteorStrike = new ButtonItem('Meteor Strike', 'MeteorStrike', buttonMeteorStrike);


//--// button Functions
function buttonFireAttack(){};
function buttonHealBurst(){};
function buttonEctoArmor(){};
function buttonMeteorStrike(){};

var buttonItems = [fireAttack, healBurst, ectoArmor, meteorStrike]





/////////////////////////
//                     //
//  --- Functions ---  //
//                     //
/////////////////////////


function doesItWork (){
    console.log("success!");
}

function adjustHealth() {
        calculateHitDamage();
        lowerOpponentHealth();
        if (heroTurn === true) {
            updateStatusLog('Bill used ' + attackType[currentAttackType] + ' on ' + enemies[currentEnemy].name + '.');
        } else {
            updateStatusLog(enemies[currentEnemy].name + 'used ' + enemies[currentEnemy].attack + '.');
        }

        if (enemy.currentHealth <= 5) {
        loadNextEnemy();
        }
    }   

    function lowerOpponentHealth () {
    if (heroTurn === true) {
        document.getElementById('enemyHealthBarFill').style.width = (enemy.currentHealth - hitDamage) + '%';
        enemy.currentHealth -= hitDamage;
    } else if (heroTurn === false) {
    document.getElementById('healthBarFill').style.width = (hero.currentHealth - hitDamage) + '%';
    hero.currentHealth -= hitDamage;
    }
}

function calculateHitDamage() {
    if (heroTurn === true){
        hitDamage = Math.floor(Math.random() * (damageLevel * (currentEnemy + 1)));
    } else {
         hitDamage = Math.floor(Math.random() * (damageLevel * (currentEnemy + 1)));
    }
    
}

  
function loadNextEnemy() {
    nextEnemy = Math.floor(Math.random() * 7);
console.log(currentEnemy);
console.log(nextEnemy);
   document.getElementById(enemies[currentEnemy].htmlId).id = enemies[nextEnemy].htmlId;
    currentEnemy = nextEnemy;
console.log(currentEnemy);
    enemy.currentHealth = 100;
console.log(enemy.currentHealth);
    document.getElementById('enemyHealthBarFill').style.width = (enemy.currentHealth) + "%";
    document.getElementById('battleDescription').textContent = 'Bill vs ' + enemies[currentEnemy].name + "'";
    updateTitleCard();
}

function updateTitleCard() {
    if (currentEnemy = 0) {
        document.getElementById('enemyTitleCard').setAttribute("id", '.bossTitleCard');
        document.getElementById('bossTitleCard').innerHTML = 'Bill vs ' + enemies[currentEnemy].name + "'";
        
    }
}
// Update Status Log for Attacks
function updateStatusLog(eventText) {
    console.log( "updateStatusLog activated");
    document.getElementById('statusLogUpdate').textContent = eventText;
    
    

}



/*
function calculateDamage(currentenemy) {
    damageFactor = currentenemy;
     Math.random() * (6 * damageFactor +1);
}
*/
/*
function hitHealth () {
    document.getElementById(enemies[currentEnemy].htmlId).style.width = "'" + enemy.currentEnemyHealth - calculatedDamage + "%'";
}  
   */ 
weaponSword.addEventListener('click', adjustHealth);
