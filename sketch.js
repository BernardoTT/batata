var Indoprali;
function setup(){
createCanvas(400,400);
Indoprali=createSprite(200,200,12,12);
Indoprali.shapeColor="green"
}
function draw(){
    background ("blue");
    if (keyDown("w")) {
        Indoprali.velocityY=-20;
    }
    if (keyDown("s")) {
        Indoprali.velocityY=20;
    }
    if (keyDown("d")) {
        Indoprali.velocityX=20;
    }
    if (keyDown("a")) {
        Indoprali.velocityX=-20;
    }
drawSprites();
}





