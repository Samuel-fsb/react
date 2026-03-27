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
    </Container>

  );
}

export default App;
