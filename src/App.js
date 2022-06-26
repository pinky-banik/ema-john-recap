import Navbar from './Componets/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './Componets/Home';
import Shop from './Componets/Shop';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/orders' element={<Shop/>}/>
        <Route path='/inventory' element={<Shop/>}/>
        <Route path='/About' element={<Shop/>}/>
      </Routes>
    </div>
  );
}

export default App;
