import './App.css'
// BROWSER ROUTER
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// COMPONENTS
import ItemListcontainer from './components/ItemListContainer/itemListContainer';
import NavBar from './components/navBar/navBar';
import Header from './components/header/header';
// PAGES
import ComicsPage from './pages/ComicsPage';
import DetailPage from './pages/DetailPage/DetailPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import TopPage from './pages/TopPages/TopPage';
import CartView from './pages/CartView/CartView';
// CONTEXT CARRITO
import { CartProvider, useCart } from './CartContext';



const App = ()=> {
  return(
    <Router>
    <CartProvider>
    <>
    <div>
      <Header />
      <NavBar />
    </div>

    </>
    <Routes>
      {/*  MAIN PAGE */}
    <Route 
    path="/" 
    element={
    <div className='PosterBox'>
    <ItemListcontainer 
    img="https://m.media-amazon.com/images/I/81Bivc7COzL.jpg"
    title="The Batman"
    price="Proximamente"/>
    <ItemListcontainer 
    img="https://m.media-amazon.com/images/I/61O9+6+NxYL.jpg"
    title="Gladiator"
    price="Proximamente"/>
    <ItemListcontainer 
    img="https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
    title="The Shining"
    price="Proximamente"/>
    <ItemListcontainer 
    img="https://www.infobae.com/new-resizer/1ts6qDldBD3hPPHLDxn05ajBqKs=/arc-anglerfish-arc2-prod-infobae/public/VLFHY43STVH3PBSEULWXPRCSIY.jpeg"
    title="Oppenheimer"
    price="Proximamente"/>
    </div>
    } 
  />
  // DIVS DE NAVBAR
{/*   <Route path="/tapadura" element={<TapaDuraPage />} />
  <Route path="/novelagrafica" element={<NovelasGraficasPage />} /> */}
  <Route path="/comics" element={<ComicsPage />} />
  // DETAIL DE COMIC CON ID
  <Route path="/detail/:id" element={<DetailPage />} />
  // CATEGORY DE COMIC CON ID
  <Route path="/category/:categoryId" element={<CategoryPage />} />
  // TOP SEMANAL
  <Route path="/top" element={<TopPage />} />
  // CARRITO
  <Route path="/cart" element={<CartView />} />
  </Routes>
  </CartProvider>
  </Router>
  );
};

export default App
