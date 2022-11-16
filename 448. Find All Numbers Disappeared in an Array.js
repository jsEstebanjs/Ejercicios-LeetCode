const findDisappearedNumbers = (nums)=>{
    let resultado = [];
    nums.sort((valor1,valor2)=> valor1 - valor2)
    if(nums[nums.length- 1] !== nums.length){
        resultado.push(nums.length)
    }
    for(i = nums[0]; i < nums.length;i++){
      if(!nums.includes(i)){
        resultado.push(i)
      }
    }
    return resultado
}

findDisappearedNumbers([1,1,2,2])
findDisappearedNumbers([2,2])

findDisappearedNumbers([1,1])
findDisappearedNumbers([4,3,2,7,8,2,3,1])

/*lO ENTREGUE PERO TENIA 9S DE TIEMPO DE ENTREGA TOCA BAJARLO*/



