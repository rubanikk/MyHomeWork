const text = "Cat ananas setting Apples pingpong";
const pattern = /(?:[^Aa\s]\w{6,})/g;
const result = text.match(pattern);
console.log(result); 



