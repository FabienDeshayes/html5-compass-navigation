var docWidth = document.width - 20;
var docHeight = document.height - 20;
var width = 600;
var height = 400;

var stage = new Kinetic.Stage("compass", docWidth, docHeight);

const COMPASS_CENTER_RADIUS = width / 18;
const PADDING = COMPASS_CENTER_RADIUS / 4;
const ARROWS_PADDING = COMPASS_CENTER_RADIUS + PADDING;

var leftArrow = new Interactive.Button(prepare, drawLeftArrow);
var rightArrow = new Interactive.Button(prepare, drawRightArrow);
var topArrow = new Interactive.Button(prepare, drawTopArrow);
var bottomArrow = new Interactive.Button(prepare, drawBottomArrow);
var compassCenter = new Interactive.Button(prepare, drawCenter);

leftArrow.shape.x = docWidth / 2 - width / 2;
leftArrow.shape.y = docHeight / 2 - height / 2;
rightArrow.shape.x = docWidth / 2 - width / 2;
rightArrow.shape.y = docHeight / 2 - height / 2;
topArrow.shape.x = docWidth / 2 - width / 2;
topArrow.shape.y = docHeight / 2 - height / 2;
bottomArrow.shape.x = docWidth / 2 - width / 2;
bottomArrow.shape.y = docHeight / 2 - height / 2;
compassCenter.shape.x = docWidth / 2 - width / 2;
compassCenter.shape.y = docHeight / 2 - height / 2;

stage.add(leftArrow.shape);
stage.add(rightArrow.shape);
stage.add(bottomArrow.shape);
stage.add(topArrow.shape);
stage.add(compassCenter.shape);

function prepare(state)
{
	var context = this.getContext();
		
	switch (state)
	{
		case "down":
			context.fillStyle = '#aaaaaa';
			break;
		case "over":
		case "up":
			context.fillStyle = '#cccccc';
			break;
		case "out":
		default:
			context.fillStyle = '#ffffff';
			break;
	}
		
	context.strokeStyle = '#000000';
	context.lineWidth = 1;
}

function drawLeftArrow(state)
{
	var context = this.getContext();
		
	context.moveTo(0, height / 2);
	context.lineTo(width / 2 - ARROWS_PADDING, height / 2 - COMPASS_CENTER_RADIUS);
	context.lineTo(width / 2 - ARROWS_PADDING, height / 2 + COMPASS_CENTER_RADIUS);
	context.lineTo(0, height / 2);
}

function drawRightArrow(state)
{
	var context = this.getContext();
	
	context.moveTo(width, height / 2);
	context.lineTo(width / 2 + ARROWS_PADDING, height / 2 - COMPASS_CENTER_RADIUS);
	context.lineTo(width / 2 + ARROWS_PADDING, height / 2 + COMPASS_CENTER_RADIUS);
	context.lineTo(width, height / 2);
}

function drawTopArrow(state)
{
	var context = this.getContext();
	
	context.moveTo(width / 2, 0);
	context.lineTo(width / 2 + COMPASS_CENTER_RADIUS, height / 2 - ARROWS_PADDING);
	context.lineTo(width / 2 - COMPASS_CENTER_RADIUS, height / 2 - ARROWS_PADDING);
	context.lineTo(width / 2, 0);
}

function drawBottomArrow(state)
{
	var context = this.getContext();
	
	context.moveTo(width / 2, height);
	context.lineTo(width / 2 + COMPASS_CENTER_RADIUS, height / 2 + ARROWS_PADDING);
	context.lineTo(width / 2 - COMPASS_CENTER_RADIUS, height / 2 + ARROWS_PADDING);
	context.lineTo(width / 2, height);
}

function drawCenter(state)
{
	var context = this.getContext();

	context.arc(width / 2, height / 2, COMPASS_CENTER_RADIUS, 0, 2 * Math.PI, false);
}