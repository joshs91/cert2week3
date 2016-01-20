var e3Img_U = new Image();
e3Img_U.src = "imgs/e3Img_U.png"
	//Up

var e3Img_D = new Image();
e3Img_D.src = "imgs/e3Img_D.png"
	//Down

var e3Img_L = new Image();
e3Img_L.src = "imgs/e3Img_L.png"
	//Left

var e3Img_R = new Image();
e3Img_R.src = "imgs/e3Img_R.png"
	//Right


var e3 = {
	x: 320,
	y: 300,
	width: 27,
	height: 31,
	facing: "down",
	
	draw: function(){
		if(time % 100 == 0 && time <= 400){
			this.facing = "right",
			this.x += 27
		}
		if(time == 500){
			this.facing = "up",
			this.y -= 31
		}
		if(time == 600){
			this.facing = "up",
			this.y -= 31
		}		
		if(time == 700){
			this.facing = "up",
			this.y -= 31
		}		
		if(time == 800){
			this.facing = "up",
			this.y -= 31
		}
		if(time % 100 == 0 && time >= 800 && time <= 1200){
			this.facing = "left",
			this.x -= 27
			this.y = 207
		}
		if(time % 100 == 0 && time >= 1250 && time <= 1600){
			this.facing = "down",
			this.y += 31

		}





		if(this.facing =="up"){
			context.drawImage(e3Img_U, this.x, this.y);
		}
		if(this.facing =="down"){
			context.drawImage(e3Img_D, this.x, this.y);
		}
		if(this.facing =="left"){
			context.drawImage(e3Img_L, this.x, this.y);
		}
		if(this.facing =="right"){
			context.drawImage(e3Img_R, this.x, this.y);
		}
	}
}

var e5 = {
	x: 200,
	y: 700,
	width: 27,
	height: 31,
	facing: "down",
	
	draw: function(){
		if(time % 100 == 0 && time <= 400){
			this.facing = "right",
			this.x += 27
		}
		if(time == 500){
			this.facing = "up",
			this.y -= 31
		}
		if(time == 600){
			this.facing = "up",
			this.y -= 31
		}		
		if(time == 700){
			this.facing = "up",
			this.y -= 31
		}		
		if(time == 800){
			this.facing = "up",
			this.y -= 31
		}
		if(time % 100 == 0 && time >= 800 && time <= 1200){
			this.facing = "left",
			this.x -= 27
			
		}
		if(time % 100 == 0 && time >= 1250 && time <= 1600){
			this.facing = "down",
			this.y += 31

		}





		if(this.facing =="up"){
			context.drawImage(e3Img_U, this.x, this.y);
		}
		if(this.facing =="down"){
			context.drawImage(e3Img_D, this.x, this.y);
		}
		if(this.facing =="left"){
			context.drawImage(e3Img_L, this.x, this.y);
		}
		if(this.facing =="right"){
			context.drawImage(e3Img_R, this.x, this.y);
		}
	}
}

var e6 = {
	x: 900,
	y: 900,
	width: 27,
	height: 31,
	facing: "down",
	
	draw: function(){
		if(time % 100 == 0 && time <= 400){
			this.facing = "right",
			this.x += 27
		}
		if(time == 500){
			this.facing = "up",
			this.y -= 31
		}
		if(time == 600){
			this.facing = "up",
			this.y -= 31
		}		
		if(time == 700){
			this.facing = "up",
			this.y -= 31
		}		
		if(time == 800){
			this.facing = "up",
			this.y -= 31
		}
		if(time % 100 == 0 && time >= 800 && time <= 1200){
			this.facing = "left",
			this.x -= 27
			
		}
		if(time % 100 == 0 && time >= 1250 && time <= 1600){
			this.facing = "down",
			this.y += 31

		}





		if(this.facing =="up"){
			context.drawImage(e3Img_U, this.x, this.y);
		}
		if(this.facing =="down"){
			context.drawImage(e3Img_D, this.x, this.y);
		}
		if(this.facing =="left"){
			context.drawImage(e3Img_L, this.x, this.y);
		}
		if(this.facing =="right"){
			context.drawImage(e3Img_R, this.x, this.y);
		}
	}
}	