import {BrowerRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './paginas/Home'
import Empresa from './paginas/Empresa'
import Contato from './paginas/Contato'

function App() {

  return(
    <Router>

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
      <Route path='/Home'>
          <Home></Home>
      </Route>

      
      <Route path='/Empresa'>
          <Empresa></Empresa>
      </Route>
      <Route path='/Contato'>
          <Contato></Contato>
      </Route>
    </Routes>
    </Router>
  );

};

export default App;
