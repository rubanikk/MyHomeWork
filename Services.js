const services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    price: function() {
        let sum = 0;
        for(let i in services){
            if (typeof services[i] !== "function"){
                sum = sum + Number.parseInt(services[i]);
            }
        }
        console.log("Загальна сума наданих послуг: " + sum + "грн");
    },
    minPrice: function() {
        let min = -1;
        for(let i in services){
            if (typeof services[i] !== "function"){
                if (min < 0){
                    min = Number.parseInt(services[i]);
                }
                if (min > Number.parseInt(services[i])){
                    min = Number.parseInt(services[i]);
                }
            }
        }
        console.log("Мінімальна вартість послуг: " + min + "грн");
    },
    maxPrice: function() {
        let max = -1;
        for(let i in services){
            if (typeof services[i] !== "function"){
                if (max < 0){
                    max = Number.parseInt(services[i]);
                }
                if (max < Number.parseInt(services[i])){
                    max = Number.parseInt(services[i]);
                }
            }
        }
        console.log("Максимальна вартість послуг: " + max+ "грн");
    }
}

services.price();
services.minPrice();
services.maxPrice();

services['Розбити скло'] = "200 грн";

services.price();
services.minPrice();
services.maxPrice();
