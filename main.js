img="";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	img = loadImage("mario05.png");

  mario_jump=loadSound("jump.wav");
  collect_coin=loadSound("coin.wav");
  game_over=loadSound("gameover.wav");
  kill=loadSound("kick.wav");
  mario_die=loadSound("mariodie.wav");
  

}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video=createCapture(VIDEO);
  video.size(800,400);
  video.parent("game_console");
  poseNet=ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);
}

function draw() {
	game();
  
}

function gotPoses(results){
  if(results.length>0){
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
  }
}
function modelLoaded(){
  console.log("modelLoaded");
}