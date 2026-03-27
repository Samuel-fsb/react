import { useState, useEffect } from 'react';
import Tarefa from "./componets/Tarefa"

function App() {

  return(
    <div>
      <Tarefa />
      useEffect(() => {
        const BuscarDados = async () => {
            try {
                const Dados = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            } catch (error) {
                
            }
        }
    } []);
    </div>
  );

};

export default App;
