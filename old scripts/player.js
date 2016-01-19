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
	posX: 0,
	posY: 0,
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






function collides(sprite1, sprite2) {
    return a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y;
} 

//example
if (collides(player, cocoaPuff)) {
    player.cuckoo = true;
}






if (object1.x < object2.x + object2.width  && object1.x + object1.width  > object2.x &&
		object1.y < object2.y + object2.height && object1.y + object1.height > object2.y) {
// The objects are touching
}