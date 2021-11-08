class Player{
	constructor(){
		this.moveSpeed  = 9;
		this.jumpLength = 35; 
		this.gravity    = 5
		this.playerW    = 50;
		this.playerH    = 60; 
		this.playerX    = 300;
		this.playerY    = h - this.playerH - 70; 
		this.onground   = true
		this.color      = '#46A4D4'  
	}
  
	drawPlayer(){
		ctx.fillStyle = this.color;
		ctx.fillRect(this.playerX,this.playerY,this.playerW,this.playerH);
	}
	
	jumpPlayer(){
  	if(jump){
  		this.playerY -= this.jumpLength--
  	}
  }
	movePlayer(){
		if(right) {
			this.playerX += this.moveSpeed;
		}
		if(left) {
			this.playerX -= this.moveSpeed
		};
	}
}
let player = new Player();

function initMethodPlayer(){ 
	player.drawPlayer();	
  player.jumpPlayer()
  player.movePlayer();
  
}
