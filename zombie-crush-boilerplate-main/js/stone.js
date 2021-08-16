class Stone{

    constructor(a, b, c){
    
    var options = {
    
    isStatic: true
    }
    
    this.x = a;
    this.y = b;
    this.radius = c;
    
    this.body = Bodies.circle(a, b, c, options)
    World.add(world, this.body)
    }
    
    display(){
    
    var pos = this.body.position
    push()
    translate(pos.x, pos.y)
    fill("white")
    ellipseMode(CENTER)
    ellipse(0, 0, this.radius, this.radius)
    pop()
    }
    }