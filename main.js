var canvas, context;
var w, h;

var STATE_SPLASH = 0;
var STATE_GAME = 1;
var STATE_FIGHT = 2;
var STATE_GAMEWIN = 3;

var gameState = STATE_GAME;

var fight_background= new Image();
fight_background.src = "imgs/Fight.png";

var time = 0;
time = time + 1;
	if(time == 1600){
		time = 0
	}

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
background_sound.play();

var fight_background_sound = new Howl(
{
	urls: ["sounds/fight_background.wav"],
	loop: true,
	buffer: true,
	volume: 0.5
});
//fight_background_sound.play();

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
	loop: true,
	buffer: true,
	volume: 0.2
});

window.onkeydown = function(e) {
	if(!e.repeat) {
		var keyCode = e.keyCode;
		console.log(keyCode);

		var moveAmount = 16
		if(keyCode == 87) {
			//W
			Player.facing = "up";
			Player.posY -= moveAmount;
			player_move_sound.play();
		}
		if(keyCode == 65) {
			//A
			Player.facing = "left";
			Player.posX -= moveAmount;
			player_move_sound.play();
		}
		if(keyCode == 83) {
			//S
			Player.facing = "down";
			Player.posY += moveAmount;
			player_move_sound.play();
		}
		if(keyCode == 68) {
			//D
			Player.facing = "right";
			Player.posX += moveAmount;
			player_move_sound.play();
		}
	}
}
window.onkeyup = function(e) {
	player_move_sound.stop();
	}

function setup() {
	canvas = document.getElementById("gameCanvas");
	context = canvas.getContext("2d");

	w = canvas.width;
	h = canvas.height;

	//Turn off image smoothing
	context.imageSmoothingEnabled = false;

	SetupMap();
	draw();
}


	

function runGame()
{

	context.setTransform(1,0,0,1,0,0);
    context.clearRect(0, 0, canvas.width, canvas.height);
                                         
    var camX = (-Player.posX * (25/5)) + w/2.5;
    var camY = (-Player.posY * (25/5)) + h/2.5;

    context.save();
	context.translate( camX, camY );    
	context.scale(5.0, 5.0);
	DrawMap();
	bird.draw();
	e2.draw();
	e3.draw();
	e1.draw();
	Player.draw();
	context.restore();
	requestAnimationFrame(draw);
	
}

function runfight ()
{



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




}

function draw() {
	switch(gameState)
	{
		case STATE_SPLASH:
			runSplash();
			break;
		case STATE_GAME:
			runGame();
			break;
		case STATE_FIGHT:
			runfight();
			break;
	}	
}