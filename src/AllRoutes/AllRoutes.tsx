import Login from "./Login";
import Signup from "./Signup";
import {  Route, Routes } from "react-router-dom";

import CartPage from "./CartPage";
import AllProductPage from "./AllProductPage";
import CodingChallengePage from "./CodingChallengePage";
import HomePage from "./HomePage";

import ProfilePage from "./ProfilePage";

import { PrivateRoute } from "./PrivateRoutes";

const AllRoutes = () => {

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
