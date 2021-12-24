img="";
status="";
object=[];
function preload(){
img=loadImage('Bedroom_img.jfif')
}
function setup(){
canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="status: Detecting object"
}
function draw(){
image(img,0,0,640,420);
if(status!=""){
for(i=0; i<objects.length; i++){
document.getElementById("status").innerHTML="status: Objects detected";
fill("orangered");
percent=floor(objects[i].confidence*100);
text(objects[i].label+" "+percent+'%',objects[i].x+15,objects[i].y+15);
noFill();
stroke("orangered");
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}
}
}
function modelLoaded(){
console.log("Model is loaded");
status=true;
objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
if(error){
console.log(error);
}
console.log(results);
objects=results;
}