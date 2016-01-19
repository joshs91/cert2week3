var e2Img_U = new Image();
e2Img_U.src = "imgs/e2Img_U.png"
	//Up

var e2Img_D = new Image();
e2Img_D.src = "imgs/e2Img_D.png"
	//Down


var e2 = {
	x: 40,
	y: 150,
	width: 16,
	height: 32,
	facing: "down",
	
	draw: function(){

		if(time % 800 == 200){
			this.facing = "up"
		}
		if(time % 800 == 500){
			this.facing = "down"
		}
		if (this.y <= -16){
			this.y = 470
		}
		if (this.y >= 485){
			this.y = -16
		}

		if(time % 115 == 0){
			this.y -= 32
			this.facing = "up"
		}
		if(time % 75 == 0){
			this.y -= 32
			this.facing = "up"
		}
		if(time % 250 == 0){
			this.y += 32
			this.facing = "down"
		}
		if(time % 300 == 0){
			this.y += 32
			this.facing = "down"
		}
		if(this.facing =="up"){
			context.drawImage(e2Img_U, this.x, this.y);
		}
		if(this.facing =="down"){
			context.drawImage(e2Img_D, this.x, this.y);
		}

	}

}

//add a time var