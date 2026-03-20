import {BrowserRouter as Router, Route, Route, Link} from 'react-router-dom'
import Home from './paginas/Home'
import Empresa from './paginas/Empresa'
import Contato from './paginas/Contato'
import Menu from './componets/Menu'

function App() {

  return(
    <Router>

      <Menu></Menu>
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

    <Routes>

      <Route exact path='/Home' element={<Home></Home>}></Route>


      <Route exact path='/Empresa' element={<Empresa></Empresa>}></Route>

      <Route exact path='/Contato' element={<Contato></Contato>}></Route>

    </Routes>

    </Router>
  );

};

export default App;
