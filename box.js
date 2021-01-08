class Box{

    constructor(x,y,width,height){

        var options ={
            restitution:0.8,
            density:1,
            friction:1
        }
        this.body= Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }


    display(){
        var pos= this.body.position;
        //push changes from this point
        push();
        //to translate the x and y position
        translate(pos.x,pos.y);
        //changes the angle of the rectangle
        rotate(this.body.angle);
        // changes the color
        fill ("pink");
        //uses x and y co-ordinates as the center of the rectangle
        rectMode(CENTER);
        //to create a rectangle
        rect(0,0,this.width,this.height);
        //pop out changes from this point
        pop();
    }

}