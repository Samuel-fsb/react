import './App.css';
import Lista2 from './componets/Lista2'

function App() {

  const MeusItens = ['React', 'Vue', 'Angular']


  return(
    <div className='App'>
      <h2>Renderização de Listas</h2>
      <Lista2 itens={MeusItens}/>
    </div>
  );

};

export default App;
