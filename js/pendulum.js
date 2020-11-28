class Pendulum {
    constructor(x, y, color){
        var options = {
            restitution: 1,
            friction: 0,
            frictionAir: 0.0,
            slop: 1,
            isStatic: false,
            inertia: Infinity 
        };
        this.body = Bodies.circle(x, y, 40, options);
        this.x = x;
        this.y = y;
        this.r = 40
        this.color = color;
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(2.5);
        stroke("grey")
        fill(this.color);
        ellipse(0, 0, this.r, this.r);
        pop();
    }
}