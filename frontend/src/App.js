import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ShopCategory } from './Pages/ShopCategory';
import { Shop } from './Pages/shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import { Footer } from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';
import { NewCollections } from './Components/NewCollections/NewCollections';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="mens" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="womens" />} />
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kids" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productID' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/NewCollections' element={<NewCollections />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
