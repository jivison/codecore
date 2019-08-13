const { exec } = require('child_process');

// defining a constructor function
function Dog(name, age, image) {
  this.name = name;
  this.age = age;
  this.image = image;
}

// Add the bark method to the prootype of Dog
// All instances of the Dog constructor now have a reference to this bark method through the protype chain
Dog.prototype.bark = () => {
  console.log("Bark");
};

Dog.prototype.sleep = () => {
  console.log("Zzzzzzz");
};

Dog.prototype.showImage = (image) => {
    exec(`tiv ${image}`, (err, stdout, stderr) => {
        if (err) {
          console.log(err);
        }
        // the *entire* stdout and stderr (buffered)
        console.log(stdout);
      //   console.log(`stderr: ${stderr}`);
      });
};

let walter = new Dog("walter", 1, "henry.jpg");
// let milton = new Dog("milton", 0);

console.log(walter.showImage(walter.image));
