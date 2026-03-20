import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './paginas/Home'
import Empresa from './paginas/Empresa'
import Contato from './paginas/Contato'
import Menu from './layout/Menu'
import Footer from './layout/Footer'

function App() {

  return(
    <Router>

    <Menu/>

    <Routes>

      <Route exact path='/Home' element={<Home></Home>}></Route>


      <Route exact path='/Empresa' element={<Empresa></Empresa>}></Route>

      <Route exact path='/Contato' element={<Contato></Contato>}></Route>

    </Routes>

    <Footer/>
    </Router>

  );

};

export default App;
