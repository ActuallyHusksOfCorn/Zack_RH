var sketch2 = function(p){

    p.setup = function() {
        p.createCanvas(500, 200); 
   
    };

    p.draw = function() { 
     
        p.fill(0); 
        p.background(255);
        p.textSize(32);
        
        p.textLeading((p.mouseX / p.width) * 80);
        p.text("It was the best of times. Such good times.",
          100, 100, 200, 200); 
    };
};

var myp5 = new p5(sketch2, 'sketch2');