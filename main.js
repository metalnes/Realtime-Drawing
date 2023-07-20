noseX=""
noseY=""
difference=""
function setup(){
  canvas=createCanvas(800,700)
    canvas.position(800,120)
    video=createCapture(VIDEO)
    video.size(800,700)
    poseNet=ml5.poseNet(video, modeloaded)
poseNet.on('pose',gotposes)
}
function modeloaded(){
    console.log("PoseNet is initialized")
}
function gotposes(results){
//console.log(results)
  noseX=results[0].pose.nose.x
  noseY=results[0].pose.nose.y
  leftWristX=results[0].pose.leftWrist.x
  rightWristX=results[0].pose.rightWrist.x
  difference=floor(leftWristX-rightWristX)
}
function draw(){
  r=Math.floor(Math.random()*255)
  g=Math.floor(Math.random()*255)
  b=Math.floor(Math.random()*255)
  fill(r,g,b)
  stroke("red")
  background("grey")
   square(noseX,noseY,difference)
}


