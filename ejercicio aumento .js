const aumento=(logintud)=>{
  let item = [...Array(logintud)];
  item = item.fill(" ",0);
  let borrador = logintud-1;
  item.splice(borrador,1,"*");
  borrador--
  for(let i = 1;i<=logintud;i++){
    console.log(item.join(""));
    if(i >= 3){
      item.splice(borrador,1,"*");
      item.push("*");
      borrador--
    }else{
      item.splice(borrador,1,"*")
      borrador--
    }
  }
}
aumento(20)
