import { useState, useEffect } from 'react';
import Tarefa from "./componets/Tarefa"

function App() {

  const [Lista, SetLista] = useState([]);

  useEffect (() => {
        const BuscarDados = async () => {
            try {
                const Dados = (await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5'))
                const DadosFomatados = await Dados.json()
                SetLista(DadosFomatados)
            } catch (error) {
                console.log("Erro ao buscar os dados" + error);
            }
        }k

        BuscarDados();
    }, []);


  return(
    <div>
    {Lista.map((item) => (
    <Tarefa 
      key={item.id}
      titulo={item.title}
      concluida={item.completed}
    /> 
    ))}
    </div>
  );

};

export default App;
