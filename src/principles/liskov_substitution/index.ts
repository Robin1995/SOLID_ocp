abstract class Shape {
    public abstract getArea(): number;
}

class Rectangle extends Shape {
    private _width: number;
    private _height: number;

    constructor (width: number, height: number) {
        super();
        this._width = width;
        this._height = height;
    }

    getArea (): number { return this._width * this._height; }
}

class Square extends Shape {
    private _side: number;

    constructor (side: number) {
        super();
        this._side = side;
    }

    getArea (): number { return this._side * this._side; }
}

function displayArea (shape: Shape): void {
    console.log(shape.getArea());
}