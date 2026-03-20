import { Link } from 'react-router-dom'

function Menu(){

    return(

        <div>

            <ul>
        <li>
          <Link to="home">Home</Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link to="empresa">Empresa</Link>
        </li>
      </ul>
      <ul>

        <li>
          <Link to="contato">Contato</Link>
        </li>
      </ul>

        </div>
    )

};

export default Menu;