
var dogo,bone;
function preload(){
dogoImg=loadImage("images/Dg1.png");
boneImg=loadImage("images/bne.png");
happydogo=loadImage("images/bg2.png");

}


	


function setup() {
  database=firebase.database();
	createCanvas(800,500);
  dogo = createSprite(700,400,30);

  dogo.addImage(dogoImg);
  dogo.scale=0.5;


  var dogoposition=database.ref("dogo/position");
   dogoposition.on("value",readPosition,showError);
   


  
}

function draw() {  

background("aqua");
if(keyDown("A")){
  changePosition(-3,0);
}
else if(keyDown("D")){
  changePosition(3,0);
}
else if(keyDown("W")){
  changePosition(0,-3);
}
else if(keyDown("S")){
  changePosition(0,+3);
}


//if (bone.isTouching(dogo)){
 // fill("black");
//text("Horray",100,100);
 // dogo.changeAnimation(happydogo);


  
  //}

   bone=createSprite(100,100);
    bone.addImage(boneImg);
    bone.scale=0.5;
  
//var k=600
//while(k<500){
 // bone=createSprite(k,k);
 // bone.addImage(boneImg);
 // bone.scale=0.5;
 // k=k+100;
//}
  




drawSprites();
fill("black") ;
text(mouseX+","+mouseY,10,10);
fill("red") ;
text("FEED YOUR DOG!!!!!!",680,30);
console.log(dogo.x,dogo.y);
}
function changePosition(x,y){
  database.ref("dogo/position").set({
     x:position.x+x,
  y:position.y + y
      
  })
}


function readPosition(data){
  position=data.val();
  dogo.x=position.x;
  dogo.y=position.y;
}
function showError(){
  console.log("hi man");
}






