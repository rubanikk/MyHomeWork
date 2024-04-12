var age = prompt ("Введіть свій вік");
if (age<0){
    alert("Ви ввели від'ємне число");
} else if (String(age-1) == "NaN"){
    alert ("Введіть число");
} else {
    if (age%100>=5 && age%100<=20){
        alert("Вам "+age+" років");
    } else if (age%10 == 1 ){
        alert("Вам "+age+" рік");
    } else {
        alert("Вам "+age+" роки");
    }
}

