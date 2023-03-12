import Login from "./Login";
import Signup from "./Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CartPage from "./CartPage";
import AllProductPage from "./AllProductPage";
import CodingChallengePage from "./CodingChallengePage";
import HomePage from "./HomePage";
import ProductHomePage from "./ProductHomePage";
import ProfilePage from "./ProfilePage";

import PrivateRoute from "./PrivateRoutes";
import { login } from "../Redux/AuthReducer/action";

const AllRoutes = () => {
  const isAuthenticated: any = localStorage.getItem("token") != undefined;
  return (
    <Routes>
      {/* <Route path="/login" element={<Login/>}/> */}
      <Route path="/signup" element={<Signup />} />
      {/* <PrivateRoute isAuthenticated={isAuthenticated} path="/login" component={HomePage} /> */}

      <Route><PrivateRoute exact path="/login" isAuthenticated={isAuthenticated}>
        <HomePage />
      </PrivateRoute>
      </Route>
      <Route path="/cartpage" element={<CartPage />} />
      <Route path="/allproduct" element={<AllProductPage />} />
      <Route path="/coding" element={<CodingChallengePage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<ProductHomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      </Routes>
  );
};

export default AllRoutes;
