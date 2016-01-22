var bossDeathFrames = [];

var bD1 = new Image();
bD1.src = "imgs/bD1.png"
bossDeathFrames.push(bD1);
	
var bD2 = new Image();
bD2.src = "imgs/bD2.png"
bossDeathFrames.push(bD2);
	
var bD3 = new Image();
bD3.src = "imgs/bD3.png"
bossDeathFrames.push(bD3);
	
var bD4 = new Image();
bD4.src = "imgs/bD4.png"
bossDeathFrames.push(bD4);
	
var bD5 = new Image();
bD5.src = "imgs/bD5.png"
bossDeathFrames.push(bD5);
	
var bD6 = new Image();
bD6.src = "imgs/bD6.png"
bossDeathFrames.push(bD6);
	
var bD7 = new Image();
bD7.src = "imgs/bD7.png"
bossDeathFrames.push(bD7);
	
var bD8 = new Image();
bD8.src = "imgs/bD8.png"
bossDeathFrames.push(bD8);
	
var bD9 = new Image();
bD9.src = "imgs/bD9.png"
bossDeathFrames.push(bD9);
	
var bD10 = new Image();
bD10.src = "imgs/bD10.png"
bossDeathFrames.push(bD10);
	
var bD11 = new Image();
bD11.src = "imgs/bD11.png"
bossDeathFrames.push(bD11);
	
var bD12 = new Image();
bD12.src = "imgs/bD12.png"
bossDeathFrames.push(bD12);
	
var deathTime = 0;

var bossFrames = [];

var mIdle1 = new Image();
mIdle1.src = "imgs/mIdle1.png"
bossFrames.push(mIdle1);

var mIdle2 = new Image();
mIdle2.src = "imgs/mIdle2.png"
bossFrames.push(mIdle2);

var mIdle3 = new Image();
mIdle3.src = "imgs/mIdle3.png"
bossFrames.push(mIdle3);

var mIdle4 = new Image();
mIdle4.src = "imgs/mIdle4.png"
bossFrames.push(mIdle4);

var mIdle5 = new Image();
mIdle5.src = "imgs/mIdle5.png"
bossFrames.push(mIdle5);

var boss = {
	x: 480,
	y: 150,
	width: 60,
	height: 85,
	health: 10,
	healthM: 10,
	name: "BOSS",
	alive: true,
	stamina:5,
	staminaM:5,
	gameDraw: function() {

	},

	gameUpdate: function(){
		var animTime = Math.floor(Math.abs(Math.sin((time/25))*5));
		
		var img = bossFrames[animTime];
		//console.log(deathAnimTime);
		

				if (this.x < Player.posX + Player.width &&
   			this.x + this.width > Player.posX &&
   			this.y < Player.posY + Player.height &&
   			this.height + this.y > Player.posY){
			gameState = STATE_FIGHT
			fight_background_sound.play();
			for(var i = 0; i < npcs.length; i++) {
				if(npcs[i].name == this.name)
					currentEnemy = i;
			}
		}

		if(this.alive == true){
		context.drawImage(img, this.x, this.y);
		deathTime = 0
		}
		if(this.alive == false){
			
			deathTime += 1;
			var deathAnimTime = Math.floor((deathTime/10)%12);

			var deathImg = bossDeathFrames[deathAnimTime];
			context.drawImage(deathImg, this.x, this.y)	
		}
	},
	fightDraw: function () {
			context.save();
				context.translate(980, -20);
				context.scale(4, 4);
				context.drawImage(bossFrames[0], 0 ,0);
			context.restore();
		},

}