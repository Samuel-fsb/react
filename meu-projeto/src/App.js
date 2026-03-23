import CartaoProduto from "./componets/CartaoProduto";


function App() {

  return(
    <div>
      <CartaoProduto item={['chá', 'café', 'água']} nome={'Julia'} preco={34} categoria={'Althete'}/>
    </div>
  );

};

export default App;
