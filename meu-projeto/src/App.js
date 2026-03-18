import './App.css';
import Evento from './componets/Evento';
import Form from './componets/Form';
import Button from './componets/button'

function App() {

  const nome = 'Maria';

  return(
    <div className='App'>
      <h2>Testando Eventos</h2>
      <Evento/>
      <Button/>
    </div>
  );

};

export default App;
