import { useState } from 'react';

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

