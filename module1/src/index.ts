{
    // oop class
    // Without public
    class Desh {
        name: string;
        specialization: string;
        speechExample: string;

        constructor(name: string, specialization: string, speechExample: string) {
            this.name = name;
            this.specialization = specialization;
            this.speechExample = speechExample
        }
    }

    const chittagongDesh = new Desh('Chittagong', 'Coxs Bazar', 'o bodda')
    const barisalDesh = new Desh('Barisal', 'Kuakata', 'monu dalu lobon deso na deba')




    // With public
    class Desh1 {
        constructor(public name: string, public specialization: string, public speechExample: string) {
        }
    }
    const noakhaliDesh = new Desh('Noakhali', 'Sondip', 'hani')
    console.log(noakhaliDesh.speechExample);



    //
}