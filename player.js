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
	Name:"8====D~~~",
	Player_level: 1,
	moving: true,
	facing: "down",		//"down", "left", "right", "up"
	isturn: true,
	draw: function() {


		if ((this.posX < e1.x + e1.width &&
   			this.posX + this.width > e1.x &&
   			this.posY < e1.y + e1.height &&
   			this.height + this.posY > e1.y) ||

   			(this.posX < e2.x + e2.width &&
   			this.posX + this.width > e2.x &&
   			this.posY < e2.y + e2.height &&
   			this.height + this.posY > e2.y) ||

		   (this.posX < e3.x + e3.width &&
   			this.posX + this.width > e3.x &&
   			this.posY < e3.y + e3.height &&
   			this.height + this.posY > e3.y) ||

		   (this.posX < bird.x + bird.width &&
   			this.posX + this.width > bird.x &&
   			this.posY < bird.y + bird.height &&
   			this.height + this.posY > bird.y) ||

   			(this.posX < e4.x + e4.width &&
   			this.posX + this.width > e4.x &&
   			this.posY < e4.y + e4.height &&
   			this.height + this.posY > e4.y) ||

   			(this.posX < e5.x + e5.width &&
   			this.posX + this.width > e5.x &&
   			this.posY < e5.y + e5.height &&
   			this.height + this.posY > e5.y) ||

   			(this.posX < e6.x + e6.width &&
   			this.posX + this.width > e6.x &&
   			this.posY < e6.y + e6.height &&
   			this.height + this.posY > e6.y) ||

   			(this.posX < e7.x + e7.width &&
   			this.posX + this.width > e7.x &&
   			this.posY < e7.y + e7.height &&
   			this.height + this.posY > e7.y) ||

   			(this.posX < e8.x + e8.width &&
   			this.posX + this.width > e8.x &&
   			this.posY < e8.y + e8.height &&
   			this.height + this.posY > e8.y) ||

   			(this.posX < bird2.x + bird2.width &&
   			this.posX + this.width > bird2.x &&
   			this.posY < bird2.y + bird2.height &&
   			this.height + this.posY > bird2.y) ||

   			(this.posX < bird3.x + bird3.width &&
   			this.posX + this.width > bird3.x &&
   			this.posY < bird3.y + bird3.height &&
   			this.height + this.posY > bird3.y) ||

   			(this.posX < bird4.x + bird4.width &&
   			this.posX + this.width > bird4.x &&
   			this.posY < bird4.y + bird4.height &&
   			this.height + this.posY > bird4.y) ||

   			(this.posX < bird5.x + bird5.width &&
   			this.posX + this.width > bird5.x &&
   			this.posY < bird5.y + bird5.height &&
   			this.height + this.posY > bird5.y) ||

   			(this.posX < bird6.x + bird6.width &&
   			this.posX + this.width > bird6.x &&
   			this.posY < bird6.y + bird6.height &&
   			this.height + this.posY > bird6.y))

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
slash: Math.round(randomRange(1,5)),
pound: Math.round(randomRange(1,2)),
}


function randomRange (min, max)
{
return Math.random() * (max - min) + min;

}
