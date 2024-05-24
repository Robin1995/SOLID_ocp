
export enum Color {
    BLUE = 'blue',
    GREEN = 'green',
    RED = 'red'
}

export enum Size {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large'
}

export default class Product {
    private _name: string;
    private _color: Color;
    private _size: Size;

    constructor (name: string, color: Color, size: Size) {
        this._name = name;
        this._color = color;
        this._size = size;
    }

    public get name(): string { return this._name; }
    public get color(): Color { return this._color; }
    public get size(): Size { return this._size; }
}
