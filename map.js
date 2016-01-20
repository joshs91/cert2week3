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

			mapTiles[x][y] = 0;

			if(Math.random() > .99)
			{
				mapTiles[x][y] = 1;
			}


			if(Math.random() > .99)
			{
				mapTiles[x][y] = 2;
			}

			if(Math.random() > .70)
			{
				mapTiles[x][y] = 3;
			}

			if(Math.random() > .70)
			{
				mapTiles[x][y] = 4;
			}
			var xTile = y;
			var yTile = x;
			if(xTile > 24 && xTile < 29 && yTile > 5 && yTile < 9) {
				mapTiles[x][y] = 80;
			}
		}
	}	
	mapTiles[2][1] =1;
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
			else if(tile == 60) 
			{
				fillStyle = "white";
				context.fillRect(x*16, y*16 ,16 ,16)
			}

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
