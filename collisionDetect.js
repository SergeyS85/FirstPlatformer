let leftBodyPlayer   = false;
let rightBodyPlayer  = false;
let headBodyPlayer   = false; 
let detObj = {
	grPlatform:{
		y: h - 70
	},
	wallPlatform:{
		y: platform.platformY
	}
}

function detectCollisionPlayer(){
		if((player.playerY + player.playerH >= detObj.grPlatform.y)){
			 player.jumpLength = 35
			 jump = false;	
			 player.gravity = 0	
			 player.onground = true	
			 player.playerY  = detObj.grPlatform.y - player.playerH 	 		 
		}
		// else{
		// 	player.onground = false;
			 
		// }
}
function collisionRight(){
	
	if(player.playerX + player.playerW > platform.platformX && player.playerX < platform.platformX && player.playerY + player.playerH > platform.platformY && player.playerY < platform.platformY + platform.platformH){
	  rightBodyPlayer  = true;
  }
  else{
	  rightBodyPlayer  = false;
  }
		
}

function collisionLeft(){
	if(player.playerX < platform.platformX + platform.platformW && player.playerX + player.playerW > platform.platformX + platform.platformW && player.playerY + player.playerH > platform.platformY && player.playerY < platform.platformY + platform.platformH){
			  leftBodyPlayer   = true;
  }
  else{
  	leftBodyPlayer   = false;
  }
}

function collisionTop(){
	if(player.playerX + player.playerW > platform.platformX && player.playerX < platform.platformX + platform.platformW && player.playerY + player.playerH >= platform.platformY &&  player.playerY < platform.platformY ){
			 player.jumpLength = 35
			 jump = false	
			 player.onground = true;		 
		}
		else{
			player.onground = false
		}
		
}
function collisionUnder(){
	if(player.playerX + player.playerW > platform.platformX && player.playerX < platform.platformX + platform.platformW && player.playerY + player.playerH > platform.platformY + platform.platformH &&  player.playerY < platform.platformY + platform.platformH ){ 
		   player.headBodyPlayer = true
			 player.jumpLength = 35
			 jump = false	
			 player.onground = true;		 
		}
		else{
			player.headBodyPlayer = false
		}
		
}
