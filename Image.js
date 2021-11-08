// class WorldImage{
// 	constructor(){
// 		this.ground = new Image();
// 		// this.src = src
// 		// this.arr = []
		
// 	}
	
//   createImageGround(){
//   	// for(let i = 0;i < 10;i++){
//   	// 	this.arr.push(new Image)
//  	 //  } 	

//   }
// loadImageGround(s){
//   	// for(let i = 0;i < this.arr.length;i++){
//   	// 	this.arr[i].src = s
//   	// 	console.log(s)
//   	// }
//   	this.ground.src = s;
//   	console.log(s)
//   }
//   drawImageGround(){
//   	// this.arr.forEach(function(e,i){
//   	// 	// e.onload = function(){
//   	// 		ctx.drawImage(e, i*100,h -100,100,100)
//   	// 	// }
//   	// })
//   	// this.ground.onload = function(){
//   	  ctx.drawImage(this.ground, 100,h -100,100,100);
  	  
//     // }
//   }

  

// }
// let world = new WorldImage()
// let ground = new Image();
let arrGround = []

function loadImage(){
	arrGround.forEach(function(e){
		e.src = 'ground.png';
	})
}

function grArr(){
	for(let i = 0;i < 30;i++){
		arrGround.push(new Image)
	}
}
function initWorldImage(){
	arrGround.forEach(function(e,i){
		ctx.drawImage(e,i*70,h-70,70,70)
	})
}

