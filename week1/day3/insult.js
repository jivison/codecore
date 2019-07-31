function insult(name) {
    const insults = ["#, you doofus", "#, you are stupid", "You suck #"];

    return insults[Math.floor(Math.random() * 3)].replace("#", name);
}
