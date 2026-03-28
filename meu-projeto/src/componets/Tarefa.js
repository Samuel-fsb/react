

function Tarefa({ titulo, concluida, AoRemover}){

    return(
        <div className="Item_Tarefa">
            <span>{concluida ? "✅" : "⏳"}</span>
            <h1>{titulo}</h1>
            <button onClick={AoRemover}>Remover</button>
        </div>
    );

};

export default Tarefa;