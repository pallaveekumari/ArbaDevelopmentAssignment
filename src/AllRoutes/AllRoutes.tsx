
import Login from './Login'
import Signup from './Signup'
import {Route,Routes} from "react-router-dom"
import Crousels from "./Crousels"
const AllRoutes = () => {
  return (
   <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/crousel" element={<Crousels/>}/>
   </Routes>
  )
}

export default AllRoutes