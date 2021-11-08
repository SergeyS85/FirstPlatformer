function tick(){
	ctx.clearRect(0,0,w,h);
	// /////////////////
  
  initMethodPlayer()
  initMethodPlatform()
  detectCollisionPlayer()
  collisionUnder()
  collisionTop()
  collisionRight()
  collisionLeft()
  

  initMethodCollider()
  initWorldImage()
  
	// /////////////////
	requestAnimationFrame(tick)
}

function init(){  
  grArr()
  loadImage()
  platform.platformArr()
  platform.loadPlatformImage()
	tick() 
}
init()
