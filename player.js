//left sprite
var pImg_L = new Image();
pImg_L.src = "imgs/left.png";

//right sprite
var pImg_R = new Image();
pImg_R.src = "imgs/right.png";

//up sprite
var pImg_U = new Image();
pImg_U.src = "imgs/up.png";

//down sprite
var pImg_D = new Image();
pImg_D.src = "imgs/down.png";

var Player = {
	posX: 115,
	posY: 45,
	health: 7,
	healthM: 7,
	Player_Name:"",
	Player_level: 1,
	moving: false,
	facing: "down",		//"down", "left", "right", "up"
	draw: function() {

		if (this.facing == "up") {
			//W
			context.drawImage(pImg_U, this.posX, this.posY);
		}
		if (this.facing == "left") {
			//A
			context.drawImage(pImg_L, this.posX, this.posY);
		}
		if (this.facing == "down") {
			//S
			context.drawImage(pImg_D, this.posX, this.posY);
		}
		if (this.facing == "right") {
			//D
			context.drawImage(pImg_R, this.posX, this.posY);
		}
	}
}

var Moves = 
{
slash: 2,
pound: 4,
}