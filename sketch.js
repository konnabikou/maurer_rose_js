var sliderD;
var sliderN;
var sliderSize;
var button;

function setup() {
  createCanvas(600, 600);

  sliderD=createSlider(1, 100, 3, 1)
  sliderD.position(450, 10)

  sliderN=createSlider(1, 100, 10, 1)
  sliderN.position(450, 50)

  sliderSize=createSlider(100, 3000, 200, 10)
  sliderSize.position(450, 90)

  button = createButton('save');
  button.position(width-50, height-25);
  button.mousePressed(saveImage);
}

function saveImage() {
  save('myCanvas.jpg');
}

function draw() {
  background(51);

  var x,r,t;
  var size=sliderSize.value();
  var xStart=width/2;
  var yStart=height/2;
  var maurer=71;

  var d=sliderD.value();
  var n=sliderN.value();

  fill(255);
  textSize(32);
  text("d:"+d+" n"+n+" size:"+size, 10, 30);

  var k=n/d;

  stroke(255);
  strokeWeight(0.2);
  beginShape();
  noFill();

    var i=0;

      do {
        fi = maurer * i * Math.PI / 180
        r = Math.sin(-k * fi) * size
        x = xStart + r * Math.cos(fi)
        y = yStart + r * Math.sin(fi)

        if (i === 0) {
           vertex(x, y);
        } else {
           vertex(xPrev, yPrev);
        }

        xPrev = x
        yPrev = y

        i++;
      } while (i<3600)

  endShape();
}