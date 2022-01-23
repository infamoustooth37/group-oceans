class source{
  
    plasticY;

    constructor(xPos,yPos){
        this.xPos = xPos;
        this.yPos = yPos;
        this.plasticY=yPos;
        
    }


    draw () {
        ellipse(this.xPos,this.yPos,75,75);
    }

    dropPlastic() {
       if(this.plasticY < 700){
             ellipse(this.xPos,this.plasticY,50,50)
            this.plasticY += 2
            return true;
       } else {
        this.plasticY=this.yPos;
        return false;
    }
  } 
    
}