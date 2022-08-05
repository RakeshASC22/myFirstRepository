// let basketball;
// let court;
// let holding;
// let shooting;
// let music;
// let start;
// let court1;
// let cursor;
// let direction = 1;
// let xPos = 35;
// let timer;
// let ballmovement;
// let yPos = 300;
// let state = 1;

// function preload() {
//     ball = loadImage('Images/ball1.png');
//     court = loadImage('Images/menu.png');
//     court1 = loadImage('Images/basketball court.png');
//     holding = loadImage('Images/manHoldingBall.png');
//     shooting = loadImage('Images/manShooting.png');
//     music = loadSound('Sounds/Game Music.mp3');
//     start = loadImage('Images/start.png');
//     cursor = loadImage('Images/cursor.png');
// }
// function setup() {
//     createCanvas(500,500);
//     background(0)
//     //frameCount = 60
// }


// function draw() {

//     if (state == 1) {
//         image(court, 0, 0, 500, 500)
        
//         image(holding, 150, 250, 250, 200);
//         image(start, 200,100,150,100);
//     }
//     else if (state == 2) {
//         timer = 60;
//         fill(0);
//         textSize(22);
//         text(timer, 10, 10, 50, 50);
//         if (frameCount % 60 === 0 && timer != 0) {
//             timer --;
//         }
//         if (timer == 0) {
//             state =3;
//         }
//         background(0);
//         image(court1, -100, -35, 700, 570);
//         image(holding, 140, 300, 250, 200);
//         noStroke();
//         fill(255, 0, 0);
//         rect(60, 280, 100, 20);
//         fill(252, 90, 3);
//         rect(160,280, 50, 20);
//         fill(240, 200, 50);
//         rect(210, 280, 30, 20);
//         fill(0, 255, 0);
//         rect(240, 280, 15, 20);
//         fill(240, 200, 50);
//         rect(255, 280, 30, 20);
//         fill(252, 90, 3);
//         rect(285, 280, 50, 20);
//         fill(255, 0, 0);
//         rect(335, 280, 100, 20);
//         image(cursor, xPos, 290, 50, 50);
//         xPos = xPos +2*direction;
        
//         if (xPos > 410 || xPos < 35) {
//             direction*=-1;
//         }

        
//     }
//     else if (state == 3) {
//         background(0);
//         image(court1, -100, -35, 700, 570);
//         image(shooting, 140, 300, 250, 200);
//         noStroke();
//         fill(255, 0, 0);
//         rect(60, 280, 100, 20);
//         fill(252, 90, 3);
//         rect(160,280, 50, 20);
//         fill(240, 200, 50);
//         rect(210, 280, 30, 20);
//         fill(0, 255, 0);
//         rect(240, 280, 15, 20);
//         fill(240, 200, 50);
//         rect(255, 280, 30, 20);
//         fill(252, 90, 3);
//         rect(285, 280, 50, 20);
//         fill(255, 0, 0);
//         rect(335, 280, 100, 20);
//         image(cursor, xPos, 290, 50, 50);
//         xPos = xPos +2*direction;
        
//         if (xPos > 410 || xPos < 35) {
//             direction*=-1;
//         }

        
//         if (xPos > 0 && xPos < 500) {
//             while (yPos > 100) {
//                 image(ball, 200, yPos, 100, 100);
//                 yPos --;
//                 if (yPos == 101) {
//                     state = 2;
//                 }
//             }
//         }
//     }
// }

// function mouseClicked() {
//     if(state == 1) {
//         if(mouseX < 350 && mouseX > 200 && mouseY < 200 && mouseY > 100) {
//         state = 2;
//         }
//     }
//     if (state == 2) {
//         state = 3;
//     }
// }
let basketball;
let court;
let holding;
let shooting;
let music;
let start;
let court1;
let cursor;
let direction = 1;
let xPos = 35;
let timer;
let ballmovement;
let yPos = 300;
let state = 1;
let lives = 3;
let score = 0;
let speed = 2;

