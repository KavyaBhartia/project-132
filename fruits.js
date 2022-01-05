status = "";

function preload()
{
    img = loadImage('1.jpg');
}

function setup()
{
    canvas = createCanvas(550, 500);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";
}

function modelLoaded()
{
    console.log("Model is Loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error , results)
{
    if (error) 
    {
        console.error(error);    
    }
    else
    {
    console.log(results);
    objects = results;
    }
}