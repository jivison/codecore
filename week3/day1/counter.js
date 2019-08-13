const counter = {
    count: 0,
    tick:  1,
    inc() {
        this.count += this.tick;
        return this;
    },
    dec() {
        this.count -= this.tick;
        return this;
    },
    now() {
        return this.count;
    },
    setTick(n) {
        this.tick = n;
        return this;
    }
}