class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    
    this.trajectory=[];
    this.smoke = loadImage("sprites/smoke.png");

    
  }


  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    console.log(this.body.velocity.x);
    console.log(this.body.position.y)

    super.display();
    if(this.body.velocity.x>0 &&this.body.position.x>200){

    
   var position=[this.body.position.x,this.body.position.y];
   this.trajectory.push(position);  
    }
  for (var A =0 ;A< this.trajectory.length;A++){
    image(this.smoke,this.trajectory[A][0],this.trajectory[A][1])
  }
}
}