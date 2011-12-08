var docWidth = document.width - 20;
var docHeight = document.height - 20;
var width = 600;
var height = 400;

var stage = new Kinetic.Stage("compass", docWidth, docHeight);

const COMPASS_CENTER_RADIUS = width / 18;
const PADDING = COMPASS_CENTER_RADIUS / 4;
const ARROWS_PADDING = COMPASS_CENTER_RADIUS + PADDING;

var leftArrow = new Interactive.Button(prepareHorizontalArrow, drawLeftArrow);
var rightArrow = new Interactive.Button(prepareHorizontalArrow, drawRightArrow);
var topArrow = new Interactive.Button(prepareVerticalArrow, drawTopArrow);
var bottomArrow = new Interactive.Button(prepareVerticalArrow, drawBottomArrow);
var compassCenter = new Interactive.Button(prepareCenter, drawCenter);

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
			context.shadowBlur = 5;
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
			context.shadowBlur = 5;
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
			gradient.addColorStop(0.3, "#E6E000");
			gradient.addColorStop(0.7, "#E8B61E");
			break;
		case "over":
		case "up":
			gradient.addColorStop(0.3, "#fdf832");
			gradient.addColorStop(0.7, "#ffcf3f");
			break;
		case "out":
		default:
			gradient.addColorStop(0.3, "#faf100");
			gradient.addColorStop(0.7, "#ffc821");
			break;
	}
	
	context.fillStyle = gradient;

	context.shadowBlur = 2;
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