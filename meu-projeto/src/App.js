import logo from './logo.svg';
import './App.css';
import HelloWorld from './componets/HelloWorld';
import SayMyName from './componets/SayMyName';
import Pessoa from './componets/Pessoa';
import List from './componets/List';

function App() {

  const nome = 'Maria';

  return(
    <div className='App'>
      <h2>log</h2>
      <HelloWorld/>
      <SayMyName nome="Julia"/>
      <SayMyName nome="Samuel"/>
      <SayMyName nome={nome}/>
      <Pessoa nome="Rodrigo" 
      idade="28" profissao="Programador" 
      foto="https://via.placeholder.com/150"/>
      <List/>
    </div>
  );

};

export default App;
