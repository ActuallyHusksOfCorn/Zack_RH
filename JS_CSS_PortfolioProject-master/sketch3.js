var sketch2 = function(p){

    p.x = 1;
    p.y = 1;
    p.easing = 0.05;

    p.setup = function() {
        p.createCanvas(500, 200); 
   
    };

    p.draw = function() { 
     
        p.fill(0); 
        p.background(255);

        p.targetX = p.mouseX;
        p.dx = p.targetX - p.x;
        p.x += p.dx * p.easing;

        p.targetY = p.mouseY;
        p.dy = p.targetY - p.y;
        p.y += p.dy * p.easing;

        p.textSize(32);
        
        p.text("It was the best of times. Such good times.",
        p.x, p.y, 200, 200);

        if (p.mouseIsPressed) {
        p.noFill();
        p.stroke(0, 0, 0, 255);
        p.rect(p.x, p.y, 200, 200);
        }
    };
};

var myp5 = new p5(sketch2, 'sketch2');