class Button {
    _width;
    _height;
    _text;

    constructor(width, height, text) {
        this._width = width;
        this._height = height;
        this._text = text;
    }

    showBtn() {
        document.write(`<button style="width: ${width}px; height: ${height}px;">${text}</button>`);
    }
}