// enemies array
var enemies = ['Boss', 'Zombie', 'Plant', 'Gremlin', 'FlyingSheep', 'FlyingMonkey', 'BullBlob', 'Blob'];

var enemyAttacks = ['Antioxidants', 'Brain-Dead', 'Chloro-fiend', 'Shaving Cream Prank', 'Static Lightning', 'Scratching Armpit', 'Slow Slime-Charge', 'Pectin Slap']

var fireEffectivenessFactor =    [0, 2, 2, 0, 0, 2, 1, 0]
var swordEffectivenessFactor =   [2, 0, 0, 0, 2, 0, 1, 0]
var axeEffectivenessFactor =     [1, 1, 2, 1, 0, 0, 0, 0]
var hammerEffectivenessFactor =  [1, 2, 0, 2, 1, 0, 0, 0]
var neutronEffectivenessFactor = [3, 3, 5, 4, 5, 5, 4, 3]

var fireEffectivenessText = ["It wasn't very effective.", "It was SUPER effective. Yikes.", "It was SO effective. SAD.", '"Is it a little warm in here?"', "Baaaad choice. Didn't do much.", "It was super effective...for some reason.", "I mean, it didn't NOT hurt it.", "Well that didn't work."]

var swordEffectivenessText = ["It slices! It Dices!", "Didn't work and un-dead guy is still coming.", "It wasn't very effective.", "Probably not the best weapon.", "It worked real good. And, also, wool!", "It worked like crap. Speaking of--DUCK!", "Went through it like butter...but it didn't do anything.", "Uh, not the best weapon."]

var axeEffectivenessText = ["That didn't do much."]

var weapons = ['Sword', 'Axe', 'Hammer']
var currentWeapon = 0;

// Stored Data Variables
var currentEnemy = 7;
var nextEnemy = 6;
var enemy = new Object();
    enemy.currentEnemy = 0; 
    enemy.currentHealth = 100;

var damageLevel = 10;
var hero = {currentHealth: 100};
var calculatedDamage = 0;

// New Object Constructor
/* var gameCharacter = new Object();
    gameCharacter.eventInitiator = ['Bill ', 'The ' + enemies[currentEnemy]];
    gameCharacter.eventAction = ['attacked ', 'was hit by ', 'was afflicted with '];
    gameCharacter.eventTarget = ['Bill ', 'The ' + enemies[currentEnemy]];
    gameCharacter.eventMethod = ['with a sword! ', 'with '];
    gameCharacter.eventResult = ['It wasn't very effective.', 'It sort of worked, I guess.', It was super effective.'];
    */

// State Variables
var heroTurn = true;

// var hitDamage = calculateDamage;

// Equipped Weapons
var weaponSword = document.getElementById('weaponSword');
var weaponAxe = document.getElementById('weaponAxe');
var weaponHammer = document.getElementById('weaponHammer');
var hitDamage;

// Bar fills 
var enemyHealthBarFill = document.getElementById('enemyHealthBarFill');


// functions
function doesItWork (){
    console.log("success!");
}

function calculateHitDamage() {
    hitDamage = Math.floor(Math.random() * (damageLevel * (currentEnemy + 1)));
}

function lowerEnemyHealth () {
    document.getElementById('enemyHealthBarFill').style.width = (enemy.currentHealth - hitDamage) + "%";
    enemy.currentHealth -= hitDamage;
}

function loadNextEnemy() {
    nextEnemy = Math.floor(Math.random() * 7);
    // console.log(currentEnemy);
    // console.log(nextEnemy);
    document.getElementById("enemy" + enemies[currentEnemy]).setAttribute("id", ("enemy" + enemies[nextEnemy]));
    currentEnemy = nextEnemy;
    //console.log(currentEnemy);
    enemy.currentHealth = 100;
   // console.log(enemy.currentHealth);
    document.getElementById('enemyHealthBarFill').style.width = (enemy.currentHealth) + "%";
}

// Update Status Log for Attacks
function updateStatusLog(eventText1, eventText2) {
    console.log( "updateStatusLog activated");
    document.getElementById('statusLogUpdate').textContent = eventText1 + enemies[currentEnemy] + eventText2 + weapons[currentWeapon];
}



function adjustHealth() {
    if (heroTurn == true)
    {
    calculateHitDamage();
    lowerEnemyHealth();
    updateStatusLog('Bill attacked ', ' with a ');

   if (enemy.currentHealth <= 5) {
       loadNextEnemy();
   }
    heroTurn == false;
}
}
   
/* function adjustHealth () {
    if (heroTurn == true)
    {
    hitDamage = Math.floor(Math.random() * (damageLevel * (currentEnemy + 1)));
    document.getElementById('enemyHealthBarFill').style.width = (enemy.currentHealth - hitDamage) + "%";
    enemy.currentHealth -= hitDamage;
   if (enemy.currentHealth <= 0) {
       loadNextEnemy();
   }
    heroTurn == false;
}
    if (heroTurn == false) {
    
} */
/*function calculateDamage() {
   var damageFactor = calculateDamageFactor();
      return;
} */
function calculateDamage(currentenemy) {
    damageFactor = currentenemy;
     Math.random() * (6 * damageFactor +1);
}
function hitHealth () {
    document.getElementById('enemyFlyingSheep').style.width = "'" + enemy.currentEnemyHealth - calculatedDamage + "%'";
} 

weaponSword.addEventListener("click", adjustHealth);
    
/*
weaponSword.addEventListener('click', function() {
    hitDamage = Math.floor(Math.random() * (damageLevel * (currentEnemy + 1)));
    document.getElementById('enemyHealthBarFill').style.width = (enemy.currentHealth - hitDamage) + "%";
    enemy.currentHealth -= hitDamage;
   if (enemy.currentHealth <= 0) {
       loadNextEnemy();
   }
    doesItWork();
 }); 
*/
/* weaponSword.addEventListener('click', function() {
    tempDamage = calculateDamage();
    document.getElementById('enemyFlyingSheep').style.width = "'" + enemy.currentEnemyHealth - tempDamage + "%'";
                                                 doesItWork();
                                                 });
                                                 */

/*
function test(){
if (1 == 1) {switch(enemy.currentEnemy) {
        case 0:
            16;
            break;
        case 1:
            damageFactor === 32;
            break;  
        case 2:
            damageFactor === 32;
            break;
        case 3:
            damageFactor === 32;
            break;
        case 4:
            damageFactor === 32;
            break;
        case 5:
            damageFactor === 32;
            break;
        case 6:
            damageFactor === 32;
            break;
        case 7:
            damageFactor === 40;
            break;
    default:
    alert("calculateDamageFactor didn't work! ln. 44 to 74");
    
}
            }
*/



/* calculateDamage();
console.log(calculateDamage); */
//click weapon to 

