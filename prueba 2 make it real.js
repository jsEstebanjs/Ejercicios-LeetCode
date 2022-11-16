// // Adultos

// // Escribe una función llamada `adultos` que reciba un arreglo de números (que representan edades) y retorne `true` si todos son adultos, o `false` de lo contrario. Un adulto tiene 18 o más pero menos de 70.


const adultos = (edades)=>{
    let edades2 = [...edades]
    edades = edades.filter(valor=>{
        if(valor>=18 && valor<70){
            return valor
        }
    }) 
    return edades
}

adultos([28, 45, 19, 21, 18, 69]) //-> true
adultos([28, 45, 17, 21, 17, 70]) //-> false
adultos([28, 45, 71, 21]) //-> false



const recipe = {
    name: "",
    ingredients: [
      { name: "Pan", quantity: 2 },
      { name: "Jamón", quantity: 1 },
      { name: "Queso", quantity: 1 },
    ]
  }
console.log(recipe.ingredients[1].name)



// Average Price

// Write a function called `averagePrice` that receives an array of products as an argument and returns the average price of all products:

 const products1 = [ 
      { name: "rice", price: 10 }, 
      { name: "panela", price: 5 }, 
      { name: "pasta", price: 16 }, 
      { name: "eggs", price: 9 },
    ];
    
    const products2 = [ 
      { name: "rice", price: 10 }, 
      { name: "panela", price: 20 }, 
      { name: "pasta", price: 13 }, 
      { name: "eggs", price: 37 },
      { name: "potatos", price: 5 },
    ];

const averagePrice = (array)=>{
    let conteo = []
    for(i=0;i<array.length;i++){
        let price = array[i].price
        conteo.push(price)
    }
    let conteo2 = [...conteo]
   conteo = conteo.reduce((a,b)=>{
        return a+b
    })
    return conteo / conteo2.length
}

averagePrice(products1); // 10
averagePrice(products2); // 17