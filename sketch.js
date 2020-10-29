const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var wall_y = 4815;

function preload(){
    player_running = loadAnimation("png/Run__000.png","png/Run__001.png","png/Run__002.png","png/Run__003.png","png/Run__004.png","png/Run__005.png","png/Run__006.png","png/Run__007.png","png/Run__008.png","png/Run__009.png");
}
function setup(){
    var canvas = createCanvas(1000,5000);
    engine = Engine.create();
    world = engine.world;

    wall_left_grp = createGroup();
    wall_right_grp = createGroup();

    platform_grp = createGroup();

    player = createSprite(500,4964,20,20);
    player.addAnimation("running",player_running);
    player.scale = 0.12;

    wall1_left = createSprite(207.5,4955,15,60);
    wall1_right = createSprite(792.5,4955,15,60);

    wall2_left = createSprite(207.5,4885,15,60);
    wall2_right = createSprite(792.5,4885,15,60);

}

function draw(){
    background(0);
    Engine.update(engine);

    player.collide(wall1_left);
    player.collide(wall1_right);

    player.collide(wall2_left);
    player.collide(wall2_right);
    for(var y = 4990; y >= 0; y -= 70){
        plat = createSprite(500,y,600,10);
        platform_grp.add(plat);
    }
    rand_left = Math.round(random(0,4));
    rand_right = Math.round(random(0,4));
    wall_y -= 70;
    if(rand_left === 1 || rand_left === 3 || rand_left === 4){
        closedW_left = createSprite(207.5,wall_y,15,60);
        wall_left_grp.add(closedW_left);
    }
    if(rand_right === 1 || rand_right === 3 || rand_right === 4){
        closedW_right = createSprite(792.5,wall_y,15,60);
        wall_right_grp.add(closedW_right);
    }

    player.collide(wall_left_grp);
    player.collide(wall_right_grp);

    player.collide(platform_grp);
    /*if(mousePressedOver(wall1_left)){
        wall1_left.shapeColor = "red";
    }*/
    if(keyCode === 32){
        player.y -= 50;
    }

    player.velocityY += 0.8;
    
    drawSprites();
}
//function mousePressedOver(wall1_left){
    //wall1_left.shapeColor = "red";
    //player.velocityX = -5;
//}