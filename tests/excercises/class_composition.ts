class Class1{
  public  c1methodA(){
      return 'c1methodA'
    }
}
const eran = new Class1();

//console.log(eran.c1methodA());

class Class2{
    eran2;

    constructor(){
        this.eran2 = new Class1();
    }
    printObj(){
        return this.eran2.c1methodA();
    }
}
const tester = new Class2();

console.log(tester.printObj()+' triggered from class2');
///////////////////////////////////////////////////////////////
//part 2 :
//build independent feature classes - seperated much as possible 
class Walk {
    walk(){
        return 'walking'
    }
}

class Eat {
    eat(){
        return 'eating'
    }
}

class Sleep {
    sleep(){
        return'sleeping'

    }
}
//the animal type will use the feature classes :
class Dogs {
   private walkable:Walk
  // private eater:Eat
//  private  sleeper:Sleep
    constructor(){
        this.walkable = new Walk();

    }   
    getWalk(){
        return this.walkable.walk();
    }

}
const rex = new Dogs();
console.log(rex.getWalk());

