LipX = 90
LipY = 90

function preload() {
    img = loadImage('m.png')
}

function setup() {
    canvas = createCanvas(310, 300)
    video = createCapture(VIDEO)
    video.size(300, 300)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotposes)
}
function modelLoaded() {
    console.log('poseNet is Initiaized')
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results)
        console.log("Lip x =" + results[0].pose.Lip.x)
        console.log("Lip y =" + results[0].pose.Lip.y)
        LipX = results[0].pose.Lip.x
        LipY = results[0].pose.Lip.y
    }
}
function draw() {
    image(video, 0, 0, 300, 300)
    poseNet.on('pose', gotposes)
    image(img,LipX,LipY,50,50 )
}

function take_snapshot() {
    save("MySnap.png")
}

