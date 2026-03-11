import logo from './logo.svg';
import './App.css';
import HelloWorld from './componets/HelloWorld';
import SayMyName from './componets/SayMyName'
import Pessoa from './componets/Pessoa'

function App() {

  const nome = 'Maira';

  return(
    <div className='App'>
      <HelloWorld/>
      <SayMyName nome="Julia"/>
      <SayMyName nome="Samuel"/>
      <SayMyName nome={nome}/>
      <Pessoa nome="Rodrigo" 
      idade="28" profissao="Programador" 
      foto="https://via.placeholder.com/150"/>
    </div>
  );

};

export default App;
