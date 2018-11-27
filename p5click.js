var click = false;

function setup() {
 	createCanvas(600, 600);
}

function draw() {
    background("#619ded");
    stroke(0);
    strokeWeight(30);
    fill("#a30827");
    ellipse(300,300,400,400);
    
    noStroke()
    fill("#a30827");
     ellipse(300,300,200,200);
    if(click === false){
        ellipse(300,300,200,200);
    } else if(click === true){
        ellipse(300,300,400,400);
   }
    fill(0);
    text("Click!", 240, 320);
    textSize(50);
}

function mousePressed(){
    //set surprise to reverse of current state
    click = !click;
    //console.log(surprise);
}
