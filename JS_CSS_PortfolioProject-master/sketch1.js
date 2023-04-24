var sketch1 = function(p){

    p.sourceText = "Life is short and art long";

    p.setup = function() {
        p.createCanvas(500, 50); 
        p.frameRate(10);
    };

    p.draw = function() { 

        p.fill(0); 
        p.background(255);
        p.textSize(32);
        p.textAlign(p.CENTER, p.CENTER);
        p.middle = p.sourceText.length / 2;
        p.left = p.middle - ((p.mouseX / p.width) * p.middle);
        p.right = p.middle + ((p.mouseX / p.width) * p.middle);
        p.text(
       p.sourceText.substring(p.left, p.right+1),
        p.width/2, p.height/2);

    };
};

var myp5 = new p5(sketch1, 'sketch1');
