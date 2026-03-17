function Event(){

    function MeuEvento(){
        console.log('Fui ativado')
    };

    return (
        <div>
            <p>Clique para disparar o evento</p>
            <button onClick={MeuEvento}>Ativar</button>
        </div>
    );
};

export default Event();