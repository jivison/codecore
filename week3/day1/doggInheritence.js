class Doggo {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    bark() {
        console.log("I like fire trucks and monster trucks\nwalter");
    }

    sleep() {
        console.log("zzzzzzzzz");
    }

}

class DoggoFighter extends Doggo {
    constructor(name, age, specialPower) {
        super(name, age)
        this.specialPower = specialPower
    }
    
    useSpecial() {
        console.log(`${this.name} used ${this.specialPower}! It wasn't very effective...`);
    }
}






// function Doggo (name, age) {
//     this.name = name;
//     this.age = age;
// }

// Doggo.prototype.sleep = () => {
//    console.log("zzzz"); 
// }

// Doggo.prototype.bark = () => {
//     console.log("Bork"); 
//  }

// function DoggoFighter(name, age, specialPower) {
//     this.name = name;
//     this.age = age;
//     this.specialPower = specialPower
// }

// DoggoFighter.prototype.useSpecial = () => {
//     console.log(`${this.name} used ${this.specialPower}! It wasn't very effective...`);
// }

// Object.setPrototypeOf(DoggoFighter.prototype, Doggo.prototype);

// const walter = new Doggo("walter", 1)
// const milton = new DoggoFighter("milton", 10, "like jet planes and helicopters");