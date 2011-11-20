// on startup, draw the compass in the area defined by the second canvas of the document
// all positions are relative to the size of the canvas ; the compass will take
// the full space available to be drawn in it.

var canvas = document.getElementsByTagName('canvas')[1];
var context = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;

const COMPASS_CENTER_RADIUS = canvas.width / 18;
const PADDING = COMPASS_CENTER_RADIUS / 4;
const ARROWS_PADDING = COMPASS_CENTER_RADIUS + PADDING;

drawLeftArrow();
drawRightArrow();
drawTopArrow();
drawBottomArrow();
drawCenter();

function drawLeftArrow()
{
	prepareContextStyles();
	startDraw();
	
	context.moveTo(0, height / 2);
	context.lineTo(width / 2 - ARROWS_PADDING, height / 2 - COMPASS_CENTER_RADIUS);
	context.lineTo(width / 2 - ARROWS_PADDING, height / 2 + COMPASS_CENTER_RADIUS);
	context.lineTo(0, height / 2);
	
	endDraw();	
}

function drawRightArrow()
{
	prepareContextStyles();
	startDraw();
	
	context.moveTo(width, height / 2);
	context.lineTo(width / 2 + ARROWS_PADDING, height / 2 - COMPASS_CENTER_RADIUS);
	context.lineTo(width / 2 + ARROWS_PADDING, height / 2 + COMPASS_CENTER_RADIUS);
	context.lineTo(width, height / 2);
	
	endDraw();	
}

function drawTopArrow()
{
	prepareContextStyles();
	startDraw();
	
	context.moveTo(width / 2, 0);
	context.lineTo(width / 2 + COMPASS_CENTER_RADIUS, height / 2 - ARROWS_PADDING);
	context.lineTo(width / 2 - COMPASS_CENTER_RADIUS, height / 2 - ARROWS_PADDING);
	context.lineTo(width / 2, 0);
	
	endDraw();	
}

function drawBottomArrow()
{
	prepareContextStyles();
	startDraw();
	
	context.moveTo(width / 2, height);
	context.lineTo(width / 2 + COMPASS_CENTER_RADIUS, height / 2 + ARROWS_PADDING);
	context.lineTo(width / 2 - COMPASS_CENTER_RADIUS, height / 2 + ARROWS_PADDING);
	context.lineTo(width / 2, height);
	
	endDraw();	
}

function drawCenter()
{
	prepareContextStyles();
	startDraw();
	
	context.arc(width / 2, height / 2, COMPASS_CENTER_RADIUS, 0, 2 * Math.PI, false);
	
	endDraw();	
}

// set the style elements of the compass
function prepareContextStyles()
{
	context.fillStyle = '#ffffff';
	context.strokeStyle = '#000000';
	context.lineWidth = 1;
}

function startDraw()
{
	context.beginPath();
}

function endDraw()
{
	context.fill();
	context.stroke();
	context.closePath();
}