class rope{
    constructor(bodyA,pointB){
var options={
bodyA:bodyA,
pointB:pointB,
length:10,
stiffness:0.04,
}
this.pointB=pointB
this.body=Constraint.create(options)
World.add(world, this.body)

    }
    fly(){
        this.body.bodyA=null
    }
    display(){
push();
if(this.body.bodyA){
var pointA=this.body.bodyA.position
var pointB=this.pointB
strokeWeight(5);
line(pointA.x, pointA.y, pointB.x, pointB.y);
pop();
}


    }
}