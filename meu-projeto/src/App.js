import './App.css';
import Condicional from './componets/Condicional';
import Evento from './componets/Evento';
import Form from './componets/Form';
import Button from './componets/button'

function App() {

  const nome = 'Maria';

  return(
    <div className='App'>
      <h2>Renderização Condicional</h2>
      <Condicional/>
    </div>
  );

};

export default App;
