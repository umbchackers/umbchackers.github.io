var PLAYER_SPRITE_SRC = "img/player.png";
var PLAYER_DIM = 75;
var PLAYER_MOVE_INC = 50;

var LASER_SPRITE_SRC = "img/laser.png";
var LASER_DIM = 20;
var LASER_MOVE_INC = 40;

var ENEMY_SPRITE_SRC = "img/enemy.png";
var ENEMY_DIM = 30;
var ENEMY_MOVE_INC = 55;

var BOSS_SPRITE_SRC = "img/enemy-1.png";
var BOSS_DIM = 100;
var BOSS_MOVE_INC = 5;
var BOSS_HEALTH = 500;

var GAMEOVER_SPRITE_SRC = "img/game-over.png";

var WINDOW_HEIGHT = window.innerHeight;
var WINDOW_WIDTH =  window.innerWidth;

var ENEMY_HIT_PTS = 10;

var GAME = document.getElementById("game");
var LEVEL_DISPLAY = document.getElementById("level");
var SCORE_DISPLAY = document.getElementById("score");
var BOSS_HEALTH_DISPLAY = document.getElementById("bossHealth");

var PLAYER = createPlayer();

var levelNum = 1;
var score = 0;

function createPlayer() {
    // Create player sprite
    var player = document.createElement("IMG");
    player.id = "player";
    player.src = PLAYER_SPRITE_SRC;
    player.style.width = PLAYER_DIM + "px";
    player.style.height = PLAYER_DIM + "px";

    // Set player to center of bottom screen
    player.style.top = WINDOW_HEIGHT - PLAYER_DIM + "px";
    player.style.left = (WINDOW_WIDTH - PLAYER_DIM) / 2 + "px";

    return player;
}

// Collision Detection from: https://stackoverflow.com/a/29959520
var detectOverlap = (function () {
    function getPositions(elem) {
        var pos = elem.getBoundingClientRect();
        return [[pos.left, pos.right], [pos.top, pos.bottom]];
    }

    function comparePositions(p1, p2) {
        var r1, r2;
        if (p1[0] < p2[0]) {
            r1 = p1;
            r2 = p2;
        } 
        else {
            r1 = p2;
            r2 = p1;
        }
        return r1[1] > r2[0] || r1[0] === r2[0];
    }

    return function (a, b) {
        var pos1 = getPositions(a),
            pos2 = getPositions(b);
        return comparePositions(pos1[0], pos2[0]) && comparePositions(pos1[1], pos2[1]);
    };
})();


function addEnemy(x, y) {
    // Create enemy element
    var enemy = document.createElement("IMG");
    enemy.className = "enemy";
    enemy.src = ENEMY_SPRITE_SRC;
    enemy.style.width = ENEMY_DIM + "px";
    enemy.style.height = ENEMY_DIM + "px";

    // Set location
    enemy.style.top = y + "px";
    enemy.style.left = x + "px";

    // Add to game panel
    GAME.appendChild(enemy);
}

function createEnemies() {
    // Start at 20% width and height of screen
    var startX = WINDOW_WIDTH * .2;
    var startY = WINDOW_HEIGHT * .2;
    // Create three rows
    for (var j = 0; j < 3; j++) {
        startX = WINDOW_WIDTH * .2;

        // Create 12 columns
        for (var i = 0; i < 12; i++) {
            addEnemy(startX, startY);

            startX += ENEMY_DIM + 50;
        }
                    
        startY += ENEMY_DIM + 50;
    }
}

function createBoss(x,y) {
    // Start at 20% width and height of screen
    var startX = WINDOW_WIDTH * .6;
    var startY = WINDOW_HEIGHT * .6;

    var boss = document.createElement("IMG");
    boss.id = "boss";
    boss.className = "boss";
    boss.src = BOSS_SPRITE_SRC;
    boss.style.width = BOSS_DIM + "px";
    boss.style.height = BOSS_DIM + "px";

    // Set location
    boss.style.top = y + "px";
    boss.style.left = x + "px";

    // Add to game panel
    GAME.appendChild(boss);
}

//Called when Game is over
function GameOver() {
    // Start at 20% width and height of screen
    var startX = WINDOW_WIDTH * .6;
    var startY = WINDOW_HEIGHT * .6;

    var game_over = document.createElement("IMG");
    game_over.id = "game-over";
    game_over.className = "game-over";
    game_over.src = GAMEOVER_SPRITE_SRC;
    game_over.style.width = 250 + "px";
    game_over.style.height = 250 + "px";

    // Set location
    game_over.style.top = 200 + "px";
    game_over.style.left = 500 + "px";

    // Add to game panel
    GAME.appendChild(game_over);
}

function shootLaser() {
    // Create new laser sprite
    var laser = document.createElement("IMG");
    laser.className = "laser";
    laser.src = LASER_SPRITE_SRC;
    laser.style.height = LASER_DIM;
    laser.style.width = LASER_DIM;

    // Position the laser right above the player
    laser.style.top = (WINDOW_HEIGHT - PLAYER_DIM - LASER_DIM) + "px";
    var playerPosition = PLAYER.style.left;
    playerPosition = parseInt(playerPosition.replace("px", ""));
    playerPosition += LASER_DIM;
    laser.style.left = playerPosition + "px";

    // Add laser to game panel
    GAME.appendChild(laser);
}

