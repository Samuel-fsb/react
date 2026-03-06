import logo from './logo.svg';
import './App.css';
import HelloWorld from './componets/HelloWorld';

function App() {

  const Name = 'Matheus';

  const NewName = Name.toUpperCase();

  const Sum = (a, b) => {
    return a + b;
  };

  const url = 'https://via.placeholder.com/150';

  return (
    <div className='App'>
      <h1>Alterando o JSX</h1>
      <p>Olá, {NewName}</p>
      <p>Soma: {Sum(1, 4)}</p>
      <img src={url} alt='Minha Imagem'></img>
      <HelloWorld/>
    </div>
  );
}

export default App;
