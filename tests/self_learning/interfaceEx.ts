interface IsPerson {
    name: string;
    age: number;
    speak(a: string): string;
}

export const me: IsPerson = {
    name: 'Eran',
    age: 38,
    speak(text: string) {
        return text;
    }
}
const input2  = me.speak('sdadadadadaddddadadadd')
console.log(input2)