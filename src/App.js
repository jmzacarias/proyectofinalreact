import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import {CartContextProvider} from './Context/CartContext';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <Router>
          <header>
            <NavBar />
          </header>
          <Routes>
            <Route path='/' element= {<ItemListContainer greeting='¡Bienvenidos a la tienda!'/>}/>
            <Route path='/category/:categoryId' element= {<ItemListContainer />}/>
            <Route path='/item/:productId' element= {<ItemDetailContainer />} />
            <Route path='/cart' element= {<Cart />} />
          </Routes>
        </Router>
      </CartContextProvider>
    </div>
  );
}

export default App;
