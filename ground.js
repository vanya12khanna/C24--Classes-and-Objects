class Ground{
    // All the properties are given inside the constructor
    //Every class should have a constructor method
    constructor(x,y,w,h){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
        this.w = w;
        this.h = h;
    }

    display(){
        rectMode(CENTER);
        // console.log(w);
        // console.log(h);
        strokeWeight(4);
        stroke("green");
        fill("brown")
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
    }

       



}