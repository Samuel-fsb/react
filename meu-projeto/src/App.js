import './App.css';
import {useState} from 'react'
import SeuNome from './componets/SeuNome';
import Saudacao from './componets/saudacao'

function App() {

const [nome, setNome] = useState()

  return(
    <div className='App'>
      <h2>State List</h2>
      <SeuNome setNome={setNome}/>
      {nome}
      <Saudacao nome={nome}/>
    </div>
  );

};

export default App;
