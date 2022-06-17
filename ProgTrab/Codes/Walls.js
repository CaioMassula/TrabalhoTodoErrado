class Walls{
    constructor(x, y, width, height){
        this.x =x;
        this.y =y;
        this.width =width;
        this.height =height;
        var staticBody={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,staticBody);
        World.add(world,this.body);
    }
          walls(){
          var wallPos = this.body.position;
          push();
          translate(wallPos.x,wallPos.y);
          rectMode(CENTER);
          rect(this.x,this.y,this.width,this.height);//500,300
          pop();
    }
}