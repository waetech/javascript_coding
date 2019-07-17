//Arrow function =>
function setup(){
    noCanvas();
    console.log(this);
    const counter1 = new counter1(100, 500);
    counter1.start();
    const counter2 = new counter2(200, 900);
    counter2.start();
    const counter3 = new counter3(150, 1000);
    counter3.start();

}

class Counter {
    constructor(start, wait) {
        this.count = start;
        this.wait = wait;
        this.p = createP('');
   
    }
    start(){
        setInterval(() => {
            this.countIt();
            
        }, wait);
    }
        
    countIt(){
        this.count++;
        this.p.html(this.count);
    }

}