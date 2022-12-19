function setup() {
    canvas=createCanvas(400,400);
   background("white");
    canvas.position(500,250);
   }
     
   
   function preload() {
     
   }
     
   
   function draw() {
    strokeWeight(15);
    stroke(0);
    if (mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY);
    }
   } 
   function regalo(){
     background("white");
   }