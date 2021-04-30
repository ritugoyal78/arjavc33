class Bird {
    constructor(x,y,width,height){
        var options = {
        isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image = loadImage("bird.jpg");
        this.visibility=255;
       
    }
  
    display(){
        console.log(gameState)
        if(gameState===0){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        }
        else{ 
            
            push();
            this.visibility=this.visibility-5;
            tint(255,this.visibility)
            image(this.image,this.body.position.x,this.body.position.y,100,100);
            pop();
 
             

        }
    }

   collide(){
          World.remove(world,this.body);
          //console.log(this.body.speed)
   }
  

       
}