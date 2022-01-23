class sourceMgr{

    sourceList = [];
    plasticSource;

    constructor(numSource){
        this.firstPosX = 250;
        this.numSource = numSource;

        for (let i = 0; i<numSource; i++){
            this.sourceList[i] = new source(this.firstPosX+300*i,50)
        }     
        this.plasticSource=Math.floor(Math.random() * numSource);  
    }


    dropPlastic() {
        for (let i = 0; i<this.sourceList.length; i++){
            this.sourceList[i].draw();
        } 
        if (!this.sourceList[this.plasticSource].dropPlastic()){
            this.plasticSource=Math.floor(Math.random() * this.numSource); 
        }
    }
}