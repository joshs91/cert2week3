var canvas, context;
var w, h;

var STATE_SPLASH = 0;
var STATE_GAME = 1;
var STATE_FIGHT = 2;
var STATE_GAMEWIN = 3;
var STATE_GAMELOSE = 4;

var gameState = STATE_GAME;


var currentEnemy = 0;

var deathTimer = 0;

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
if (gameState == STATE_GAMEWIN) {
	victory_sound.play();
}

var defeat_sound = new Howl(
{
	urls: ["sounds/defeat.flac"],
	loop: true,
	buffer: true,
	volume: 0.5
});
if (gameState == STATE_GAMELOSE) {
	defeat_sound.play();
}

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
	var Enemy = npcs[currentEnemy];
	
if (Player.isturn == true && Player.health > 0)
			if (keyCode == 65)
	{

		{
			console.log("staminaregen")
			Player.stamina =+ 4;
			Player.isturn = false;

		}
	}


if (Player.isturn == true && Player.health > 0)
		if (keyCode == 68)
	{

		{
			console.log("Healthregen")
			Player.health += 4;
			Player.isturn = false;

		}
	}

	if (Player.isturn == true && Player.health > 0)
		{
			console.log("players turn")
			if (keyCode == 87)
				{
				
					console.log("slash");
					Player.isturn = false;
					Enemy.health -= Move.slash;
				Player.stamina -= 1;
				
				return 1;
				}
		
			else if (keyCode == 83) 
				{
					console.log("pound")
					Player.isturn = false;
					Enemy.health -= Move.pound;
					Player.stamina -= 5;
					
					return 1;
				}
				return 1;
				

				if (npcs[currentEnemy].stamina <= 0 && Player.isturn == true);
					{
						Player.isturn = true;
						npcs[currentEnemy].stamina +=2;
					}


		} else if (Player.isturn == false && Enemy.health > 0 && npcs[currentEnemy].stamina >= 1)
			{
				console.log("Enemies  turn")
				var choice = Math.random();
				if (choice >= 0.5)
					{
						console.log(" Enemy slash");
						Player.health -= EnemyMove.slash;
						Player.stamina += 1;
						npcs[currentEnemy].stamina -=1;
						damage_sound.play();
					}else
					 {
					 	damage_sound.play();
					 	Player.health -= EnemyMove.pound
					 	console.log("Enemy pound")
					 	Player.stamina +=1
					 	npcs[currentEnemy].stamina -=5;

					 } 

					

					Player.isturn = true;
						return 1;

			} else if(npcs[currentEnemy].stamina <= 1){
				npcs[currentEnemy].stamina += 3;
				Player.isturn = true;
				return 1;
			}

			else if(Player.health <= 0) {
				gameState = STATE_GAMELOSE;
				Player.moving = true;
				Player.engageAttack = false;
				fight_background_sound.stop();
				return 0;
			}else if(Enemy.health <= 0) {
				Player.moving = true;
				Enemy.Enemyisangry = false;
				if(Enemy.name == "BOSS"){
					boss.alive = false;
					gameState = STATE_GAMEWIN;
					fight_background_sound.stop();
					victory_sound.play();
					return 0;
				}else{
					npcs.splice(currentEnemy, 1)
					Player.engageAttack = false;
					gameState = STATE_GAME;
					Player.stamina = 5
					Player.health = 7;
					Enemy.health = 7;
					background_sound.play();
					fight_background_sound.stop();
				}
				return 0;
			}
			return 0;
}

var resLoc = "imgs/";

