var docWidth = document.width;
var docHeight = document.height;
var width = 600;
var height = 400;

var stage = new Kinetic.Stage("compass", width, height);

const COMPASS_CENTER_RADIUS = width / 18;
const PADDING = COMPASS_CENTER_RADIUS / 4;
const ARROWS_PADDING = COMPASS_CENTER_RADIUS + PADDING;

var leftArrow = new Kinetic.Shape(function(state){
	var context = this.getContext();
	
	prepareContextStyles(context);
	
	if (state == "over")
	{
		context.fillStyle = '#cccccc';
	}
	else if (state == "out")
	{
		context.fillStyle = '#ffffff';	
	}
	else if (state == "up")
	{
		context.fillStyle = '#cccccc';	
	}
	else if (state == "down")
	{
		context.fillStyle = '#aaaaaa';	
	}
	startDraw(context);
	
	context.moveTo(0, height / 2);
	context.lineTo(width / 2 - ARROWS_PADDING, height / 2 - COMPASS_CENTER_RADIUS);
	context.lineTo(width / 2 - ARROWS_PADDING, height / 2 + COMPASS_CENTER_RADIUS);
	context.lineTo(0, height / 2);
	
	endDraw(context);});
leftArrow.addEventListener(
	"mouseover",
	function(){
        leftArrow.draw("over");
    });
leftArrow.addEventListener(
	"mouseout",
	function(){
        leftArrow.draw("out");
    });
leftArrow.addEventListener(
	"mousedown",
	function(){
        leftArrow.draw("down");
    });
leftArrow.addEventListener(
	"mouseup",
	function(){
        leftArrow.draw("up");
    });
 
/*var rightArrow = new Kinetic.Shape(drawRightArrow);
var bottomArrow = new Kinetic.Shape(drawTopArrow);
var upArrow = new Kinetic.Shape(drawBottomArrow);
var compassCenter = new Kinetic.Shape(drawCenter);*/

stage.add(leftArrow);
/*stage.add(rightArrow);
stage.add(bottomArrow);
stage.add(upArrow);
stage.add(compassCenter);*/

function drawRightArrow()
{
	var context = this.getContext();
	
	prepareContextStyles(context);
	startDraw(context);
	
	context.moveTo(width, height / 2);
	context.lineTo(width / 2 + ARROWS_PADDING, height / 2 - COMPASS_CENTER_RADIUS);
	context.lineTo(width / 2 + ARROWS_PADDING, height / 2 + COMPASS_CENTER_RADIUS);
	context.lineTo(width, height / 2);
	
	endDraw(context);
}

function drawTopArrow()
{
	var context = this.getContext();
	
	prepareContextStyles(context);
	startDraw(context);
	
	context.moveTo(width / 2, 0);
	context.lineTo(width / 2 + COMPASS_CENTER_RADIUS, height / 2 - ARROWS_PADDING);
	context.lineTo(width / 2 - COMPASS_CENTER_RADIUS, height / 2 - ARROWS_PADDING);
	context.lineTo(width / 2, 0);
	
	endDraw(context);
}

function drawBottomArrow()
{
	var context = this.getContext();
	
	prepareContextStyles(context);
	startDraw(context);
	
	context.moveTo(width / 2, height);
	context.lineTo(width / 2 + COMPASS_CENTER_RADIUS, height / 2 + ARROWS_PADDING);
	context.lineTo(width / 2 - COMPASS_CENTER_RADIUS, height / 2 + ARROWS_PADDING);
	context.lineTo(width / 2, height);
	
	endDraw(context);
}

function drawCenter()
{
	var context = this.getContext();
	
	prepareContextStyles(context);
	startDraw(context);
	
	context.arc(width / 2, height / 2, COMPASS_CENTER_RADIUS, 0, 2 * Math.PI, false);
	
	endDraw(context);
}

// set the style elements of the compass
function prepareContextStyles(context)
{
	context.fillStyle = '#ffffff';
	context.strokeStyle = '#000000';
	context.lineWidth = 1;
}

function startDraw(context)
{
	context.beginPath();
}

function endDraw(context)
{
	context.closePath();
	context.fill();
	context.stroke();
}