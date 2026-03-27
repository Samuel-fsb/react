import { browserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Container from './componets/Container';

function App() {
  return (
    <Router>
      <ul>
        <li>Home</li>
        <li>Contato</li>
      </ul>
    </Router>

    <>
      <Routes>

        <Route exact path="/">
        <Home />
        </Route>

        <Route exact path="/company">
        <Company />
        </Route>

        <Route exact path="/newproject">
        <NewProject />
        </Route>

      </Routes>
      <p>Footer</p>
    </>

  );
}

export default App;
