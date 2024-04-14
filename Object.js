
var book = {
    taitle : "Pollyanna",
    author : "Eleanor H. Porter",
    year : 1960,

getInfo : function() {
    for (let i in book) {
        if (typeof book[i] !== "function") {
            console.log(i + " : "  + book[i]);
}  
    }
}
} 
book.getInfo();
book.pages = 1050;
book.getInfo();

