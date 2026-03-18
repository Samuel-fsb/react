import Button from './button';

function Evento( {numero} ){

    function MeuEvento(){
        console.log(`Fui ativado! ${numero}`)
    };

    function SegundoEvento(){
        console.log('Ativando o segundo evento!')
    };

    return (
        <div>
            <h2>Clique para disparar um evento:</h2>
            <Button event={MeuEvento} text="Pirmeiro Evento"/>
            <Button event={SegundoEvento} text="Segundo Evento"/>
        </div>
    );
};

export default Evento;