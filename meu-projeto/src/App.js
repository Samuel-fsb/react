import './App.css';
import Event from './componets/Events';
import Form from './componets/Form';

function App() {

  const nome = 'Maria';

  return(
    <div className='App'>
      <h2>Testando Eventos</h2>
      <Event/>
      <Form/>
    </div>
  );

};

export default App;
