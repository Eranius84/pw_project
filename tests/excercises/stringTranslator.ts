enum LangugePrefix {
    EN = "en"
}

export class stringTranslator {
    private transaltedStringA: string;
    private transaltedStringB: string;
  
 
    constructor (stringToTransalteA: string,stringToTransalteB: string) {
      this.transaltedStringA = this.translate(stringToTransalteA, LangugePrefix.EN);
      this.transaltedStringB = this.translate(stringToTransalteB, LangugePrefix.EN);

    }
 
 
    translate(stringToTransalte: string, langugePrefix: LangugePrefix) {
      console.log("translated the string! to" + langugePrefix)
      return stringToTransalte;
    }
 
 
    get translatedA() {
     return this.transaltedStringA;
    

    }
    get translatedB() {
        return this.transaltedStringB;
    }
 }