//funciones anidadas
function Global() {
  const a = "hola ";

  function Local() {
    const b = "que tal";
    function LocalTwo() {
      const c = " bien?";
      return a + b + c;
    }
    return LocalTwo;
  }
  return Local;
}
Global()()();

//closures

function Num() {
  let _count = 0;

  function incrementar() {
    return _count++;
  }
  function decrementar() {
    return _count--;
  }
  function count() {
    return _count;
  }
  return {
    incrementar,
    decrementar,
    count,
  };
}
const miContador = Num();
miContador.incrementar();
miContador.decrementar();
miContador.count();
miContador.incrementar();
miContador.count();

//otra sintaxis
// const miContador = (function Num(){

//     let _count = 0;

//     function incrementar(){
//         return _count++
//     }
//     function decrementar(){
//         return _count--

//     }
//     function count(){
//         return _count
//     }
//     return{
//         incrementar,
//         decrementar,
//         count
//     }
// })()
// miContador.incrementar()
// miContador.decrementar()
// miContador.count()
// miContador.incrementar()
// miContador.count()
