function Counter(tick) {
    this.count = 0;
    this.tick = tick;
}

Counter.prototype.inc = () => {
    this.count += this.tick;
    return this;
}
Counter.prototype.dec = () => {
    this.count += this.tick;
    return this;
}
Counter.prototype.setTick = (newTick) => {
    this.tick = newTick;
}