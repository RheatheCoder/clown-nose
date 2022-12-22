noseX=0;
noseY=0;

function preload(){
clown_nose = loadImage("https://i.postimg.cc/TYZ6tXvG/cnpng-removebg-preview.png");
}

function setup(){
canvas = createCanvas (400, 400);
canvas.center();
video = createCapture(VIDEO);
video.size (400, 400);
video.hide();
poseNet = ml5.poseNet (video, modelLoaded);
poseNet.on ('pose', gotPoses);
}

function draw(){
image(video, 0, 0, 400, 400);
image(clown_nose, noseX-17, noseY-16, 45, 45);

}

function take_snapshot(){
    save("clowned_selfie");
}

function modelLoaded (){
    console.log ("PoseNet is Initialized");
}

function gotPoses (results){
    if (results.length > 0){
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log (results);
        console.log ('nose x = ' + noseX);
        console.log ('nose y = ' + noseY);
    }
}
