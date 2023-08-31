function setup() {
canvas = createCanvas(550 , 450);
canvas.position(700,150);
video = createCapture(VIDEO);
video.position(120 , 120);
    pn = ml5.poseNet(video , ModelLoaded)
    pn.on = ml5.poseNet('pose' , gotPoses);

}

function draw() {
    background("grey")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}

function ModelLoaded() {
    console.log("Model loaded.")
}
