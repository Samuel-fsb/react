import { useState } from "react";

export function App() {

  const [ContarMaisUm, SetCount] = useState(0); 

  return (
    <div>
      <button onClick={() => SetCount(ContarMaisUm + 1)}>
     { ContarMaisUm }
      
      </button>
    </div>
  )
}

