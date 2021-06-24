class Log {
    constructor(x,y,width,height,angle){
        var options = {
            restitution: 0.8,
            friction: 1,
            density: 1
        }
        this.body = Bodies.rectangle(x,y,100,20,options);
        this.height = 20;
        this.width = 100;
        Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke ("green");
        fill ("white");
        rect(0,0,this.width,this.height);  
        pop();
    }
}