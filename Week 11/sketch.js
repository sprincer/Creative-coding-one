
// RULES: Don't let the flying dots touch the character or your red companion dot!
// Also, don't let any flyers get between you or your companion dot on the way to the exit! 
// Can click to place companion as many times as needed.


// x and y for my character
var characterX = 100;
var characterY = 100;
// define the key codes for each letter
var w = 87; 
var s = 83;
var a = 65;
var d = 68;


// x and y for another shape
var shape2X = 60;
var shape2Y = 100;
var shape2XSpeed;
var shape2YSpeed;

// x and y for a shape
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(400, 600);
    // get a random speed when it first starts
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) - 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

     // get another random speed when the it first starts
     shape2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 4);
     shape2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 2);

function draw()
{
    background(10,45,78);
    stroke(0);
    // exit message
    textSize(16);
    text("EXIT", width-50,height-50)

    //character
    fill(23,40,123);
    circle(characterX,characterY, 50);

    // handle the keys
    if(keyIsDown(w))
    {
        characterY -= 5;   
    }
    if(keyIsDown(s))
    {
        characterY += 5;   
    }
    if(keyIsDown(a))
    {
        characterX -= 5;   
    }
    if(keyIsDown(d))
    {
        characterX += 5;   
    }

    // potential enemy
    fill(13,145,14);
    // draw the shape
    circle(shapeX, shapeY, 10);
  
      // potential enemy #2!
    fill(100,100,14);
    // draw the shape
    circle(shape2X, shape2Y, 15);


   // move the other shape
    shape2X += shape2XSpeed;
    shape2Y += shape2YSpeed;
    // check to see if the other shape has gone out of bounds
    if(shape2X > width)
    {
        shape2X = 0;
    }
    if(shape2X < 0)
    {
        shape2X = width;
    }
    if(shape2Y > height)
    {
        shape2Y = 0;
    }
    if(shape2Y < 0)
    {
        shape2Y = height;
    }
  
  // move the shape
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    // check to see if the shape has gone out of bounds
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }

    // check to see if the character has left the exit
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width/2-100, height/2-100);
    }

    // create the shape based on the mouse click
    fill(150,20,20);
    circle(mouseShapeX, mouseShapeY, 25);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}