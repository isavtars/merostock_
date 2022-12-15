import { BrowserRouter, Routes, Route,Navigate} from 'react-router-dom';
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


import { useSelector } from 'react-redux';




export default function App() {

  
const user=useSelector((state)=>state.user.currentUser);
console.log(user)

  return (

    <BrowserRouter>
      <Routes>

          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>

          <Route path='/' element={user? <Navigate to="/dashboard" replace />:<Login/>}></Route>

         {
          
          user&&(
          <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<Dashboard />} />
          <Route path="productdetails" element={<ProductDetails />} />
          <Route path="productedit" element={<ProductEdit/>} />
          <Route path="productadd" element={<ProductAdd/>} />
          <Route path="singleproduct" element={<SingleProduct/>} />
          </Route>  )

          

          
         }





          {/* <Route path="/categoriesdetails" element={<CategoryDetails/>} />
          <Route path="/categoryedit" element={<CategoryEdit />} />
          <Route path="/categoryadd" element={<CategoryAdd/>} />
          <Route path="/categoryadded" element={<CategoryAdd/>} /> */}
         
         
       

          

          
      </Routes>
    </BrowserRouter>
        

  )
}