function preload() {
  ball = loadImage('Images/ball1.png');
  court = loadImage('Images/menu.png');
  court1 = loadImage('Images/basketball court.png');
  holding = loadImage('Images/manHoldingBall.png');
  shooting = loadImage('Images/manShooting.png');
  // music = loadSound('Sounds/Game Music.mp3');
  start = loadImage('Images/start.png');
  cursor = loadImage('Images/cursor.png');
}
function setup() {
  createCanvas(500, 500);
  background(0);
  frameRate(60);
  frameCount = 60
}

function draw() {
  if (state == 1) {
    image(court, 0, 0, 500, 500);

    image(holding, 150, 250, 250, 200);
    image(start, 200, 100, 150, 100);
  } else if (state == 2) {
    console.log(state);
    
    background(0);
    image(court1, -100, -35, 700, 570);
    image(holding, 140, 300, 250, 200);
    noStroke();
    fill(255, 0, 0);
    rect(60, 280, 80, 20);
    fill(252, 90, 3);
    rect(140, 280, 40, 20);
    fill(240, 200, 50);
    rect(180, 280, 40, 20);
    fill(0, 255, 0);
    rect(220, 280, 40, 20);
    fill(240, 200, 50);
    rect(250, 280, 45, 20);
    fill(252, 90, 3);
    rect(295, 280, 40, 20);
    fill(255, 0, 0);
    rect(335, 280, 100, 20);
    image(cursor, xPos, 290, 50, 50);
    xPos = xPos + speed * direction;
    fill(0);
    textSize(22);
    text('Lives '+lives, 25,30, 50);
    text('Score '+score, 435, 30, 50);
    
    
    if (xPos > 410 || xPos < 35) {
      direction *= -1;
      
    }

    if (keyIsDown(32)) {
      state = 3;
      speed += .2
    }
  } else if (state == 3) {
    if (xPos>=190 && xPos<=220) {
        score += .00862069;
    }
    if (xPos > 60 & xPos <190) {
        lives -= .00862069;
    }
    if (xPos>220 && xPos< 435) {
        lives -= .00862069;
    }
    
    console.log(state);
    background(0);
    image(court1, -100, -35, 700, 570);
    image(shooting, 140, 300, 250, 200);
    noStroke();
    fill(255, 0, 0);
    rect(60, 280, 80, 20);
    fill(252, 90, 3);
    rect(140, 280, 40, 20);
    fill(240, 200, 50);
    rect(180, 280, 40, 20);
    fill(0, 255, 0);
    rect(220, 280, 40, 20);
    fill(240, 200, 50);
    rect(250, 280, 45, 20);
    fill(252, 90, 3);
    rect(295, 280, 40, 20);
    fill(255, 0, 0);
    rect(335, 280, 100, 20);
    image(ball, xPos, yPos, 100, 100);
    yPos -= 2;
    fill(0);
    textSize(22);
    text('Lives '+lives, 25,30, 50);
    text('Score '+score, 435, 30, 50);
    if (lives <= 0) {
        state =4;
    }
   
    else if (yPos < 70) {
      yPos = 300;
      state = 2;
    }
  }
  else if (state == 4) {
    background(0);
    image(court1, -100, -35, 700, 570);
    image(holding, 140, 300, 250, 200);
    fill(0);
    textSize(40);
    text('Game ', 175, 250, 50, 50);
    text('Over!', 175, 300, 50, 50);
  }
  else {
    background(0);
    image(court1, -100, -35, 700, 570);
    image(holding, 140, 300, 250, 200);
    fill(0);
    textSize(40);
    text('You ', 175, 250, 50, 50);
    text('Won!', 175, 300, 50, 50);
  }
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

function mouseClicked() {
  if (state == 1) {
    if (mouseX < 350 && mouseX > 200 && mouseY < 200 && mouseY > 100) {
      state = 2;
    }
  }
  if(state == 4) {
    lives=3;
    score=0;
    speed = 2;
    state =1;
  }
  if(state==5) {
    lives=3;
    score=0;
    speed = 2;
    state = 1;
  }
  
}