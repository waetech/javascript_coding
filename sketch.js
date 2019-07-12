var x = 0;
var timer1;
var timer2;
var counter = 0;

function setup(){
    createCanvas(640, 480);
    timer1 = createP('timer 1');
    timer2 = createP('timer2');

    makeTImer(timer1, 500);
    makeTImer(timer2, 300);

   
}

function makeTImer(elt, wait){
    var counter = 0;
    setInterval(timeIt, wait);

    function timeIt(){
        timer1.html(counter);
        timer2.html(counter);
        counter++;
    }

}



function draw(){
    ellipse(50, 50, 80, 80);
}