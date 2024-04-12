
function MyIsNan(a, b) {
    if (a - b === a - b) {
        console.log("false. This is number =", a - b);
    } else {
        console.log("true. This is NaN =", a - b);
    }
}

MyIsNan("10h","5");



