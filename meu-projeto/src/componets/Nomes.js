import { useState, useEffect} from 'react';

function Nomes(){

    const [nome, SetNome] = useState("Julia");

    useEffect(() => {
        console.log("O nome mudou para" + nome);
    }, [nome]);

    return(
        <div>
            <h1>{nome}</h1>
            <button onClick={() => SetNome("Ana")}>Mudar De Nome</button>
        </div>
    );

};

export default Nomes;