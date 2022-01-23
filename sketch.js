let backgroundImage;

let mgr;
let plasticDrop = false;


function setup() {
  createCanvas(windowWidth, windowHeight)
  mgr=new sourceMgr(4);
}

function preload(){
 //preload assets
 backgroundImage = loadImage('assets/backgroundSeaImage.jpg');
  
}

function draw() {
  background(backgroundImage);
  
  mgr.dropPlastic();
}
