var canvas, context;
var w, h;
//W: 87
//A: 65
//S: 83
//D: 68

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

	draw();
}

function draw() {
	//context.fillRect(100, 100, 200, 200);
	context.clearRect(0, 0, w, h)

	context.save();
		context.scale(5.0, 5.0);
		DrawMap();
		Player.draw();
	context.restore();

	requestAnimationFrame(draw);
}