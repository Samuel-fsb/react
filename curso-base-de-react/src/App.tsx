import { useState } from 'react';

function App() {

  const [Count, SetCount] = useState(0)
  /* O 0 que colocamos como valor inicial dentro do useState vai parar dentro do Count que está no array 
  
  A função do SetCount é atualizar o valor do Count que está dentro do array.
  
  */

  return (
    <>
    <p>Hello World</p>

    <button onClick={() => SetCount(Count + 1)}>
    Count {Count}
    </button>
    </>
  )
}

export default App
