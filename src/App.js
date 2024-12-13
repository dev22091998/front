import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";
// import Forgot from "./pages/auth/Forgot";
// import Reset from "./pages/auth/Reset";
// import Dashboard from "./pages/dashboard/Dashboard";
// import Sidebar from "./components/sidebar/Sidebar";
// import Layout from "./components/layout/Layout";
import axios from "axios";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
// import { getLoginStatus } from "./services/authService";
// import { SET_LOGIN } from "./redux/features/auth/authSlice";
// import AddProduct from "./pages/addProduct/AddProduct";
// import ProductDetail from "./components/product/productDetail/ProductDetail";
// import EditProduct from "./pages/editProduct/EditProduct";
// import Profile from "./pages/profile/Profile";
// import EditProfile from "./pages/profile/EditProfile";
// import Contact from "./pages/contact/Contact";
// import SingleProduct from "./components/product/productTable/SingleProduct.js";

axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   async function loginStatus() {
  //     const status = await getLoginStatus();
  //     dispatch(SET_LOGIN(status));
  //   }
  //   loginStatus();
  // }, [dispatch]);

  return (
    <BrowserRouter>
      {/* <ToastContainer /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single-product/:id" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
