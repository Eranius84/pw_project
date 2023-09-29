class StringCompare {
    private strA:string;
    private strB:string;

    constructor(actual:string,expected:string){
       this.strA=actual
       this.strB=expected  
    }
   

    
    //Compare Strings Ignoring Case
    compareIgnoreCase() {
        if(!this.lengthCompare()){
            return 'lengthCompare method failed '
        }
        // Implement case-insensitive comparison logic here
        const  str1 = this.str1.trim().toLowerCase();
        const str2 =  this.str2.trim().toLowerCase();
        const equalValues = str1===str2
        console.log(equalValues)
        if(!equalValues){
                return 'Compared strings content is not equal '
        }
            else{
                return 'Strings content is equal'
            }
    }  
    
  // Compare Strings (Perfect Match, Case-Sensitive)
    compareExact() {
        // Implement exact case-sensitive comparison logic here
 
    }
    
   // Partial Comparison (String A is Inside String B)
    partialCompare() {
        // Implement partial comparison logic here
        const str1 = this.strA;
        const str2 = this.strB;
        return str2.includes(str1)
    }

deepCompare() {
    // Implement deep comparison logic here
    }
}

const comptest  = new StringCompare("eran","eran989")
     //   console.log(comptest.lengthCompare())

console.log(comptest.compareIgnoreCase())
// console.log(comptest.compareExact())
 console.log(comptest.partialCompare())
// console.log(comptest.deepCompare())
}