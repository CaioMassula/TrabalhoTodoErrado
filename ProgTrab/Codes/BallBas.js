class BallBas{
    constructor(x,y){
        var opt = {
            isStatic: true
        }
        this.speed = 0.05;
        this.body = Bodies.rectangle(x,y,30,30,opt);
        this.imageBall = loadImage("Imgs/Ball.png");
        World.add(world, this.body);
    }
    displayBall(){
        push()
        imageMode(CENTER);
        image(this.imageBall,60,270,20,20);
        pop()
    }

    shootBall(){
/*        var newAngle = trow.angle ; 
        newAngle = newAngle *(3.14/180) 
        var velocity = p5.Vector.fromAngle(newAngle); 
        velocity.mult(0.5);
         Matter.Body.setStatic(this.body, false); 
        Matter.Body.setVelocity(this.body, { x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)});
    */    
        Matter.Body.setStatic(this.body, false); 
        Matter.Body.setVelocity(this.body,{x: 20,y: -20});
    }

}