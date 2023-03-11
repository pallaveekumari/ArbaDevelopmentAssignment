
import Login from './Login'
import Signup from './Signup'
import {Route,Routes} from "react-router-dom"

import CartPage from './CartPage'
import AllProductPage from './AllProductPage'
import CodingChallengePage from './CodingChallengePage'
import HomePage from './HomePage'
import ProductHomePage from './ProductHomePage'
import ProfilePage from './ProfilePage'
import PrivateRoutes from './PrivateRoutes'
const AllRoutes = () => {
  return (
   <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
 
    <Route path="/cartpage" element={<CartPage/>}/>
    <Route path="/allproduct" element={<AllProductPage/>}/>
    <Route path="/coding" element={<CodingChallengePage/>}/>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/product" element={<ProductHomePage/>}/>
    <Route path="/profile" element={<ProfilePage/>}/>
  
   </Routes>
  )
}

export default AllRoutes