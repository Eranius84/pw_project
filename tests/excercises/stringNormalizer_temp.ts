import { stringTranslator } from "./stringTranslator";

export class StringNormalizer {
 private translator:stringTranslator;
  private strA: string;
  private strB: string;

  constructor(strA: string, strB: string) {
    this.translator = new stringTranslator(strA,strB);
    this.strA = this.normalize(this.translator.translatedA);
    this.strB = this.normalize(this.translator.translatedB);
   
  }

  private normalize(strang: string) {
    return strang.trim().toLowerCase();
  }

  get strAValue(): string {
    return this.strA;
  }

  get strBValue(): string {
    return this.strB;
  }
}

