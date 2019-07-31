// let i = 0;

// while (i < 100) {
//     console.log(i)
//     i += 2
// }


for (i = 100; i > 0; i--) {
    console.log(`${i} bottle${i === 1 ? '' : 's'} of beer on the wall, ${i} bottle${i === 1 ? '' : 's'} of beer.\n
    Take one down, pass it around, ${i-1} bottle${i - 1 === 1 ? '' : 's'} of beer on the wall.`)
}