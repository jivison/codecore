const Dog = {
    name: "Gabe",
    age: 38,
    bark() {
        console.log("Bork");
    },
    sleep() {
        console.log("Zzzzzzz");
    },
    speak() {
        console.log(this);
    }
}
