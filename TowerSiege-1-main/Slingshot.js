class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
      
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
 
    fly(){
        this.sling.bodyA = null;
    }
 
    display(){ push()

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
           
            stroke("black");
          
            strokeWeight(7);
            line(pointA.x, pointA.y, pointB.x-15, pointB.y);
            line(pointA.x, pointA.y, pointB.x+20, pointB.y);
            
            

            
            pop()
        }
    }
    
}

  