var canvas = document.getElementsByTagName('canvas')[0],
    ctx = null,
    grad = null;
    
if (canvas.getContext('2d')) {
	var canvasSize = 500; // need to match the value in navigation.html
    var centerWidth = canvasSize / 2; 
    var centerHeight = canvasSize / 2;
    var circleSize = canvasSize;
    var firstColor = 'rgba(41, 183, 229, 0.95)';
    var secondColor = 'rgba(0, 186, 241, 0.8)';
    var thirdColor = 'rgba(55, 68, 80, 0)';
    var fourthColor = 'rgba(0, 252, 255, 0.32)';
    var fifthColor = 'rgba(0, 186, 241, 0.3)';
        
  ctx = canvas.getContext('2d');
  // clear the screen
  ctx.clearRect(0, 0, canvasSize, canvasSize);
  ctx.save();
  
  // Create first radial gradient
  grad = ctx.createRadialGradient(centerWidth, centerHeight, 0, centerWidth, centerHeight, circleSize); 
  grad.addColorStop(0, firstColor);
  grad.addColorStop(0.27, secondColor);
  grad.addColorStop(0.9, thirdColor);

  // draw the first radial gradient
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvasSize, canvasSize);
  ctx.save();
  
  // Create second radial gradient
  grad = ctx.createRadialGradient(centerWidth, centerHeight, 0, centerWidth, centerHeight, circleSize); 
  grad.addColorStop(0.35, fourthColor);
  grad.addColorStop(1, thirdColor);

  // draw the second radial gradient
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvasSize, canvasSize);
  ctx.save();
}