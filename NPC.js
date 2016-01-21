var npcs = [];


function GenerateNPC(name, texNames, fightPic, x, y, health){
	return{
		x:0,
		y:0,
		width: 16,
		height: 16,
		name: name,
		health: health,
		isAggro: true,
		facing: "down",
		textures: [],
		fightPic: null,
		changeSpeed: Math.round(Math.random() * 100 + 100),
		setup: function () {
			for(var t = 0; t < texNames.length; t++) {
				//Create an image
				var img = new Image();

				//Load the image
				img.src =  resLoc + texNames[t] + ".png";

				//Store the image
				this.textures.push(img);
			}
			//Create the fight image
			this.fightPic = new Image();

			//Load the fight image
			this.fightPic.src = resLoc + fightPic + ".png";
		},


		gameUpdate: function() {
			if(Player.posX < this.x + this.width &&
   			Player.posX + Player.width > this.x &&
   			Player.posY < this.y + this.height &&
   			Player.height + Player.posY > this.y) {
				console.log("Hit");
				Player.engageAttack = true;
   			}


			if(time % this.changeSpeed == 0) {
				//Move
				var rand = Math.random();
				if(rand < 0.25) {
					this.facing = "down"
					this.y += 16;
				} else if(rand < 0.5) {
					if(this.y > 0) {
						this.facing = "up"
						this.y -= 16;
					}
				} else if(rand < 0.75) {
					if(this.x > 0) {
						this.facing = "left"
						this.x -= 16;
					}
				} else if(rand < 1.0) {
						this.facing = "right"
						this.x += 16;
				}
			}
		},


		gameDraw: function() {
			var img;
			switch(this.facing) {
				case "down":
					img = this.textures[0];
					break;
				case "left":
					img = this.textures[1];
					break;
				case "right":
					img = this.textures[2];
					break;
				case "up":
					img = this.textures[3];
					break;
			}
			context.drawImage(img, this.x, this.y);
		},
		fightDraw: function () {

		},
	}
}