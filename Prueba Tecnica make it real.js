// ¡Muy bien! La prueba técnica se compone de 3 ejercicios que deberás resolver en JavaScript. Tienes hasta una semana después de que se cierren las aplicaciones al programa para entregarla.

// Nota: Para volver a esta página puedes utilizar el vínculo que te llegó en el correo.

// 1. Calcula los impuestos
// Escribe una función llamada calcularImpuestos que reciba dos argumentos numéricos: edad e ingresos. Si edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos * 40%. De lo contrario retorna 0.

const calcularImpuestos = (edad,ingresos)=>{

    if(edad >= 18 && ingresos >= 1000){
        return (ingresos * 40) / 100
    }else{
        return 0
    }
}

calcularImpuestos(18, 1000) 
calcularImpuestos(40, 10000) 
calcularImpuestos(17, 5000)


// 2. Cuenta los asteriscos
// Escribe una función llamada asteriscos que reciba un string str y retorne el número de asteriscos que hay en str.

const asteriscos = (str)=>{
str = [...str]
str = str.filter((valor)=>{
    if(valor === "*"){
        return valor
    }
})
return str.length
}
asteriscos("H*o*l*a") 
asteriscos("Hola")
asteriscos("olaolaola*")
asteriscos("")

// 3. Duplica cada elemento
// Escribe una función llamada duplicar que reciba un arreglo de números como parámetro y retorne un nuevo arreglo con cada elemento duplicado (multiplicado por dos).

const duplicar =(numeros)=>{
let numeros2 = []

numeros.forEach(element => {
    element = element * 2
    numeros2.push(element)
});

return numeros2

}
duplicar([120,300,450,678])
duplicar([1,1,1,1])
duplicar([3, 12, 45, 7])
duplicar([8, 5])