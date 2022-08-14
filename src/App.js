import { Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './Components/Header/Header';

import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Order from './Components/order/Order';
import Products from './Components/Products/Products';
import Register from './Components/Register/Register';
import RequerAuth from './Components/requerAuth/RequerAuth';

function App() {
  return (
    <div className="App">
      <Header>

      </Header>
      <Routes>
        <Route path='/' element={<Home></Home>} > </Route>
        <Route path='/products' element={
          <RequerAuth>
            <Products></Products>
          </RequerAuth>
        } >
        </Route>
        <Route path='/order' element={
          <RequerAuth>
            <Order></Order>
          </RequerAuth>} >
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>


    </div>
  );
}

export default App;
