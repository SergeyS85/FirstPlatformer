class Collider{
	constructor(){ 

	}
	collisionPlyer(){ 
		if(player.playerX >= w - player.playerW) player.playerX = w - player.playerW
		if(player.playerX <= 0) player.playerX = 0
	}
	stopPlayerBlock(){
		if(leftBodyPlayer) {
			player.playerX = platform.platformX + platform.platformW
		}
		if(rightBodyPlayer){
			player.playerX = platform.platformX - player.playerW
		}
		if(player.headBodyPlayer){
			player.playerY = platform.platformY + platform.platformH
		}
		if(player.onground){
			jump = false;
			player.playerY = platform.platformY - player.playerH
			player.playerY += player.gravity = 0
		}

		if(player.onground == false){
			player.playerY += player.gravity++ 
		}	
		console.log(player.onground)
  }

}
let collider = new Collider()

function initMethodCollider(){
	collider.stopPlayerBlock()
	collider.collisionPlyer()
	
}
