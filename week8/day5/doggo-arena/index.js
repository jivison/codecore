// toxicTim = document.querySelector("#toxic-tim");

// toxicTim.addEventListener("click", () => {
//     console.log("Toxic tim was clicked...");
// })

// document.addEventListener("click", () => {
//     console.log("Document was clicked..");
// })

document.querySelectorAll(".roster").forEach(roster => {
    roster.addEventListener("click", function(e) {
        e.currentTarget.appendChild(e.target.closest(".doggo"));
    });
});

// Test if something is a DOM node
document instanceof Node; // Return true
"string" instanceof Node; // Return false

// FORM EVENTS

// input
const random = n => Math.ceil(Math.random() * n);
// const keySound = () => new Audio(`sounds/small-explosion.wav`);
// const keySound = () => new Audio(`sounds/vintage-keyboard-${random(5)}.wav`);
soundArray = ["AUGH.wav", "Mc Ride sees a moth.wav", "YUH.wav"]
const keySound = () => new Audio(`sounds/${soundArray[Math.floor(Math.random()*soundArray.length)]}`);

document.querySelectorAll('input').forEach( node => {
  node.addEventListener('input', event => {
    keySound().play();
  })
});


document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
})

document.querySelector('#picture-url').addEventListener('change', (e) => {
    document.querySelector('.doggo.blank').style.background = `url(${e.target.value})`
    document.querySelector('.doggo.blank').style.backgroundSize = `cover`
})

document.addEventListener('keydown', (e) => {
    const KEY_X = 88;
    const {key, keyCode, altKey, ctrlKey} = event;
    console.log(key);
    if (keyCode === KEY_X && altKey && ctrlKey) {
        window.location.href = 'https://en.wikipedia.org/wiki/Nice'
    }
})