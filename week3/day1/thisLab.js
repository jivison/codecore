

function whatIsThis() {
    console.log(this);
}

const can = {
    touchThis() {
        console.log(this);
    },
    cantTouchThis() {
        function a() {
            console.log(this);
        }
        a();
    }
}

// can.cantTouchThis();