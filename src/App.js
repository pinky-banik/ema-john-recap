import Navbar from './Componets/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './Componets/Home';
import Shop from './Componets/Shop';
import NotFound from './Componets/NotFound';
import ProductDetails from './Componets/ProductDetails';
import Orders from './Componets/Orders';
import Inventory from './Componets/Inventory';
import Login from './Componets/Login';
import Register from './Componets/Register';
import RequireAuth from './RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/orders' element={<RequireAuth><Orders/></RequireAuth>}/>
        <Route path='/inventory' element={<Inventory/>}/>
        <Route path='/About' element={<Shop/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signUp' element={<Register/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
