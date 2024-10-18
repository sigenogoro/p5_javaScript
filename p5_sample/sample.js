function setup() {
    createCanvas(1000, 1000, WEBGL);
    angleMode(DEGREES)
  }

function draw() {
  background(30)

  rotateX(60)

  noFill()
  stroke(255)
  for(var i=0;i < 50; i++){

    var r = map(sin(frameCount / 2), -1, 1, 0, 255)
    var g = map(i, 0 , 50, 100, 200)
    var b = map(cos(frameCount), -1, 1, 255, 100)

    stroke(r, g, b)

    rotate(frameCount)

    beginShape()
    for(var j = 0; j < 360; j += 20){
        var rad = i * 3
        var x = rad * cos(j)
        var y = rad * sin(j)
        var z = sin(frameCount  + i * 5) * 50
        vertex(x, y, z)
    }
    endShape(CLOSE)
  }
}