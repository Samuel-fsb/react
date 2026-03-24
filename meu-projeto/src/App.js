import CartaoProduto from "./componets/CartaoProduto";
import { useState } from 'react';

function App() {

  const [valor, SetValor] = useState(100);

  const DarDesconto = () => { SetValor(valor - 20) };

  return(
    <div>
      <CartaoProduto item={['chá', 'café', 'água']} nome={'Julia'} preco={valor} categoria={'Althete'} AplicarDesconto={DarDesconto}/>
    </div>
  );

};

export default App;
