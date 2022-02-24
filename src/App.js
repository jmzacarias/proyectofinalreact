import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <NavBar />
        </header>
        <Routes>
          <Route path='/' element= {<ItemListContainer greeting='¡Bienvenidos a la tienda!'/>}/>
          <Route path='/category/:categoryId' element= {<ItemListContainer />}/>
          <Route path='/item/:productId' element= {<ItemDetailContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
