function preload()
{}

function setup()
{
    canvas = createCanvas(290, 290);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(290, 290);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoded);
    poseNet.on('pose', gotPoses);
}

function modelLoded()
{
    console.log("PoseNet is Initialized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x)
        console.log("nose y = " + results[0].pose.nose.y)
    }
}

function draw()
{
    image(video, 0, 0, 300, 300);
}

function take_snapshot()
{
    save('my_filter_lipstick_image.png');
}