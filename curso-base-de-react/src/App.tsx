import { useState } from 'react';

export function App() {

  const [Lista, SetLista] = useState([
    { id: '1', label: 'Fazer Café',},
    { id: '2', label: 'Fazer Almoço',},
    { id: '3', label: 'Fazer Janta',},
    { id: '4', label: 'Fazer Janta',},
  ]);

  return (
    <div>

    <input type="number" name="" id="" />

    <button>
      Adicionar
    </button>

    <ul>
      {Lista.map(ListaItem => (<li key={ListaItem.id}>{ListaItem.label}</li>))}
    </ul>
      
    </div> 
  )
}

