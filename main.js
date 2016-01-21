var canvas, context;
var w, h;

var STATE_SPLASH = 0;
var STATE_GAME = 1;
var STATE_FIGHT = 2;
var STATE_GAMEWIN = 3;
var STATE_GAMELOSE = 4;

var gameState = STATE_GAME;

var Enemy = makeEnemy();

var fight_background= new Image();
fight_background.src = "imgs/Fight.png";

var time = 0;
time = time + 1;
if(time == 1600){
	time = 0
}

var bTop = new Image();
bTop.src = "imgs/bTop.png";
var bBot = new Image();
bBot.src = "imgs/bBot.png";

function clamp(value, min, max){
    if(value < min) return min;
    else if(value > max) return max;
    return value;
}

var background_sound = new Howl(
{
	urls: ["sounds/background.wav"],
	loop: true,
	buffer: true,
	volume: 0.5
});

if (gameState == STATE_GAME) {
	background_sound.play();
}

var fight_background_sound = new Howl(
{
	urls: ["sounds/fight_background.wav"],
	loop: true,
	buffer: true,
	volume: 0.5
});

var victory_sound = new Howl(
{
	urls: ["sounds/victory.wav"],
	loop: true,
	buffer: true,
	volume: 0.5
});
//victory_sound.play();

var defeat_sound = new Howl(
{
	urls: ["sounds/defeat.flac"],
	loop: true,
	buffer: true,
	volume: 0.5
});
//defeat_sound.play();

var damage_sound = new Howl(
{
	urls: ["sounds/damage.flac"],
	loop: true,
	buffer: true,
	volume: 0.5
});
//damage_sound.play();

var player_move_sound = new Howl(
{
	urls: ["sounds/player_move.wav"],
	loop: false,
	buffer: true,
	volume: 0.2
});

function UpdateFight()
{

}

window.onkeydown = function(e) {
	if(!e.repeat) {
		var keyCode = e.keyCode;
		console.log();
		switch(gameState)
	{
		
		case STATE_GAME:
			GameInput(keyCode);
			break;
		case STATE_FIGHT:
			
			FightInput(keyCode);
			break;
	}	
	
	}
}

function GameInput(keyCode) 
{
	if (gameState == STATE_GAME)
console.log();

		if(Player.moving == true){

			var moveAmount = 16

			var tileX = Math.round(Player.posX / 16);
			var tileY = Math.round(Player.posY / 16);

			if(keyCode == 87) {
				//W
				Player.facing = "up";
				if(mapTiles[tileY-1][tileX] < 50)
				Player.posY -= moveAmount;

				player_move_sound.play();
			}

			if(keyCode == 65) {
				//A
				Player.facing = "left";
				if(mapTiles[tileY][tileX-1] < 50)
				Player.posX -= moveAmount;
				player_move_sound.play();
			}

			if(keyCode == 83) {
				//S
				Player.facing = "down";
				if(mapTiles[tileY+1][tileX] < 50)
				Player.posY += moveAmount;
				player_move_sound.play();
			}

			if(keyCode == 68) {
				//D
				Player.facing = "right";
				if(mapTiles[tileY][tileX+1] < 50)
				Player.posX += moveAmount;
				player_move_sound.play();
			}
		}	
}

function FightInput (keyCode)
{

	if (Player.isturn == true && Player.health > 0)
		{
			console.log("players turn")
			if (keyCode == 87)
				{
				
					console.log("slash");
					Player.isturn = false;
				Enemy.health -= Move.slash;
				return;
				}
		
			else if (keyCode == 83) 
				{
					console.log("pound")
					Player.isturn = false;
					Enemy.health -= Move.pound;
					return;
				}
				
		} else if (Player.isturn == false && Enemy.health > 0)
			{
				console.log("Enemies  turn")
				var choice = Math.random();
				if (choice >= 0.5)
					{
							console.log(" Enemy slash");
						Player.health -= EnemyMove.slash;

					}else
					 { Player.health -= EnemyMove.pound
					 	console.log("Enemy pound")
					 } 

					Player.isturn = true;
						return;

			} else if(Player.health <= 0) {
				gameState = STATE_GAME;
				Player.moving = true;
			}if(Enemy.health <= 0) {
				gameState = STATE_GAME;
				Player.moving = true;
				Enemy.Enemyisangry = false;
			}
}

var resLoc = "imgs/";

function setup() {
	canvas = document.getElementById("gameCanvas");
	context = canvas.getContext("2d");

	w = canvas.width;
	h = canvas.height;

	//Turn off image smoothing
	context.imageSmoothingEnabled = false;

	var bird = GenerateNPC("Bird King", ["Unt", "bird_L", "bird_R", "bird_U"], "bBot", 0, 0, 10)
	bird.setup();
	npcs.push(bird);

	SetupMap();
	draw();
}


	

function runGame()
{
	context.setTransform(1,0,0,1,0,0);
    context.clearRect(0, 0, canvas.width, canvas.height);

    var scale = 3;
                                         
    var camX = (-Player.posX * scale) + w/2.5;
    var camY = (-Player.posY * scale) + h/2.5;

    context.save();
	context.translate(Math.min(camX,0), Math.min(camY, 0) );    
	context.scale(scale, scale);
	DrawMap();

	for(var n = 0; n < npcs.length; n++) {
		var tempNpc = npcs[n];
		tempNpc.gameUpdate();
		tempNpc.gameDraw();
	}

	context.drawImage(bBot, 25*16, 6*16);
	boss.draw();
	Player.draw();
	context.drawImage(bTop, 25*16, 16);
	context.restore();
}

function runFight ()
{

	FightInput();
	
	context.fillStyle = "#ccc";		
	context.fillRect(0, 0, canvas.width, canvas.height);
	context.drawImage(fight_background, 0, 0, canvas.width, canvas.height)
	
	context.fillStyle = "#000";
	context.font = "40px Arial";
	context.fillText(Player.health + "/" + Player.healthM , 1080, 470);
	
	context.fillStyle = "#000";
	context.font = "40px Arial";
	context.fillText("Lv"+Player.Player_level, 1130, 380);
	
	context.fillStyle = "#000";
	context.font = "40px Arial";
	context.fillText("Lv"+Player.Player_level, 480, 120);
	
		
	context.fillStyle = "#000";
	context.font = "50px Arial";
	context.fillText("Players Turn "+Player.isturn, 800, 100);
	
	context.fillStyle = "#52635b";
	context.fillRect (920,402,276,29);	
	
	context.fillStyle = "#0F0";
	var healthWidth = Math.max((Player.health / Player.healthM) * 273, 0);
	context.fillRect (920,404,healthWidth,25);
	
	context.fillStyle = "#52635b";
	context.fillRect (267.9,140,276,29);	
	
	context.fillStyle = "#0F0";
	var healthWidthE = Math.max((Enemy.health / Enemy.healthM) * 273, 0);
	context.fillRect (267.9,141.5,healthWidthE,25);
	
	// what will character do
	context.fillStyle = "#FFF";
	context.font = "50px Arial";
	context.fillText("What will "+Player.Name + " Do!", 80, 635);

	
	background_sound.stop();
}
	

function draw() {
	time ++;
	switch(gameState)
	{
		case STATE_GAME:
			runGame();
			break;
		case STATE_FIGHT:
			runFight();
			break;
	}	

	requestAnimationFrame(draw);
}