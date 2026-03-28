

function Tarefa({ titulo, concluida, AoRemover}){

    return(
        <div className="Item_Tarefa">
            <sapn>concluida={concluida ? "✅" : "⏳"}</sapn>
            <h1>texto={titulo}</h1>
            <button onClick={AoRemover}>Remover</button>
        </div>
    );


};

export default Tarefa;