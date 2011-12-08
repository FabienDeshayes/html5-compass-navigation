var Interactive = {};

/****************************************
 * Button
 */
 
Interactive.Button = function(prepare, drawButton){
	this.shape = new Kinetic.Shape(this.innerDraw);
	this.shape.prepare = prepare;
	this.shape.drawButton = drawButton;
	
	var that = this;
	
	this.shape.addEventListener(
		"mouseover",
		function(event){
			that.shape.draw("over");
		});
	this.shape.addEventListener(
		"mouseout",
		function(){
			that.shape.draw("out");
		});
	this.shape.addEventListener(
		"mousedown",
		function(){
			that.shape.draw("down");
		});
	this.shape.addEventListener(
		"mouseup",
		function(){
			that.state = "up";
			that.shape.draw("up");
		});
};

Interactive.Button.prototype.innerDraw = function(state){
    var context = this.getContext();
    this.clear();
    
    context.save();
    
    if (this.prepare)
    {
    	this.prepare(state);
    }
    
	context.beginPath();
	
	if (this.drawButton)
	{
		this.drawButton(state);
	}
	
	context.closePath();
	context.fill();
	
    context.restore();
};

Interactive.Button.prototype.getContext = function(){
    return this.shape.getContext();
};

Interactive.Button.prototype.getCanvas = function(){
    return this.shape.getCanvas();
};

Interactive.Button.prototype.draw = function(){
    this.shape.draw();
};

Interactive.Button.prototype.clear = function(){
    var context = this.getContext();
    var canvas = this.getCanvas();
    context.clearRect(0, 0, canvas.width, canvas.height);
};