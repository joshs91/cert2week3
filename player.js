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

var pFight = new Image();
pFight.src = "imgs/pFight.png";

var timer = 0;

var Player = {
	posX: 115,
	posY: 45,
	height: 16,
	width: 16,
	health: 7,
	healthM: 7,
	Name:"Stozza",
	Player_level: 1,
	moving: true,
	facing: "down",		//"down", "left", "right", "up"
	isturn: true,
	engageAttack: false,
	draw: function() {
		if(this.engageAttack == true)
		{

		//from here
		context.save();	
		context.drawImage(pFight, this.posX+5, this.posY-18);
		context.restore();	
		this.moving = false;
    		timer += 1;//add all this

    		if(timer == 20) {
    			gameState = STATE_FIGHT
    			fight_background_sound.play();
    			return;
    		}
    	} else if (this.facing == "up") {
			//W
			context.drawImage(pImg_U, this.posX, this.posY);
		}
		else if(this.facing == "left") {
			//A
			context.drawImage(pImg_L, this.posX, this.posY);
		}
		else if (this.facing == "down") {
			//S
			context.drawImage(pImg_D, this.posX, this.posY);
		}
		else if (this.facing == "right") {
			//D
			context.drawImage(pImg_R, this.posX, this.posY);
		} 

	}
}

var Move = 
{
	slash: Math.round(randomRange(1,2)),
	pound: Math.round(randomRange(1,2)),
}

var EnemyMove = 
{
slash: Math.round(randomRange(1,2)),
pound: Math.round(randomRange(1,2)),
}

function randomRange (min, max)
{
	return Math.random() * (max - min) + min;

}
