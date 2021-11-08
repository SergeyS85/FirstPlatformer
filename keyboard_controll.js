let left  = false;
let right = false;
let jump  = false; 
let html  = document.documentElement;

function keyDown(){
	html.addEventListener('keydown', function(e){
		if(e.keyCode == 39) right = true
		if(e.keyCode == 37) left = true	
  })
} 

function keyUp(){
	html.addEventListener('keyup', function(e){
		if(e.keyCode == 39) right = false
		if(e.keyCode == 37) left = false
  })
}
function checkJump(){
	html.addEventListener('keypress', function(e){
		if(e.keyCode == 32) jump = true
  })

}

keyDown()
keyUp()
checkJump()
