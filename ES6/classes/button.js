class Button {
    constructor(name) {
        this.button = document.createElement('button');
        this.button.innerHTML = name;
        document.body.appendChild(this.button);
    }
    set width(width) {
        this.button.style.width = width + 'px';
    }
    set height(height) {
        this.button.style.height = height + 'px';
    }
    get width() {
        return parseInt(this.button.style.width);
    }
    get height() {
        return parseInt(this.button.style.height);
    }
}
var b1 = new Button('Click Me')
b1.width = 100;
b1.height = 200;
console.log(b1.width, b1.height);
