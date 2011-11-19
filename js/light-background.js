var canvas = document.getElementsByTagName('canvas')[0],
	ctx = canvas.getContext('2d'),
    blueColors = [
	'rgba(41, 183, 229, 0.95)',
	'rgba(0, 186, 241, 0.8)',
	'rgba(55, 68, 80, 0)',
	'rgba(0, 252, 255, 0.32)'
	],
	orangeColors = [
	'rgba(229, 136, 41, 0.95)',
	'rgba(241, 120, 0, 0.8)',
	'rgba(55, 68, 80, 0)',
	'rgba(241, 120, 0, 0.3)'
	];
	
function drawRect(fill, size)
{
	ctx.fillStyle = fill;
    ctx.fillRect(0, 0, size, size);
    ctx.save();
}
    
if (ctx)
{
	var canvasSize = 500; // need to match the value in navigation.html
    var canvasCenter = canvasSize / 2; 
    var circleSize = canvasSize;
    var colors = orangeColors; // pick the color set

    // clear the screen
    ctx.clearRect(0, 0, canvasSize, canvasSize);
    ctx.save();
  
    // Create first radial gradient
    var gradient = ctx.createRadialGradient(canvasCenter, canvasCenter, 0, canvasCenter, canvasCenter, circleSize); 
    gradient.addColorStop(0, colors[0]);
    gradient.addColorStop(0.27, colors[1]);
    gradient.addColorStop(0.9, colors[2]);

    // draw the first radial gradient
    drawRect(gradient, canvasSize);
  
    // Create second radial gradient
    gradient = ctx.createRadialGradient(canvasCenter, canvasCenter, 0, canvasCenter, canvasCenter, circleSize); 
    gradient.addColorStop(0.35, colors[3]);
    gradient.addColorStop(1, colors[2]);

    // draw the second radial gradient
    drawRect(gradient, canvasSize);
}