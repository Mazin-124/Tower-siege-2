class Slingshot{
    constructor(body1,point2){
        var options={
            bodyA:body1 , 
            pointB:point2,
            stiffness:0.04,
            length:10
        }
        this.pointB = point2
        this.sling = Constraint.create(options);
        World.add(world,this.sling)
    }
    attach(body){
        this.sling.bodyA = body;
    }
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        var pointA=this.sling.bodyA.position
        var pointB=this.pointB
        push();
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop();
    }
}