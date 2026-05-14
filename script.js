// 1
class Button {
    _text;
    _width;
    _height;

    constructor(text, width, height) {
        this._text = text;
        this._width = width;
        this._height = height;
    }

    showBtn() {
        document.write(`<button style="width: ${this._width}; height: ${this._height};">${this._text}</button>`);
    }
}

class BootstrapButton extends Button {
    #color;

    constructor(text, color, width, height) {
        super(text, width, height);
        this.#color = color;
    }

    showBtn() {
        document.write(`<button style="background-color: ${this.#color}; width: ${this._width}; height: ${this._height};">${this._text}</button>`);
    }
}

const button = new BootstrapButton("Push me", "yellow", "300px", "100px");
button.showBtn();

// 2
class Figure {
    _name = "Abstract";
    _width;
    _height;

    constructor(_name, width , height) {
        if (new.target === Figure) {
            throw new Error("Abstarct class!");
        }

        this._width = width;
        this._height = height;
    }

    get getName() {
        return this._name;
    }

    printInfo() {
        document.write(`<p>width: ${this._width}; height: ${this._height};</p>`);
    }

    area() {}
    perimeter() {}
}

class Square extends Figure {
    constructor(width) {
        super("Square", width);
    }

    area() {
        return width**2;
    }

    perimeter() {
        return 4*width;
    }
}

class Rectangle extends Figure {
    constructor(width, height) {
        super("Rectangle", width, height);
    }

    area() {
        return width * height;
    }

    perimeter() {
        return 2 * (width + height);
    }
}

class Triangle extends Figure {
    constructor(a, h) {
        super("Triangle", a, h);
    }

    area() {
        return 0,5 * a * h;
    }

    perimeter() {
        return a + 2 * Math.sqrt(h**2 + )
    }
}

