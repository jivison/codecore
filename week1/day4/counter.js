const Counter = {
    count: 0,
    step: 1,

    set(val) {
        this.count = val;
        return this;
    },

    repeat(fn, iter) {
        return [...Array(iter).keys()].forEach(() => {fn()});
    },

    inc(iter = 1) {
        this.repeat(() => {this.count += this.step}, iter);
        return this;
    },

    dec(iter = 1) {
        this.repeat(() => {this.count -= this.step}, iter);
        return this;
    },

    now() {
        return this.count;
    },

    setStep(step) {
        this.step = step;
        return this;
    },

    random(iter = 1) {
        this.repeat(() => {(Math.random() >= 0.5) ? this.inc() : this.dec;});
        return this;
    }
};


console.log(Counter.random(50).setStep(4).random(31).setStep(Math.random() * 10).random(30).inc(100).now());