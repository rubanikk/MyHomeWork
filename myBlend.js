let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function myBlend(array) {
    for (let i = 0; i <= 8; i++) {
      let j = Math.floor(Math.random() * (i + 1));
      let t = array[i]; 
      array[i] = array[j]; 
      array[j] = t;
    }
  }

console.log(arr);
myBlend(arr);
console.log(arr);


