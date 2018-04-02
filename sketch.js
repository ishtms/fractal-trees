var slider;
function setup() {
    createCanvas(window.innerWidth, window.innerHeight)
    deg = PI / 4
    slider = createSlider(0, TWO_PI, PI / 4, 0.01)
}

function draw() {
    background(67)
    stroke('white');
    translate(width / 2, height);
    var length = width / 4;
    createFractal(length);
}

var createFractal = function(_length) {
    line(0, 0, 0, -_length);
    translate(0, -_length);
    if(_length > 2) {
        push();
        rotate(slider.value());
        createFractal(_length * 0.7)
        pop();
        push();
        rotate(-slider.value());
        createFractal(_length * 0.7);
        pop();
    }
}