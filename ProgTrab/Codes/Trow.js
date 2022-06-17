class Trow{
    constructor(x, y, width, height, angle) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.baseImg = loadImage("Imgs/Base.png");
        this.trowImg = loadImage("Imgs/Throw.png");
      }
    display() {
        if (keyIsDown(DOWN_ARROW) && this.angle<-35){
            this.angle += 1;
            }
        if (keyIsDown(UP_ARROW) && this.angle>-75){
            this.angle -= 1;
            }

        push();
        translate(this.x, this.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.trowImg, -5, -2.5, 45, 17.5);
        pop();
        image(this.baseImg, 20, 257.5, 60, 40);
        noFill();
    }
}