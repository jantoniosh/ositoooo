let font, sample, amplitude, ready;

function preload() {
    font = loadFont('assets/Sacramento-Regular.ttf');
    soundFormats('mp3', 'ogg');
    sample = loadSound('assets/sample.mp3');
}

function setup() {
    let cnv = createCanvas(864, 864);
    cnv.mousePressed(canvasPressed);
    amplitude = new p5.Amplitude();
    ready = false;
}

function draw() {
    background("#FFF");
    rect(0, 0, width, height);
    console.log(mouseX);
    push();
    let mov = map(mouseX, 0, 864, -432, 432);
    translate(mov, 0);
    drawOso();
    pop();
}

function drawOso() {
    fill("#FFF");
    rect(216, 432, 432, 432);
    fill("#FFF");
    beginShape();
    vertex(290, 864);
    vertex(290, 732);
    vertex(370, 732);
    vertex(432, 782);
    vertex(494, 732);
    vertex(574, 732);
    vertex(574, 864);
    endShape();
    stroke(0);
    fill("#FFF");
    quad(370, 732, 432, 782, 422, 782, 360, 752);
    quad(494, 732, 432, 782, 442, 782, 504, 752);
    stroke(0);
    strokeWeight(6);
    fill("#FFF");
    arc(82, 648, 600, 600, PI + PI * 0.7, TWO_PI + HALF_PI, OPEN);
    arc(782, 648, 600, 600, HALF_PI, PI + 0.3 * PI, OPEN);
    fill("#000");
    ellipse(432, 772, 40);
    triangle(432, 772, 552, 742, 552, 802);
    triangle(432, 772, 312, 742, 312, 802);
    ellipse(412, 830, 9);
    line(432, 772, 432, 864);
    stroke(0);
    strokeWeight(6);
    drawCara(432, 502);
}

function drawCara(x, y) {
    // Oreja Izquierda
    fill("#FFF");
    ellipse(x - 210, y - 160, 180, 180);
    ellipse(x - 210, y - 160, 100, 100);
    // Oreja Dercha
    ellipse(x + 210, y - 160, 180, 180);
    ellipse(x + 210, y - 160, 100, 100);
    // Circulo Principal
    ellipse(x, y, 540, 420);
    fill("#000");
    strokeWeight(18);
    line(x - 135, y - 120, x - 45, y - 90);
    line(x + 135, y - 120, x + 45, y - 90);
    strokeWeight(6);
    // Ojo Derecho
    ellipse(x - 90, y - 50, 60);
    // Ojo Izquierdo
    ellipse(x + 90, y - 50, 60);
    // Nariz
    fill(0);
    ellipse(x, y + 40, 40, 30);
    line(x, y + 40, x, y + 90);
    noFill();
    line(x, y + 90, x - 30, y + 110);
    line(x, y + 90, x + 30, y + 110);
}

function canvasPressed() {
    // if (!ready) {
    //     ready = !ready;
    //     console.log("play");
    //     sample.play();
    // }
}