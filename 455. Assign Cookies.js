
let conteo = 0;
let guia = 0;
g.sort((a,b)=>a-b);
s.sort((a,b)=>a-b);
for(let galleta of s){
   if(galleta >= g[guia]){
       conteo++
       guia++
   }
}
return conteo


