

function Tarefa({ titulo, concluida, AoRemover}){

    return(
        <div className="Item_Tarefa">
            <sapn concluida={concluida > 0? ✅ : ⏳}></sapn>
            <h1 texto={titulo}></h1>
            <button onClick={AoRemover}></button>
        </div>
    );


};

export default Tarefa;