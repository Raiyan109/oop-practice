{
    // 
    class Crime {
        constructor(public name: string) { }

        affection(affect: string) {
            console.log(`${this.name} will result to ${affect}`);
        }
    }

    class Arms extends Crime {

    }



    class Drugs extends Crime {
        constructor(public name: string, public price: string) {
            super(name)
        }

        affection(affect: string) {
            console.log(`${this.name} will result to ${affect} and price is ${this.price}`);
        }
    }

    const ak47 = new Arms('AK-47')
    const sword = new Arms('Sword')

    const heroin = new Drugs('Heroin', '1000')
    ak47.affection('Jail')

    // 
}