const addStrings=(nums1,nums2)=>{
   if(nums1 === 0 && nums2 === 0){
      return "0"
   }
   let resultadoFinal =[]
   let array1 = nums1
   let array2 = nums2
   array1 = array1.split("").map((valor) =>{return Number(valor)} );
   array2 = array2.split("").map((valor) =>{return Number(valor)} );
   if(array1.length > array2.length){
      while(array1.length > array2.length){
         array2.unshift(0)
   }
   }
   else if(array1.length < array2.length){
      while(array1.length < array2.length){
         array1.unshift(0)
   }
   }
   let resto;
   for(i = 1; i <= array1.length;i++){
      let suma = array1[array1.length - i] + array2[array2.length - i]
      if(resto === 1){
         suma +=resto
      }
      if(suma === 10 && array1.length === 1){
         return "10"
      }
      if(suma > 9){
         suma = suma.toString()
         resultadoFinal.unshift(suma[1])
         resto = 1

      }else if(suma < 10){
         suma = suma.toString()
         resultadoFinal.unshift(suma)
         resto = 0

      }
      if(i == array1.length && resto === 1){
         resultadoFinal.unshift(1)

      }
   }
   return resultadoFinal.join("")
}
addStrings("11","123")
addStrings("9","9")
addStrings("11","123")
addStrings("1","9")
addStrings("11","123")
addStrings("9333852702227987","85731737104263")


/*ASI LO ENTREGUE :)*/


/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(nums1, nums2) {

   let resultadoFinal =[]
   let array1 = nums1
   let array2 = nums2
   array1 = array1.split("").map((valor) =>{return Number(valor)} );
   array2 = array2.split("").map((valor) =>{return Number(valor)} );
   if(array1.length > array2.length){
      while(array1.length > array2.length){
         array2.unshift(0)
   }
   }
   else if(array1.length < array2.length){
      while(array1.length < array2.length){
         array1.unshift(0)
   }
   }
   let resto;
   for(i = 1; i <= array1.length;i++){
      let suma = array1[array1.length - i] + array2[array2.length - i]
      if(resto === 1){
         suma +=resto
      }
      if(suma === 10 && array1.length === 1){
         return "10"
      }
      if(suma > 9){
         suma = suma.toString()
         resultadoFinal.unshift(suma[1])
         resto = 1

      }else if(suma < 10){
         suma = suma.toString()
         resultadoFinal.unshift(suma)
         resto = 0

      }
      if(i == array1.length && resto === 1){
         resultadoFinal.unshift(1)

      }
   }
   return resultadoFinal.join("")
};

//forma corta
var addStrings = function(num1, num2) {
   return String(BigInt(num1)+ BigInt(num2));
};