function paint() {
    //  Get all lasers and all enemies
    var lasers = document.getElementsByClassName("laser");
    var enemies = document.getElementsByClassName("enemy");
    var boss = document.getElementsByClassName("boss")[0];

    // Go through every laser
    for (var laser of lasers) {
        // Go through every enemy
        for (var enemy of enemies) {
            // Check if the laser has hit an enemy and delete both instances if collided
            if (detectOverlap(laser, enemy)) {
                enemy.parentNode.removeChild(enemy);
                laser.parentNode.removeChild(laser);
                score += ENEMY_HIT_PTS;
                UpdateLevel();
            }
        }
        // Get laser position
        var laserPosition = laser.style.top;
        laserPosition = parseInt(laserPosition.replace("px", ""));

        // Change laser position
        laserPosition -= LASER_MOVE_INC;

        // If laser is still visible, move it
        if (laserPosition >= 0) 
            laser.style.top = laserPosition + "px";
        // If laser is not visible, remove from HTML
        else 
            laser.parentNode.removeChild(laser);
    }

    // Update scoreboard
    LEVEL_DISPLAY.innerHTML = "Level: " + levelNum;
    SCORE_DISPLAY.innerHTML = "Score: " + score;
}

//This is the scoreboard setup for level 2
function paintLevelTwo() {
    //  Get all lasers and boss
    var lasers = document.getElementsByClassName("laser");
    var boss = document.getElementsByClassName("boss")[0];

    // Go through every laser
    for (var laser of lasers) {
        // Check if the laser has hit boss and he loses health otherwise he goes away
        if (detectOverlap(laser, boss)) {
            // enemy.parentNode.removeChild(enemy);
            BOSS_HEALTH -= 25;
            laser.parentNode.removeChild(laser);
            //if Boss is put of health Boss dies and GameOver is called
            if (BOSS_HEALTH == 0) {
                boss.parentNode.removeChild(boss);
                GameOver();
            }
            score += ENEMY_HIT_PTS;
            // UpdateLevel();
        }
        // Get laser position
        var laserPosition = laser.style.top;
        laserPosition = parseInt(laserPosition.replace("px", ""));

        // Change laser position
        laserPosition -= LASER_MOVE_INC;

        // If laser is still visible, move it
        if (laserPosition >= 0) 
            laser.style.top = laserPosition + "px";
        // If laser is not visible, remove from HTML
        else 
            laser.parentNode.removeChild(laser);
    }

    // Update Boss health
    BOSS_HEALTH_DISPLAY.innerHTML = "Boss Health: " + BOSS_HEALTH;
}

/**
 * Move the enemies in a back-and-forth manner. There is no reason why they move like that other than it
 * was the easiest method to do it. This is not in the paint() function because 100ms was too fast for it 
 * to be updating because it barely looked like they were moving.
 */
function moveEnemies() {
    // Get all enemies
    var enemies = document.getElementsByClassName('enemy');

    // Go through all enemies
    for (var enemy of enemies) {
        // Get enemy position
        var enemyPosition = enemy.style.left;
        enemyPosition = parseInt(enemyPosition.replace("px", ""));

        // Change enemy position
        if (enemyPosition % 2 == 0)
            enemyPosition -= ENEMY_MOVE_INC;
        else
            enemyPosition += ENEMY_MOVE_INC;

        // Update enemy position
        enemy.style.left = enemyPosition + "px";
    }
}


//Handles moving boss to the right
function moveBossRight() {
    // Get boss
    var boss = document.getElementsByClassName('boss')[0];
    // Get boss position
    var bossPosition = boss.style.left;
    bossPosition = parseInt(bossPosition.replace("px", ""));
    direction = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (bossPosition == 1000) {
            clearInterval(id);
            moveBossLeft();
        }
        bossPosition += direction;
        boss.style.left = bossPosition + "px";
    }

}

// Handles moving boss to the left
function moveBossLeft() {
    // Get boss
    var boss = document.getElementsByClassName('boss')[0];
    // Get boss position
    var bossPosition = boss.style.left;
    bossPosition = parseInt(bossPosition.replace("px", ""));
    direction = -1;
    var id = setInterval(frame, 10);
    function frame() {
        if (bossPosition == 50) {
            clearInterval(id)
            moveBossRight();
        }
        bossPosition += direction;
        boss.style.left = bossPosition + "px";
    }
}


/*
* counts number of enemies on screen
*/
function UpdateLevel() {
    // return 
    var numOfEnemies = document.querySelectorAll(".enemy").length;
    //level 2
    if (numOfEnemies == 0) {
        levelNum++;
        clearInterval(paint);
        clearInterval(moveEnemies);
        LevelTwo();
        // addBoss(750,30);

    }
    // level 3?
    return numOfEnemies;
}

/*
* calls Level 2
*/
function LevelTwo() {
    // adds boss
    createBoss(750,30);

    setInterval(paintLevelTwo, 50);

    moveBossRight();
    BOSS_HEALTH_DISPLAY.innerHTML = "Boss Health: " + BOSS_HEALTH;

}

/**
 * This is how we listen for keyboard input.
 */
document.addEventListener("keydown", function(e) {
    var keyPressed = e.code;

    if (keyPressed == "ArrowLeft" || keyPressed == "ArrowRight") {
        // Get numeric value of player position
        var playerPosition = PLAYER.style.left;
        playerPosition = parseInt(playerPosition.replace("px", ""));

        // Bounds detection
        if (playerPosition - PLAYER_MOVE_INC <= 0 || playerPosition + PLAYER_DIM + PLAYER_MOVE_INC >= WINDOW_WIDTH)
            return;

        // Change user position based on arrow direction
        if (keyPressed == "ArrowLeft")
            playerPosition -= PLAYER_MOVE_INC;
        else 
            playerPosition += PLAYER_MOVE_INC;

        // Convert player position back to style value and set it
        playerPosition += "px";
        PLAYER.style.left = playerPosition;
    }
    else if (keyPressed == "Space") {
        shootLaser();
    }
});

function initGame() {
    // Add player to the game
    GAME.appendChild(PLAYER);

    createEnemies();

    setInterval(paint, 100);
    
    setInterval(moveEnemies, 500);

}

initGame();
