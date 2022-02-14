import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
        <ItemListContainer greeting='¡Bienvenidos a la tienda!'/>
    </div>
  );
}

export default App;
