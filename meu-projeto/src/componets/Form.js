import{ useState, useState } from 'react';

function Form(){
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(name)
        console.log('Dadastrou o usurário')
    }

    
const {name, setName} = useState()
    
return(
    <div>
        <h1>Meu Cadastro:</h1>
        <from onSubmit={cadastrarUsuario}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input
                type="text"
                id="name"
                name="name"
                placeholder="Digite o seu nome"
                ></input>
            </div>
            <div>
                <label htmlFor="Password">Senha:</label>
                <input
                type="password"
                id="password"
                name="name"
                placeholder="Digite o seu nome"
                onChange={(e) => setName(e.target.value)}
                ></input>
            </div>
        </from>
    </div>
)
}

export default Form;