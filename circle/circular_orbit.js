let angle = 0;
let hypotenuse = 200;

function setup() {
  createCanvas(600, 600);
  stroke(1);
  strokeWeight(3);
  line(0, width / 2, width, height / 2);
  line(height / 2, 0, width / 2, height);
}

function draw() {
    background(0, 50);
    let centerX = width / 2;
    let centerY = height / 2;
    translate(centerX, centerY);

    let [lineX, lineY] = trigonometric(hypotenuse, angle)
    ellipse(lineY, lineX, 50);

    fill(200, 40, 150);
    angle += 0.04;

    textSize(16);
    text(`X: ${nf(lineX, 1, 2)}`, 10, 20);  // X座標を表示
    text(`Y: ${nf(lineY, 1, 2)}`, 10, 40);  // Y座標を表示
}


function trigonometric(radius, angle){
  let x = radius * sin(angle);
  let y = radius * cos(angle);
  return [x, y]
}
