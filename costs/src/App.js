import { browserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <ul>
        <li>Home</li>
        <li>Contato</li>
      </ul>
    </Router>

    <Container>
      <Routes>

        <Route exact path='/'>
        <Home></Home>
        </Route>

        <Route exact path='/'>
        <Home></Home>
        </Route>
      </Routes>
    </Container>

  );
}

export default App;
