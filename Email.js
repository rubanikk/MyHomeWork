var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

var pattern = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)?@(?:gmail|yahoo)\.com$/;
var result = [];
for (var i = 0; i < arr.length; i++) {
    if (pattern.test(arr[i].email)) {
        result.push(arr[i]);
    }
}
console.log(result);