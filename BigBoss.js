const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
      {
        name: 'Клієнт 1',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків',
        partners: [
          {
            name: 'Клієнт 1.1',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
          },
          {
            name: 'Клієнт 1.2',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
              {
                name: 'Клієнт 1.2.3',
                type: 'subSubCompany',
                uses: 'Рішення для продажу квитків',
                sells: 'Рішення для продажу квитків',
              }
            ]
          }
        ]
      },
      {
        name: 'Клієнт 2',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків'
      }
    ]
  }; 
let Info = '';
function findValueByKey (t) {
    let x = '';
    for (let i in company) {
        if (typeof company[i] !== 'function' && typeof company[i] !== 'object') {
            if (company.name === t) {
                x = x + (i, ": ", company[i],  "\n");
            }
        } 
        
        if(typeof company[i] == 'object'){
            for(let j = 0; j < company[i].length; j++){
                    console.log(j, ': ', company[i][j])
                    console.log(typeof(company[i][j]));}
        }   
    }  
}

findValueByKey ('Велика Компанія'); 
console.log ("Клієнт 1")

