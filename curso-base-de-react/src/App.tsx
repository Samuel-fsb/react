import { useState } from 'react';
import './App.scss';
import { Person } from './components/Person';

export const misha = {
  name: 'Misha',
  age: 37,
  sex: 'm',
  isMarried: true,
  partnerName: 'Natasha',
};

export const olya = {
  name: 'Olya',
  sex: 'f',
  isMarried: true,
  partnerName: 'Maksym',
};

export const alex = {
  name: 'Alex',
  age: 25,
  sex: 'm',
  isMarried: false,
};

export const App = () => (
  <div className="App">
    <Person person={misha}/>
    <Person person={olya}/>
    <Person person={alex}/>
  </div>
);

export function App() {

  const [Valor, SetValor] = useState('');
  const [Lista, SetLista] = useState([
    { id: '1', label: 'Fazer Café',},
    { id: '2', label: 'Fazer Almoço',},
    { id: '3', label: 'Fazer Janta',},
    { id: '4', label: 'Fazer Janta',},
  ]);

  return (
    <div>

    <input 
    
    value={Valor}
    onChange={(e) => SetValor(e.target.value)}
    />

    <button onClick={() => {SetLista([ ...Lista, {id: (Lista.length + 1).toString(), label: Valor} ]);
    SetValor('');
    }}>
      
      Adicionar
    </button>

    <ol>
      {Lista.map(ListaItem => (<li key={ListaItem.id}>{ListaItem.label}</li>))}
    </ol>
      
    </div> 
  )
}

