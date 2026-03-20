import {BrowerRouter as Router, Switch, Route, Link} from 'react-router-dom'


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

    </Router>
  );

};

export default App;
