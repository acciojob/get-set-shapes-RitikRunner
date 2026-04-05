//complete this code
class Rectangle {
	constructor(width: number, height: number){
		this._width = widht;
		this._height = height;
	}
	get width(){
		return this._width;
	}
	get height(){
		return this._height
	}
	getArea(){
		console.log(width*height)
	}
}


class Square extends Rectangle {
	constructor(side: number){
	super(width,height);

	getPerimeter(){
	console.log(4*side)
	}	
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
