class Computer {
    constructor(x, y, width, height) {
      var options = {
        isStatic: true
      };
      this.body = Bodies.rectangle(x,y,width,options);
      this.height = height;
      this.width = width;
      this.image = loadImage("./assets/player.png");
      World.add(world,this.body)
    
    }
    display() {
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      
      rectMode(CENTER);
      image(this.image, 950, 240, 40, 70);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }