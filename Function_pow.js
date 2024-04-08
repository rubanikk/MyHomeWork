function pow (num, degree) {
    let a = 1
    let b = degree
    for (let i = 1; i <= b; i++){
        a = a * num
    }
    console.log ("Число", num, "в ступіні", b, "=", a, )
}
pow (4,3)

