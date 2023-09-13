class Workers {
    name: string;
    age: number;
    proffesion: string;
    currentWorker:boolean; 

//create constructor for Workers class
    constructor(n:string,ag:number,pr:string,cur:boolean){
        this.name = n;
        this.age = ag;
        this.proffesion = pr;
        this.currentWorker = cur;


    }
}
//create instance (new object) of class Workers 
const worker1 = new Workers('Eran',38,'QA',false);
console.log(worker1.name);

//method to control data so that only "workers " objects can be inserted to the  created array .
const myEmployees:Workers[]= [];
//push the correct object to the array 
myEmployees.push(worker1);
//now we can access worker1 properties directly , in this ccase 'age'
console.log(myEmployees[0].age)
