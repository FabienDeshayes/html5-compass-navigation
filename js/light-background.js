var canvas = document.getElementsByTagName('canvas')[0],
    ctx = null,
    grad = null,
    body = document.getElementsByTagName('body')[0];
    
if (canvas.getContext('2d')) {
	var canvasSize = 500;
    var centerWidth = canvasSize/2; 
    var centerHeight = canvasSize/2;
    var circleSize = canvasSize/3;
    var glowColor = "#00bfff";
    var bgColor = 'rgba(29, 110, 125, 0.5)';
        
  ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvasSize, canvasSize);
  ctx.save();
  
  // Create radial gradient
  grad = ctx.createRadialGradient(centerWidth, centerHeight, 0, centerWidth, centerHeight, circleSize); 
  grad.addColorStop(0, glowColor);
  grad.addColorStop(1, bgColor);

  // assign gradients to fill
  ctx.fillStyle = grad;

  // draw the fill fill
  ctx.fillRect(0, 0, canvasSize, canvasSize);
  ctx.save();
  
  /*body.onmousemove = function (event) {
    var width = window.innerWidth, 
        height = window.innerHeight, 
        x = event.clientX, 
        y = event.clientY,
        rx = 600 * x / width,
        ry = 600 * y / height;
        
    var xc = ~~(256 * x / width);
    var yc = ~~(256 * y / height);

    grad = ctx.createRadialGradient(rx, ry, 0, rx, ry, 600); 
    grad.addColorStop(0, '#000');
    grad.addColorStop(1, ['rgb(', xc, ', ', (255 - xc), ', ', yc, ')'].join(''));
    // ctx.restore();
    ctx.fillStyle = grad;
    ctx.fillRect(0,0,600,600);
    // ctx.save();
  };*/
}