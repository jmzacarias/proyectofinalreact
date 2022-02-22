import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js'

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
        <ItemListContainer greeting='¡Bienvenidos a la tienda!'/>
        <ItemDetailContainer />
    </div>
  );
}

export default App;
