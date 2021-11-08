class Platform{ 
	constructor(){
		this.platformW = 250
		this.platformH = 50
		this.platformX = 800 
		this.platformY = h -300
		this.platformArray = []
	}
  loadPlatformImage(){
		this.platformArray.forEach(function(e){
			e.src = 'img/rockwoll.png';
		})
  }

  platformArr(){
		for(let i = 0;i < 5;i++){
			this.platformArray.push(new Image)
		}
  }
	initPlatformImage(){
		let x = this.platformX
		let y = this.platformY
		this.platformArray.forEach(function(e,i){
			ctx.drawImage(e,i*50 + x,y,50,50)
		})
  }
}

let platform = new Platform()

function initMethodPlatform(){
	platform.initPlatformImage()
}
