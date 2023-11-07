/*
//Draw a triangle within a circle and also a square using verticies


let outerCircle;
let s=5;
let d;
let theta=90;

let main ;
let green;
let bluelight;
let darkblue;
let yellow;
let brown;

let x1=0;

let timer = 0;
let interval = 2000 // 2 seconds

//angleMode(DEGREES);

function setup() {
  main = color(242,222,233);
  green= color (26,71,43);
  bluelight = color(179,199,227);
  darkblue = color (69,99,122);
  yellow = color (243,193,44); 
  brown=color(228,113,39);
  
  createCanvas(windowWidth,windowHeight);
  background(main);
  outerCircle=height-20;
  d=outerCircle-s;
*/

let outerCircle;
let s=2;
let d;
let theta=90;

let main ;
let green;
let bluelight;
let darkblue;
let yellow;
let brown;

function preload(){
    img = loadImage ('IMG_002.png');
    }


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  describe('a red 3d spiral shape created with beginShape and endShape');
  main = color(242,222,233);
  green= color (26,71,43);
  bluelight = color(179,199,227);
  darkblue = color (69,99,122);
  yellow = color (243,193,44); 
  brown=color(228,113,39,255);

  outerCircle=height-20;
  d=outerCircle-s;
}

function draw(){
  background(main);

  //Draw circle

  stroke(yellow);
  strokeWeight(0);
  //fill(darkblue);
  rotateZ(3);
  texture(img);
  sphere(150);
  
  // click+drag on canvas to look around the shape
  orbitControl();
  
  fill(brown);
  //stroke(main);
  //texture(img);
    
  var numVertices = 170;
  translate(0,numVertices,0);
  rotateY(millis()/1000);
  //rotateX(millis()/1000);
  //rotateZ(millis()/1000);
  scale(30);

  beginShape();
  // a simple spiral shape
  for(let i = 0; i < numVertices; i++) {

    vertex(
      sin((i/numVertices*TWO_PI)*5)*sin(i/numVertices*PI)*2,
      -i/10, 
      cos((i/numVertices*TWO_PI)*5)*sin(i/numVertices*PI)*2,
    );
  }
  endShape();
}