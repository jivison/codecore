class Cipher {
    constructor(set1, set2) {
        this.set1 = set1.split("");
        this.set2 = set2.split("");
    }

    encode(str, key=this.set1, map=this.set2) {
        return str.split("").map((char) => {
            return key.includes(char) ? map[key.indexOf(char)] : char;
        }).join("");
    }
    
    decode(str) {
        return this.encode(str, this.set2, this.set1);
    }
}

let abc1 = "abcdefghijklmnopqrstuvwxyz";
let abc2 = "etaoinshrdlucmfwypvbgkjqxz";

let ciph = new Cipher(abc1, abc2);

console.log(ciph.encode("abc")); // => "eta"
console.log(ciph.encode("xyz")); // => "qxz"
console.log(ciph.encode("aeiou")); // => "eirfg"
console.log(ciph.decode("eta")); // => "abc"
console.log(ciph.decode("qxz")); // => "xyz"
console.log(ciph.decode("eirfg")); // => "aeiou"
