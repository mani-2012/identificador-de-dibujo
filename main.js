function setup() {
  cuatro=createCanvas(350,350);
 background("white");
  cuatro.position(500,250);
  cuatro.mouseReleased(noche);
  }
   function noche(){
     pet.classify(cuatro,felices);
   }
   function felices(error,resultado){
     if (error) {
       console.error(error);
     }
     else {
       console.log(resultado);
       document.getElementById("label").innerHTML="Etiqueta: "+resultado[0].label;
       document.getElementById("confidence").innerHTML="Confianza: "+resultado[0].confidence;
     }
 
   }
 
 function preload() {
   pet=ml5.imageClassifier('DoodleNet');
 }
   
 
 function draw() {
  strokeWeight(14);
  stroke(0);
  if (mouseIsPressed){
  line(pmouseX,pmouseY,mouseX,mouseY);
  }
 } 
 function regalo(){
   background("white");
 }