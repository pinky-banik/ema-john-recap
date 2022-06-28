import Navbar from './Componets/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './Componets/Home';
import Shop from './Componets/Shop';
import NotFound from './Componets/NotFound';
import ProductDetails from './Componets/ProductDetails';
import Orders from './Componets/Orders';
import Inventory from './Componets/Inventory';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/inventory' element={<Inventory/>}/>
        <Route path='/About' element={<Shop/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
