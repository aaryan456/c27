class Chain{
    constructor(bodyA,bodyB){
        var options = {
            length:34,stiffness:0.012,bodyA:bodyA,bodyB:bodyB
        }
       this.chain =  Matter.Constraint.create(options)
       World.add(world,this.chain)
    }
    display(){
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.bodyB.position
        strokeWeight(5)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }


} 