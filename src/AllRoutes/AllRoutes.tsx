import Login from "./Login";
import Signup from "./Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CartPage from "./CartPage";
import AllProductPage from "./AllProductPage";
import CodingChallengePage from "./CodingChallengePage";
import HomePage from "./HomePage";
import ProductHomePage from "./ProductHomePage";
import ProfilePage from "./ProfilePage";

import { login } from "../Redux/AuthReducer/action";
import { PrivateRoute } from "./PrivateRoutes";

const AllRoutes = () => {
  //   console.log(isAuthenticated);

  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={<PrivateRoute component={HomePage} path={"/login"} />}
      />

      <Route
        path="/profile"
        element={<PrivateRoute component={ProfilePage} path={"/login"} />}
      />
      <Route
        path="/coding"
        element={
          <PrivateRoute component={CodingChallengePage} path={"/login"} />
        }
      />
      <Route
        path="/allproduct"
        element={<PrivateRoute component={AllProductPage} path={"/login"} />}
      />
      <Route
        path="/cartpage"
        element={<PrivateRoute component={CartPage} path={"/login"} />}
      />
    </Routes>
  );
};

export default AllRoutes;
