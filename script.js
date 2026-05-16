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
        document.write(`<button style="background-color: ${this.#color}; width: ${this._width}; height: ${this._height};">${this._text}</button><br>`);
    }
}

const button = new BootstrapButton("Push me", "yellow", "300px", "100px");
button.showBtn();

// 2
class Figure {
    _name;
    _width;
    _height;

    constructor(width , height) {
        if (new.target === Figure) {
            throw new Error("Abstarct class!");
        }
        this._name = "Abstract";
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
        super(width, width);
        this._name = "Square";
    }

    area() {
        return this._width * this._height;
    }

    perimeter() {
        return 2 * (this._width + this._height);
    }
}

class Rectangle extends Figure {
    constructor(width, height) {
        super(width, height);
        this._name = "Rectangle";
    }

    area() {
        return this._width * this._height;
    }

    perimeter() {
        return 2 * (this._width + this._height);
    }
}

class Triangle extends Figure {
    constructor(width, height) {
        super(width, height);
        this._name = "Triangle";
    }

    area() {
        return 0.5 * this._width * this._height;
    }

    perimeter() {
        return this._width + this._height + Math.sqrt(this._width ** 2 + this._height ** 2);
    }
}

const figures = [new Square(5), new Rectangle(4, 6), new Triangle(3, 4)];
for (const figure of figures) {
    document.write(`<h2>${figure.getName}</h2>`);
    figure.printInfo();
    document.write(`<p>Area: ${figure.area()}</p>`);
    document.write(`<p>Perimeter: ${figure.perimeter()}</p>`);
}

// 3
class ExtentedArray extends Array {
    getString(separator) {
        return this.join(separator);
    }

    getHtml(tagName) {
        let htmlText = "";
        if (tagName === "li") {
            htmlText += "<ul>";
            for (const item of this) {
                htmlText += `<li>${item}</li>`;
            }
            htmlText += "</ul>";
            return htmlText;
        }
        for (const item of this) {
            htmlText += `<${tagName}>${item}</${tagName}>`;
        }
        return htmlText;
    }
}

const arr = new ExtentedArray("1", "2", "3", "class", "apple", "engine");
document.write("<br><h2>Array: </h2>");
document.write(arr.getString(" "));
document.write(arr.getHtml("h3"));
document.write(arr.getHtml("li"));