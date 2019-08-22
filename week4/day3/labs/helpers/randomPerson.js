function randomPerson(csv) {
    let personArray = csv.split(",");
    return personArray[Math.floor(Math.random()*personArray.length)];

}

module.exports = randomPerson;
