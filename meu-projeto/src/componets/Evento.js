function Evento( {numero} ){

    function MeuEvento(){
        console.log(`Fui ativado! ${numero}`)
    };

    return (
        <div>
            <p>Clique para disparar o evento</p>
            <button text="Primeiro Evento" />
            <button onClick={MeuEvento}>Ativar</button>
        </div>
    );
};

export default Evento;