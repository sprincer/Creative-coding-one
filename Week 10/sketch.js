    //the triple vertex conundrum 
  var jawX1 = 125; var jawX2 = 300; var jawX3 = 150; 
  var jawDirection = 2;
  
  var chinX = 240;
  var chinDirection = 1;
  
  var size = 16;
  var count = 0;
  var sizeDirection = 1;
  
    //goofy variable names
  var cheekY = 200;
  var nostrilY = 243;
  
  var cheekDirection = 1;
  var nostrilDirection = 2;
  
  var arcX = 80;
  var arcY = 160;
  var arcDirection = 1;
  
  
  function setup()
  {
      createCanvas(400,400);
  }
  function draw()
  {
      background(10,45,70);
      
        //ear
        fill(200, 150, 0);
      arc(arcX, arcY, 50, 50, 7, PI, PIE);
    arcX += arcDirection;
    if(arcX <= 70 || arcX >= 100 )
          {
          arcDirection *= -1;
          }
    
    arcY += arcDirection;
      if(arcY <= 100 || arcY >= 200 )
          {
          arcDirection *= -1;
          }
      triangle(60, 100, 70, 150, 90, 150);
      triangle(90, 160, 100, 110, 110, 150);
    
        //chin jaw
        fill(170, 250, 50); 
      rect(chinX, 330, 65, 25);
      chinX += chinDirection;
        if(chinX <= 200 || chinX >= 300 )
          {
          chinDirection *= -1;
          }
  triangle(jawX1, 340, jawX2, 320, jawX3, 220);
    
        jawX1 += jawDirection;
    
      if(jawX1 <= 75 || jawX1 >= 175 )
          {
            jawDirection *= -1;
          }
    
        jawX2 += jawDirection;
    
      if(jawX2 <= 250 || jawX2 >= 350 )
          {
            jawDirection *= -1;
          }
    
        jawX3 += jawDirection;
    
    
      if(jawX3 <= 100 || jawX3 >= 200 )
          {
            jawDirection *= -1;
          }
        
        //nose cheekbone
        fill(190, 70, 100)
      ellipse(225, cheekY, 125, 55);
    cheekY += cheekDirection;
        if(cheekY <= 200 || cheekY >= 230 )
      {
          cheekDirection *= -1;
      }
      triangle(300, 235, 290, 120, 350, 225)
    
        //nostril
        fill(80, 50,120)
      circle(312, nostrilY, 16)
    nostrilY += nostrilDirection;
        if(nostrilY <= 230 || nostrilY >= 250 )
       {
           nostrilDirection *= -1;
       }   
  
        //eye sclera
        fill(80, 130, 110)
      triangle(170, 115, 265, 110, 275, 140)
    
        //eye pupil
        fill(100,100,100)
      triangle(265, 110, 275, 140, 275, 108)
    
      fill(250);
      textSize(size);
      size+= sizeDirection;
      count++;
      if(count > 5)
      {
          sizeDirection *=-1;
          count = 0;
      }
      text("Spencer Price",200,380 );
    
  
  
  }
  
  
  //I don't know why the Jaw is doing that. I messed with the numbers, but it always breaks
  //Tried making sure they only go +/- 50 but that didn't work, ah well; happy halloween