var docWidth = window.innerWidth;
var docHeight = window.innerHeight;
var width = 600;
var height = 400;

var stage = new Kinetic.Stage("compass", docWidth, docHeight);

const COMPASS_CENTER_RADIUS = width / 18;
const PADDING = COMPASS_CENTER_RADIUS / 4;
const ARROWS_PADDING = COMPASS_CENTER_RADIUS + PADDING;

var leftArrow = new Interactive.Button(prepareHorizontalArrow, drawLeftArrow, leftArrow_clickHandler);
var rightArrow = new Interactive.Button(prepareHorizontalArrow, drawRightArrow, rightArrow_clickHandler);
var topArrow = new Interactive.Button(prepareVerticalArrow, drawTopArrow, topArrow_clickHandler);
var bottomArrow = new Interactive.Button(prepareVerticalArrow, drawBottomArrow, bottomArrow_clickHandler);
var compassCenter = new Interactive.Button(prepareCenter, drawCenter, center_clickHandler);

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

leftArrow.shape.canvas.className = "center";
rightArrow.shape.canvas.className = "center";
topArrow.shape.canvas.className = "center";
bottomArrow.shape.canvas.className = "center";
compassCenter.shape.canvas.className = "center";

function prepareHorizontalArrow(state)
{
	var context = this.getContext();
		
	var gradient = context.createLinearGradient(0, height / 2 - COMPASS_CENTER_RADIUS, 0, height / 2 + COMPASS_CENTER_RADIUS);

	switch (state)
	{
		case "down":
			gradient.addColorStop(0.495, "#E8B61E");
			gradient.addColorStop(0.5, "black");
			gradient.addColorStop(0.51, "#E6E000");
			context.shadowBlur = 8;
			break;
		case "over":
		case "up":
			gradient.addColorStop(0.495, "#ffcf3f");
			gradient.addColorStop(0.5, "black");
			gradient.addColorStop(0.51, "#fdf832");
			context.shadowBlur = 8;
			break;
		case "out":
		default:
			gradient.addColorStop(0.495, "#ffc821");
			gradient.addColorStop(0.5, "black");
			gradient.addColorStop(0.51, "#faf100");
			context.shadowBlur = 5;
			break;
	}
	
	context.fillStyle = gradient;
	
	context.shadowColor = "black";
}

function prepareVerticalArrow(state)
{
	var context = this.getContext();
		
	var gradient = context.createLinearGradient(width / 2 - COMPASS_CENTER_RADIUS, 0, width / 2 + COMPASS_CENTER_RADIUS, 0);

	switch (state)
	{
		case "down":
			gradient.addColorStop(0.495, "#E8B61E");
			gradient.addColorStop(0.5, "black");
			gradient.addColorStop(0.51, "#E6E000");
			context.shadowBlur = 8;
			break;
		case "over":
		case "up":
			gradient.addColorStop(0.495, "#ffcf3f");
			gradient.addColorStop(0.5, "black");
			gradient.addColorStop(0.51, "#fdf832");
			context.shadowBlur = 8;
			break;
		case "out":
		default:
			gradient.addColorStop(0.495, "#ffc821");
			gradient.addColorStop(0.5, "black");
			gradient.addColorStop(0.51, "#faf100");
			context.shadowBlur = 5;
			break;
	}
	
	context.fillStyle = gradient;
	
	context.shadowColor = "black";
}

function prepareCenter(state)
{
	var context = this.getContext();
		
	var gradient = context.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, COMPASS_CENTER_RADIUS);

	switch (state)
	{
		case "down":
			gradient.addColorStop(0.2, "#E6E000");
			gradient.addColorStop(0.8, "#E8B61E");
			context.shadowBlur = 4;
			break;
		case "over":
		case "up":
			gradient.addColorStop(0.2, "#fdf832");
			gradient.addColorStop(0.8, "#ffcf3f");
			context.shadowBlur = 4;
			break;
		case "out":
		default:
			gradient.addColorStop(0.2, "#faf100");
			gradient.addColorStop(0.8, "#ffc821");
			context.shadowBlur = 2;
			break;
	}
	
	context.fillStyle = gradient;
	context.shadowColor = "black";
}

function drawLeftArrow(state)
{
	var context = this.getContext();
		
	context.moveTo(0, height / 2);
	context.lineTo(width / 2 - ARROWS_PADDING, height / 2 - COMPASS_CENTER_RADIUS);
	context.lineTo(width / 2, height / 2);
	context.lineTo(width / 2 - ARROWS_PADDING, height / 2 + COMPASS_CENTER_RADIUS);
	context.lineTo(0, height / 2);
}

function drawRightArrow(state)
{
	var context = this.getContext();
	
	context.moveTo(width, height / 2);
	context.lineTo(width / 2 + ARROWS_PADDING, height / 2 - COMPASS_CENTER_RADIUS);
	context.lineTo(width / 2, height / 2);
	context.lineTo(width / 2 + ARROWS_PADDING, height / 2 + COMPASS_CENTER_RADIUS);
	context.lineTo(width, height / 2);
}

function drawTopArrow(state)
{
	var context = this.getContext();
	
	context.moveTo(width / 2, 0);
	context.lineTo(width / 2 + COMPASS_CENTER_RADIUS, height / 2 - ARROWS_PADDING);
	context.lineTo(width / 2, height / 2);
	context.lineTo(width / 2 - COMPASS_CENTER_RADIUS, height / 2 - ARROWS_PADDING);
	context.lineTo(width / 2, 0);
}

function drawBottomArrow(state)
{
	var context = this.getContext();
	
	context.moveTo(width / 2, height);
	context.lineTo(width / 2 + COMPASS_CENTER_RADIUS, height / 2 + ARROWS_PADDING);
	context.lineTo(width / 2, height / 2);
	context.lineTo(width / 2 - COMPASS_CENTER_RADIUS, height / 2 + ARROWS_PADDING);
	context.lineTo(width / 2, height);
}

function drawCenter(state)
{
	var context = this.getContext();

	context.arc(width / 2, height / 2, COMPASS_CENTER_RADIUS, 0, 2 * Math.PI, false);
}

function leftArrow_clickHandler(event)
{
	applyClassNameOnCompass("right");
}

function rightArrow_clickHandler(event)
{
	applyClassNameOnCompass("left");
}

function topArrow_clickHandler(event)
{
	applyClassNameOnCompass("bottom");
}

function bottomArrow_clickHandler(event)
{
	applyClassNameOnCompass("top");
}

function center_clickHandler(event)
{
	applyClassNameOnCompass("center");
}

function applyClassNameOnCompass(newClassName)
{
	var canvas = document.getElementsByTagName('canvas')[2];
	canvas.className = newClassName;
	var canvas = document.getElementsByTagName('canvas')[3];
	canvas.className = newClassName;
	var canvas = document.getElementsByTagName('canvas')[4];
	canvas.className = newClassName;
	var canvas = document.getElementsByTagName('canvas')[5];
	canvas.className = newClassName;
	var canvas = document.getElementsByTagName('canvas')[6];
	canvas.className = newClassName;
}