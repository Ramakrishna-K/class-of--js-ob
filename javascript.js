class car{
    constructor(name, maker, engine){
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }
    getDetails(){
        return(`The name of the bike is: ${this.name} ,
            maker of the engine is:${this.maker},
             engine of the cc is: ${this.engine}.`)
    }
}
let bike1= new car('hayabusa',"suauki",'1233cc')
let bike2 = new car('pulsar',"bajaj","250cc")
// console.log(bike1.name)
// console.log(bike1.maker)

console.log(bike1.getDetails())
console.log(bike2.getDetails())