class PlayerBase {
    constructor(x, y, width, height) {
      var options = {
        isStatic: true
      };
      this.body = Bodies.rectangle(x,y,width,options);
      this.height = height;
      this.width = width;
      this.image = loadImage("./assets/base1.png");
      World.add(world,this.body)
    
    }
    display() {
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      
      rectMode(CENTER);
      image(this.image, 250, 300, 120, 100);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }