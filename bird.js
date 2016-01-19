var bird_D = new Image();
bird_D.src = "imgs/Unt.png"
	//Down

var bird_U = new Image();
bird_U.src = "imgs/bird_U.png"
	//Up

var bird_L = new Image();
bird_L.src = "imgs/bird_L.png"
	//Left

var bird_R = new Image();
bird_R.src = "imgs/bird_R.png"
	//Right



var bird = {

	x: 300,
	y: 100,
	width: 14,
	height: 16,
	facing: "down",



	draw: function(){
		if(time == 100){
			this.facing = "left",
			this.x -= 14
		}
		if(time == 150){
			this.facing = "left",
			this.x -= 14
		}		
		
		if(time == 175){
			this.facing = "down"
		}
		if(time == 300){
			this.facing = "right",
			this.x += 14
		}
		if(time == 350){
			this.facing = "right",
			this.x += 14
		}		
		
		if(time == 375){
			this.facing = "down"
		}
		if(time == 450){
			this.facing = "right",
			this.x += 14
		}
		if(time == 500){
			this.facing = "right",
			this.x += 14
		}
		if(time == 550){
			this.facing = "right",
			this.x += 14
		}
		if(time == 600){
			this.facing = "up",
			this.y += 5
		}
		if(time == 800){
			this.facing = "left",
			this.x -= 14
			this.y -= 5
		}	
		if(time == 850){
			this.facing = "left",
			this.x -= 14
		}
		if(time == 900){
			this.facing = "left",
			this.x -= 14
		}
		if(time == 1050){
			this.facing = "down"
		}
	


		if(this.facing =="down"){
			context.drawImage(bird_D, this.x, this.y);
		}
		if(this.facing =="left"){
			context.drawImage(bird_L, this.x, this.y);
		}
		if(this.facing =="right"){
			context.drawImage(bird_R, this.x, this.y);
		}
		if(this.facing =="up"){
			context.drawImage(bird_U, this.x, this.y);
		}
	}
}