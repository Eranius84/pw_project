class StringNormalizer{
private str1: string;
private str2: string;
constructor(actual:string,expected:string){
    this.str1=actual
    this.str2=expected  
 }
 private lengthCompare():boolean {
    // Implement length comparison logic here
    const aTrim = this.str1.trim() ;
    const  bTrim = this.str2.trim();
    if(aTrim.length!==bTrim.length){
       console.log(`failed , strings length is unequal :Expected length is ${aTrim.length}, but got ${bTrim.length}`)
        return false; 
    }
    else{
        console.log('strings are equal')
        return true ; 
         }

    }
   
}