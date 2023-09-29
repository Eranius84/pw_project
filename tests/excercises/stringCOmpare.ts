import { StringNormalizer } from "./stringNormalizer_temp";

class StringCompare {
    private normalizer: StringNormalizer;
    private strA:string;
    private strB:string;

    constructor(strA:string,strB:string){
       this.normalizer = new StringNormalizer(strA, strB);
       this.strA = this.normalizer.strAValue;
       this.strB= this.normalizer.strBValue;
    }

    private lengthCompare(): boolean {
        // Implement length comparison logic here
        return this.strA.length!==this.strB.length;
    }
}