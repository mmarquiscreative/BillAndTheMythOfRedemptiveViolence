var currentEnemy = 0;
var nextEnemy = 0;
var lastEnemy = 0;
var attackPhase = true;
var currentWeapon = 'sword';
var blob, bullBlob, flyingMonkey, flyingSheep, plant, gremlin, zombie, boss;
var enemyCurrentHealth = 100;
var Character = function() {
    
}

var enemyArray = [blob, bullBlob, flyingMonkey, flyingSheep, plant, gremlin, zombie, boss, hero, enemyDead];

var Enemy = function(name, htmlId, attack, titleCardText, effectiveness, hitText1, hitText2, hitText3, hitText4) {
    this.name = name;
    this.htmlId = htmlId;
    this.attack = attack;
    this.titleCardText = titleCardText;
    this.effectiveness = effectiveness;
    this.hitText = new Array(hitText1, hitText2, hitText3, hitText4);
}

function nextEnemy() {
    
}
Enemy.prototype.intitateTurn = function() {
    if (attackPhase = true ) {
            console.log( "initiated initiateTurn function for " + this.name );
    nextEnemy = Math.floor(Math.random() * 7 + 1);
    document.getElementById('enemyDead').id = this.htmlId;
    lastEnemy = currentEnemy;
    currentEnemy = nextEnemy;
            console.log( "completed initiateTurn function for " + this.name );
}

}

Enemy.prototype.updateEnemy = function(lastHtmlId) {
        
}

Enemy.prototype.enemyAppears = function() {
            console.log( "initiated enemyAppearsTurn function for " + this.name );
    document.getElementById('enemyBattleCard').textContent = this.titleCardText;
    document.getElementById('enemyDead').id = this.htmlId;
            console.log( "completed enemyAppearsTurn function for " + this.name );

}

Enemy.prototype.updateStatusLog = function() {
            console.log( "initiated updateStatusLog function for " + this.name );
    document.getElementById('statusLogUpdate').textContent = this.name + ' used ' + this.attack + '. ';
    document.getElementById('effectLogUpdate').textContent = this.effectiveness;
            console.log( "completed updateStatusLog function for " + this.name );  
}

var blob = new Enemy('Blob', 'enemyBlob', 'Pectin Slap', 'Bill vs. Mighty Micro-Blob', 'That did nothing.', 'That had some effect.', 'That was SUPER effective', 'FINISH HIM.');

var bullBlob = new Enemy('Bull Blob', 'enemyBullBlob', 'Pectin Slap', 'Bill vs. Bull Blob!', 'It sort of tickled.', 'That did nothing.', 'That had some effect.', 'That was SUPER effective', 'FINISH HIM.');

var flyingMonkey = new Enemy('Flying Monkey of Doom', 'enemyFlyingMonkey', 'Flung Dung', 'Bill vs. Flying Monkey of Doom!', 'It sort of tickled.', 'That did nothing.', 'That had some effect.', 'That was SUPER effective', 'FINISH HIM.');

var flyingSheep = new Enemy('Flying Ewe of Wooly Doom', 'enemyFlyingSheep', 'Static Cling', 'Bill vs. Flying Ewe of Wooly Doom!', 'It sort of tickled.', 'That did nothing.', 'That had some effect.', 'That was SUPER effective', 'FINISH HIM.');

var gremlin = new Enemy('Gremlin Punk', 'enemyGremlin', 'Shaving Cream Prank', 'Bill vs. Gremlin Punk!','It sort of tickled.', 'That did nothing.', 'That had some effect.', 'That was SUPER effective', 'FINISH HIM.');

var plant = new Enemy('Carnivorous Tulip', 'enemyPlant', 'Chloro-fiend', 'Bill vs. Carnivorous Tulip!','It sort of tickled.', 'That did nothing.', 'That had some effect.', 'That was SUPER effective', 'FINISH HIM.');

var zombie = new Enemy('Stone Temple Zombie', 'enemyZombie', 'Braaaaaiiiiinnnsss...', 'Bill vs. Stone Temple Zombie!','It sort of tickled.', 'That did nothing.', 'That had some effect.', 'That was SUPER effective', 'FINISH HIM.');

var boss = new Enemy('King Mondo Mato', 'enemyBoss', 'When in Roma', 'Bill vs. Ulitmate Boss: King Mondo Mato!','It sort of tickled.', 'That did nothing.', 'That had some effect.', 'That was SUPER effective', 'FINISH HIM.');

var hero = new Enemy('Bill', 'enemyHero', currentWeapon, 'Bill vs. Mighty Micro-Blob!','It sort of tickled.', 'That did nothing.', 'That had some effect.', 'That was SUPER effective', 'FINISH HIM.');

var enemyDead = new Enemy(' ', 'enemyDead', ' ', ' ',' ', ' ', ' ', ' ', ' ');

console.log(blob);

blob.updateStatusLog();
attackTurnStart();

function attackTurnStart(){
    console.log
    enemyDead.intitateTurn();
    switch (currentEnemy){
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

function lowerEnemyHealth(){
    enemyCurrentHealth -= (Math.floor(Math.random * 7 + 1) * dmgLvl);
    if (enemyCurrentHealth < 5) {
        
    } else {
    document.getElementById('enemyHealthBarFill').style.width = enemyCurrentHealth + '%';
    }
}

document.getElementById('weaponDisplay').addEventListener('click', lowerEnemyHealth);