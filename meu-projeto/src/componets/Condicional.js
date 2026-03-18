import { useState } from 'react'

function Condicional(props){

    function EnviarEmail(e){
        e.preventDefault()
        console.log("Testando")
    };

    return(
        <div>
            <h2>Cadastre o seu e-mail</h2>
            <form>
                <input type='email' placeholder='Digite o seu email...'></input>
                <button type='submit' onClick={EnviarEmail}>Enviar Email</button>
            </form>
        </div>
    )
};

export default Condicional;