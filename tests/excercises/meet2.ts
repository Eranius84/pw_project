//basic methods
const a:string= 'dsf';
const b:string= 'dsf';
console.log(a+b)
console.log(a.length)
console.log(a[0])
console.log(a.substring(1,2))
a.startsWith('d')
a.indexOf('d')

function compareStrings (a:string, b:string){
    //step 1: if length!= , print not equal 
    //if lngth identical , compare strings after preparation 
    //comrare content
    if(a.length!==b.length){
        console.log("string length not equal ")
    }
    if(a.toLowerCase()===b.toLowerCase()){
        console.log("succces , strings are eual")

     }
     else{

        console.log("failed , strings not equal ")
     }

    }
    compareStrings('eran1','Eran ')

    //להפוך למתודה בתוך הקלאס , 


//