function setup() {
	canvas = document.getElementById("gameCanvas");
	context = canvas.getContext("2d");

	w = canvas.width;
	h = canvas.height;

	//Turn off image smoothing
	context.imageSmoothingEnabled = false;

	var bird = GenerateNPC("Bird King", ["Unt", "bird_L", "bird_R", "bird_U"], "Unt", Math.random() * 300 + 130, Math.random() * 200 + 32, 10)//THIS AS WELL
	bird.setup();
	npcs.push(bird);

	var e1 = GenerateNPC("Skelton", ["e1Img_D", "e1Img_L", "e1Img_R", "e1Img_U"], "e1Img_D", Math.random() * 300 + 130, Math.random() * 200 + 32, 10)
	e1.setup();
	npcs.push(e1);

	var e2 = GenerateNPC("Cat", ["e2Img_D", "e2Img_L", "e2Img_R", "e2Img_U"], "e2Img_D", Math.random() * 300 + 130, Math.random() * 200 + 32, 10)
	e2.setup();
	npcs.push(e2);

	var e3 = GenerateNPC("Eyepatch", ["e3Img_D", "e3Img_L", "e3Img_R", "e3Img_U"], "e3Img_D", Math.random() * 300 + 130, Math.random() * 200 + 32, 10)
	e3.setup();
	npcs.push(e3)	
	
	npcs.push(boss);

	
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
	context.translate(Math.min(camX,0), Math.min(camY, -48/*THIS*/) );    
	context.scale(scale, scale);
	DrawMap();

	for(var n = 0; n < npcs.length; n++) {
		var tempNpc = npcs[n];
		tempNpc.gameUpdate();
		tempNpc.gameDraw();
	}

	context.drawImage(bBot, 32, 7*16);//THIS
	//boss.draw();
	Player.draw();
	context.drawImage(bTop, 32, 32);//THIS
	context.restore();
}


function runGamewin()
{
 

    context.clearRect(0, 0, canvas.width, canvas.height);
	boss.alive = false;
	boss.x = 40;
	boss.y = 0;
	context.save();
		context.scale(5,5)
		boss.gameUpdate();
	context.restore();
	context.fillStyle = "White";
	context.font = "Arial 800px";
	context.fillText("WIN", w/2, 300);
	
	
}


function runGamelose()
{
    defeat_sound.play();
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "black";
    context.font = "Arial 40px";
	context.fillText("LOSE", 100, 100);

	context.fillRect(200, 200, 200, 200)

}


function runFight ()
{
	var Enemy = npcs[currentEnemy]
	if(FightInput() == 0)
		return;
	
	context.fillStyle = "#ccc";		
	context.fillRect(0, 0, canvas.width, canvas.height);
	context.drawImage(fight_background, 0, 0, canvas.width, canvas.height)
	
	context.fillStyle = "#000";
	context.font = "40px Arial";
	context.fillText(Player.health + "/" + Player.healthM , 1080, 470);
	
	context.fillStyle = "#000";
	context.font = "40px Arial";
	context.fillText("Lv"+Player.Player_level, 1130, 375);
	
	context.fillStyle = "#000";
	context.font = "40px Arial";
	context.fillText("Lv"+Player.Player_level, 480, 112);
	
		
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
	context.fillText("What will "+Player.Name + " Do?", 80, 635);

	context.fillStyle = "#52635b";
	context.fillRect (918,378.3,252,24);
	
	
	context.fillStyle = "#ffff00";
	var staminaWidth = Math.max((Player.stamina / Player.staminaM) * 248, 0);
	context.fillRect (920,382,staminaWidth,19);

	// enemy stamina background
	context.fillStyle = "#52635b";w
	context.fillRect (265.9,116,252,24);
	// enemy stamina
	context.fillStyle = "#ffff00";
	var staminaWidthE = Math.max((npcs[currentEnemy].stamina / npcs[currentEnemy].staminaM) * 248, 0);
	context.fillRect (267.9,119,staminaWidthE,19)

	context.fillStyle = "#000";
	context.font = "60px Arial";
	context.fillText("ATTACKS",860,575,  100, 20);

	context.fillStyle = "#000";
	context.font = "20 Arial";
	context.fillText("Press W for Slash", 670, 625, 150, 20);

	context.fillStyle = "#000";
	context.font = "20 Arial";
	context.fillText("Press S for Pound", 670, 680, 150, 20);

	context.fillStyle = "#000";
	context.font = "20 Arial";
	context.fillText("Press A for Stamina", 1000, 625, 150, 20);

	context.fillStyle = "#000";
	context.font = "20 Arial";
	context.fillText("Press D for Health", 1000, 680, 150, 20);



	npcs[currentEnemy].fightDraw();//THIS

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
		case STATE_GAMEWIN:
			runGamewin();
			break;
		case STATE_GAMELOSE:
			runGamelose();
			break;	

	}	

	requestAnimationFrame(draw);
}