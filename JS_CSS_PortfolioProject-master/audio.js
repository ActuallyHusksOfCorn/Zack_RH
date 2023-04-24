
let speech;
let said;
let inconsolata;
let waves = [];

// function setup() {
//   createCanvas(displayWidth, displayHeight);
//   inconsolata = loadFont('assets/inconsolata.otf');
//   textFont(inconsolata);




  function setup() {
    let canvas;
    if (windowWidth > 1200) {
        canvas = createCanvas(windowWidth, 630);
    } else if (windowWidth > 900) {
        canvas = createCanvas(1200, 394);
      } else {
            canvasWidth = windowWidth;
            canvasHeight = windowWidth;
          } 
    canvas.parent('header');



// Testing-


// Create a prompt, have the prompt vanish after acceptance, create a toggle switch for the header.




// Testing

  // Create 10 wave objects
  for (let i = 0; i < 10; i++) {
    waves.push(new Wave());
  }

  // Create a Speech Recognition object with callback
  speechRec = new p5.SpeechRec('en-US', gotSpeech);
  // "Continuous recognition" (as opposed to one time only)
  let continuous = true;
  // If you want to try partial recognition (faster, less accurate)
  let interimResults = true;
  // This must come after setting the properties
  speechRec.start(continuous, interimResults);
}

function draw() {
  background(0);

  // Move and display wave objects
  for (let i = 0; i < waves.length; i++) {
    waves[i].move();
    waves[i].display();
  }

  // Show the spoken text using these text parameters
  if (said) {
    textSize(100);
    fill(255);
    textAlign(CENTER);
    text(said, width/2, height/2);
  }
}

function gotSpeech() {
  // Check if something is there, get it as a string
  if (speechRec.resultValue) {
    said = speechRec.resultString;
  }
}

// Define a Wave object
class Wave {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.theta = 0;
  }

  move() {
    this.theta += 0.05;
  }

  display() {
    noFill();
    strokeWeight(2);
    stroke(255);
    beginShape();
    for (let i = -50; i <= width+50; i += 10) {
      let y = this.y + sin(this.theta + map(i, 0, width, 0, TWO_PI)) * 50;
      vertex(i, y);
    }
    endShape();
  }
}

// let speech;
// let said;
// let inconsolata;
// let waves = [];

// function setup() {
//   let canvasWidth, canvasHeight;

//   if (windowWidth > 1200) {
//     canvasWidth = windowWidth;
//     canvasHeight = windowWidth * 0.33;
//   } else if (windowWidth > 900) {
//     canvasWidth = windowWidth;
//     canvasHeight = windowWidth * 0.328;
//   } else {
//     canvasWidth = windowWidth;
//     canvasHeight = windowWidth * 0.328;
//   }

//   const canvas = createCanvas(canvasWidth, canvasHeight);
//   canvas.parent('header');

//   inconsolata = loadFont('assets/inconsolata.otf');
//   textFont(inconsolata);

//   // Create 10 wave objects
//   for (let i = 0; i < 10; i++) {
//     waves.push(new Wave());
//   }

//   // Create a Speech Recognition object with callback
//   speechRec = new p5.SpeechRec('en-US', gotSpeech);
//   // "Continuous recognition" (as opposed to one time only)
//   let continuous = true;
//   // If you want to try partial recognition (faster, less accurate)
//   let interimResults = true;
//   // This must come after setting the properties
//   speechRec.start(continuous, interimResults);
// }

// function draw() {
//   background(0);

//   // Move and display wave objects
//   for (let i = 0; i < waves.length; i++) {
//     waves[i].move();
//     waves[i].display();
//   }

//   // Show the spoken text using these text parameters
//   if (said) {
//     textSize(canvasWidth / 10);
//     fill(255);
//     textAlign(CENTER);
//     text(said, canvasWidth/2, canvasHeight/2);
//   }
// }

// function gotSpeech() {
//   // Check if something is there, get it as a string
//   if (speechRec.resultValue) {
//     said = speechRec.resultString;
//   }
// }

// // Define a Wave object
// class Wave {
//   constructor() {
//     this.x = random(width);
//     this.y = random(height);
//     this.theta = 0;
//   }

//   move() {
//     this.theta += 0.05;
//   }

//   display() {
//     noFill();
//     strokeWeight(2);
//     stroke(255);
//     beginShape();
//     for (let i = -50; i <= width+50; i += 10) {
//       let y = this.y + sin(this.theta + map(i, 0, width, 0, TWO_PI)) * (canvasHeight / 13);
//       vertex(i, y);
//     }
//     endShape();
//   }
// }
