function setup()
{
    createCanvas(400,400);
}
function draw()
{
    background(10,45,70);
  
      fill(200, 150, 0);
    arc(80, 160, 50, 50, 7, PI, PIE);
    triangle(60, 100, 70, 150, 90, 150);
    triangle(90, 160, 100, 110, 110, 150);
  
      fill(170, 250, 50); 
    rect(240, 330, 65, 25);
    triangle(125, 340, 300, 320, 150, 220);
  
      fill(190, 70, 100)
    ellipse(225, 200, 125, 55);
    triangle(300, 235, 290, 120, 350, 225)
  
      fill(80, 50,120)
    circle(312, 243, 16)

      fill(80, 130, 110)
    triangle(170, 115, 265, 110, 275, 140)
  
      fill(100,100,100)
    triangle(265, 110, 275, 140, 275, 108)
  
}