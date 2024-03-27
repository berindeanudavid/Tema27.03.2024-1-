function setup() {
    createCanvas(200, 100);
}

function draw() {
    background(18,63,119);
    dreamHouse();
}

function dreamHouse() {
    //corpul casei
    stroke("black");
    fill(180,180,180);
    rect(75, 65 , 80, 25);
    rect(75, 45 , 50, 20);
    //ferestre
    fill(245,219,55);
    rect(80, 50, 40, 10);
    rect(80,70,20,10);
    rect(130,70,20, 10);
    //usa
    fill(80,20,20);
    rect(110, 70, 10, 20);
    //jacuzzi
    fill("grey");
    rect(134,58,12,7);
    fill(100, 100, 255);
    ellipse(140, 60, 9, 3); 
    //the soil
    fill("green")
    rect(0,90,200,10)
    //moon
    fill(251,239,150)
    circle(170,20,20)
}
