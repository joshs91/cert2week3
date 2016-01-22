var grass1 = new Image();
grass1.src = "imgs/grass1.png";

var grass2 = new Image();
grass2.src = "imgs/grass2.png";

var grass3 = new Image();
grass3.src = "imgs/grass3.png";

var flower1 = new Image();
flower1.src = "imgs/flower1.png";

var flower2 = new Image();
flower2.src = "imgs/flower2.png";

var weed = new Image();
weed.src = "imgs/weed.png";

var rock1 = new Image();
rock1.src = "imgs/rock1.png";

var Menu = new Image();
Menu.src = "imgs/Menu.png";

var Nuke = new Image();
Nuke.src = "imgs/Nuke.png";

var Start = new Image();
Start.src = "imgs/Press start.png";

var tree = new Image();
tree.src = "imgs/tree.png"
/*
var mapTiles = 
[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[60,0,0,1,0,0,0,0,60,0,0,1,0,0,0,0],
[60,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
[60,0,0,0,0,0,0,0,0,60,0,0,0,0,0,0],
[60,0,0,0,0,60,0,0,0,0,0,0,1,0,0,0],
[60,0,0,0,0,0,0,0,0,0,60,0,0,0,0,0],
[60,0,0,0,0,0,0,0,0,0,0,0,0,60,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0],
[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,2,0,0,0,0,1,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
*/

var mapTiles;
var mapWidth = 100;
var mapHeight = 100;

function SetupMap()
{
	mapTiles = new Array (mapHeight);

	for(var x = 0; x < mapTiles.length; x++) 
	{

		mapTiles[x] = new Array (mapWidth);

		for(var y = 0; y < mapTiles[0].length; y++)
		{	
			if(x > 1 && x < mapWidth-1 && y > 1 && y < mapHeight - 1) { 
				mapTiles[x][y] = 0;

			if(Math.random() > .99)
			{
				mapTiles[x][y] = 1;
			}


			if(Math.random() > .986)
			{
				mapTiles[x][y] = 2;
			}

			

			if(Math.random() > .80)
			{
				mapTiles[x][y] = 3;
			}

			if(Math.random() > .70)
			{
				mapTiles[x][y] = 4;
			}
			if(Math.random() > .98)
			{
				mapTiles[x][y] = 60;
			}
				var xTile = y;
				var yTile = x;
				if(xTile > 1 && xTile < 7 && yTile > 7 && yTile < 10)/*HERE*/ {
					mapTiles[x][y] = 80;
				}
			}
		}
	}	
	//mapTiles[2][1] =1;
	for(var tx = 0; tx < mapWidth; tx++) {
		if(tx % 2 == 0){
			mapTiles[0][tx] = 81;
			mapTiles[mapHeight-1][tx] = 81;
		}
	}//ALL OF THIS

	for(var ty = 0; ty < mapHeight; ty++) {
		mapTiles[ty][0] = 81;
		mapTiles[ty][mapWidth-1] = 81;
	}
	for(var y = 5; y < 10; y++)
		{
			for(var x = 10; x < 20; x++)
			{
				mapTiles[y][x] = 5;

		}

	}
}

function DrawMap () {
	for(var x = 0; x < mapTiles[0].length; x++){
		for(var y = 0; y < mapTiles.length; y++){
			var tile = mapTiles[y][x];
			if (tile ==0) 
			{
				context.drawImage(grass1 ,x * 16, y * 16);
			}
			else if(tile == 1)
			{
				context.drawImage(flower1 ,x * 16, y * 16);
			}
			else if(tile == 2)
			{
				context.drawImage(flower2 ,x * 16, y * 16);
			}
			else if(tile == 5)
			{
				context.drawImage(weed ,x * 16, y * 16);
			}
			else if(tile == 60) 
			{
				context.drawImage(grass1 ,x * 16, y * 16);
				context.drawImage(rock1 ,x * 16, y * 16);
			}

			else if(tile == 81){
				
				context.drawImage(tree, (x*16), (y*16)-8, 32, 40)
			}//DONT FORGET THIS

			else if(tile == 4) 
			{
				
				context.drawImage(grass3 ,x * 16, y * 16);
			}	

			else if(tile == 3)
				{
					context.drawImage(grass2 ,x * 16, y * 16);
				}
			
			else if(tile == 80)
				{
				context.drawImage(grass2 ,x * 16, y * 16);
				}
			}

		}
	}	
