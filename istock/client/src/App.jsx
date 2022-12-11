import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import CategoryDetails from './Pages/Category/CategoryDetails';
import CategoryAdd from './Pages/Category/CategoryAdd';
import CategoryEdit from './Pages/Category/CategoryEdit';
import ProductAdd from './Pages/Product/ProductAdd';
import ProductDetails from './Pages/Product/ProductDetails';
import ProductEdit from './Pages/Product/ProductEdit';
import Login from './components/Login';
import Register from './components/Register';
import SingleProduct from './Pages/Product/SingleProduct';




export default function App() {
  return (

    <BrowserRouter>
      <Routes>

          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route index element={<Dashboard />} />
          <Route path="/productdetails" element={<ProductDetails />} />
          <Route path="/productedit" element={<ProductEdit/>} />
          <Route path="/productadd" element={<ProductAdd/>} />
          <Route path="/singleproduct" element={<SingleProduct/>} />



          {/* <Route path="/categoriesdetails" element={<CategoryDetails/>} />
          <Route path="/categoryedit" element={<CategoryEdit />} />
          <Route path="/categoryadd" element={<CategoryAdd/>} />
          <Route path="/categoryadded" element={<CategoryAdd/>} /> */}



          

          
      </Routes>
    </BrowserRouter>
        

  )
}