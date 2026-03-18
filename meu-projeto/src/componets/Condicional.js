import { useState } from 'react'

function Condicional(props){

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function EnviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    };

    return(
        <div>
            <h2>Cadastre o seu e-mail</h2>
            <form>
                <input type='email' placeholder='Digite o seu email...' onChange={(e) => setEmail(e.target.value)}></input>
                <button type='submit' onClick={EnviarEmail}>Enviar Email</button>
                {userEmail && (
                    <div>
                        <p>O e-mail do usuário é: {userEmail}</p>
                    </div>
                )}
            </form>
        </div>
    )
};

export default Condicional;