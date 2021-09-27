class Land {
    constructor(x,y){
        //this.width = 70;
        //this.height = 50;
        this.x = x;
        this.y = y;
    }

    showSquare(){
        push();
        strokeWeight(10);
        stroke("brown");
        fill("green");
        rectMode(CENTER);
        rect(this.x, this.y, 200, 150);
        pop();
    }
} 