var e1Img_U = new Image();
e1Img_U.src = "imgs/e1Img_U.png"
	//Up

var e1Img_D = new Image();
e1Img_D.src = "imgs/e1Img_D.png"
	//Down

var e1Img_L = new Image();
e1Img_L.src = "imgs/e1Img_L.png"
	//Left

var e1Img_R = new Image();
e1Img_R.src = "imgs/e1Img_R.png"
	//Right



var time = 0;

var e1 = {
	x: 500,
	y: 340,
	width: 28,
	height: 32,
	facing: "down",
	
	draw: function(){
		time = time + 1;
		if(time == 1600){
			time = 0
		}

		if(time == 100){
			this.facing = "up"
		}
		if(time == 300 ){
			this.facing = "down"
		}
		if(time == 500 ){
			this.facing = "left"
		}
		if(time == 700 ){
			this.facing = "right"
		}
		if(time == 1500){
			this.facing = "up"
		}
		if(time == 1300){
			this.facing = "down"
		}
		if(time == 1100){
			this.facing = "left"
		}
		if(time == 900){
			this.facing = "right"
		}
			
		if(time == 700){
			this.x += 28
		}
		if(time == 750){
			this.x += 28
		}
		if(time == 500){
			this.x -= 28
		}
		if(time == 550){
			this.x -= 28
		}		
		if(time == 300){
			this.y += 32
		}
		if(time == 350){
			this.y += 32
		}		
		if(time == 150){
			this.y -= 32
		}
		if(time == 100){
			this.y -= 32
		}
		
		if(time == 900){
			this.x += 28
		}
		if(time == 950){
			this.x += 28
		}
		if(time == 1100){
			this.x -= 28
		}
		if(time == 1150){
			this.x -= 28
		}		
		if(time == 1300){
			this.y += 32
		}
		if(time == 1350){
			this.y += 32
		}		
		if(time == 1550){
			this.y -= 32
		}
		if(time == 1500){
			this.y -= 32
		}


		if(this.facing =="up"){
			context.drawImage(e1Img_U, this.x, this.y);
		}
		if(this.facing =="down"){
			context.drawImage(e1Img_D, this.x, this.y);
		}
		if(this.facing =="left"){
			context.drawImage(e1Img_L, this.x, this.y);
		}
		if(this.facing =="right"){
			context.drawImage(e1Img_R, this.x, this.y);
		}
	}

}