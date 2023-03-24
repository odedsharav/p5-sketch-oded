function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(1);
  // runce();
}

function draw() {
  background(220);
  // בשתי לולאות ציירו גריד של ריבועים
  // לולאה אחת תתן לכם את מספר העמודה והשניה את השורה
  // פרסו את הריבועים על כל המסך 
  // width height נתוני הגודל של המסך נגישים דרך המשתנים 

      textSize(8);
      textAlign(CENTER);  
  
  let target = 16;  
  let rectWidth = width / target;
  let rectHeight = height / target;
  fill(255);

  for (let col = 0; col < target; col++) {
    for (let row = 0; row < target; row++) { 
      fill(255);6
      fill(random(255));
      rect(rectWidth*col,rectHeight*row, rectWidth,rectHeight);
      fill(0);

      // text text to write   x                y
      fill(random(255));
         text(`${col},${row}`,rectWidth*col+rectWidth/2 ,rectHeight*row + rectHeight/2);
    }
  }
}