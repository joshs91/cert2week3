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

window.onkeydown = function(e) {
	if(!e.repeat) {
		var keyCode = e.keyCode;
		console.log(keyCode);

		var moveAmount = 16
		if(keyCode == 87) {
			//W
			Player.facing = "up";
			Player.posY -= moveAmount;
		}
		if(keyCode == 65) {
			//A
			Player.facing = "left";
			Player.posX -= moveAmount;
		}
		if(keyCode == 83) {
			//S
			Player.facing = "down";
			Player.posY += moveAmount;
		}
		if(keyCode == 68) {
			//D
			Player.facing = "right";
			Player.posX += moveAmount;
		}
	}
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