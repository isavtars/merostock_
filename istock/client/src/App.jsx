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
import Profile from './Pages/ProfilePage/Profile';

export default function App() {

  
const user=useSelector((state)=>state.user.currentUser);
console.log(user)

  return (

    <BrowserRouter>
      <Routes>

          
          <Route path='/register' element={<Register/>}/>
         

          <Route path='/login' element={user? <Navigate to="/dashboard" replace />:<Login/>}></Route>
       
          <Route path='/dashboard' element={!user? <Navigate to="/login" replace />:<Dashboard />}></Route>

          <Route path='/dashboard/productdetails' element={!user? <Navigate to="/login" replace />:<ProductDetails />}></Route>
          <Route path='/dashboard/productadd' element={!user? <Navigate to="/login" replace />:<ProductAdd/>}></Route>
          <Route path='/dashboard/productedit' element={!user? <Navigate to="/login" replace />:<ProductEdit/>}></Route>
          <Route path="/dashboard/profile" element={<Profile/>} />

          
         {
          
          user&&(
          <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile/>} />
          <Route path="productdetails" element={<ProductDetails />} />
          <Route path="productedit" element={<ProductEdit/>} />
          <Route path="productadd" element={<ProductAdd/>} />
          <Route path="singleproduct" element={<SingleProduct/>} />
          

          
   
          </Route> 
          
           )
          

          

          
         }




          {/* <Route path="/categoriesdetails" element={<CategoryDetails/>} />
          <Route path="/categoryedit" element={<CategoryEdit />} />
          <Route path="/categoryadd" element={<CategoryAdd/>} />
          <Route path="/categoryadded" element={<CategoryAdd/>} /> */}
         
         
       

          

          
      </Routes>
    </BrowserRouter>
        

  )
}