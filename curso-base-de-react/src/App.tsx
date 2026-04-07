import { useState } from "react";

export function App() {

  const [Contar, SetCount] = useState(0); 
  const [Hide, SetHide] = useState(false); 
  return (
    <div>

      {Hide && <p>Teste 1</p>}
      {!Hide && <p>Teste 2</p>} 

      {Hide ? <p>Teste 1</p> : <p>Teste 2</p>}

      <button onClick={() => SetCount(Contar+ 1)}>
      {Contar}
      </button>

      <button onClick={() => SetHide(!Hide)}>
      Toggle
      </button> 
    </div> //Usei a exclamação para negar uma variável.
  )
}

