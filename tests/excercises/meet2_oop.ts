class Dog{
  private  furCoolor:String;
  private  height:number;

    constructor (furColor:string, height:number){
        this.furCoolor =furColor;
        this.height = height;

    }
    furCOlor(){
        return "The Dog's fur color is "+this.furCoolor;
    }
    dogHeighet(){
        return"The Dog's dog's height is "+(this.height+10)
    }
}

 const dog1 = new Dog('brown',50)
console.log(dog1.furCOlor())
console.log(dog1.dogHeighet())
