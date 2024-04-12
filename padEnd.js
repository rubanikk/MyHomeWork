
function pad (a,b,c,d){
    let z = '' 
    let l = a.length;
    if (c>l){
        for(i=1; i<=c-l; i++){
            z = String(z)+String(b);
        }
    } 
    if (d == true) {
            console.log(String(a) + String(z))
    } else {
            console.log(String(z) + String(a));
    }
}
 
pad('рядок','*', 6, true)