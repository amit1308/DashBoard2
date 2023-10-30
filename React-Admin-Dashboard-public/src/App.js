import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard.jsx";
import About from "./pages/Monitor.jsx";
import Analytics from "./pages/Control.jsx";
import Comment from "./pages/Comment.jsx";
import Product from "./pages/Product.jsx";
import ProductList from "./pages/ProductList.jsx";
import { ToastContainer } from "react-toastify";
import Heading from "./LandinPage/Heading/Heading";
import Login from "./Admin/Login";
import PrivateRouteFour from "./PrivateRouteFour";

const App = () => {
  return (
    <>
      {/* <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter> */}

      <BrowserRouter>
        <ToastContainer />

        <Sidebar>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRouteFour />}>
              <Route path="/Landing" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/comment" element={<Comment />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/product" element={<Product />} />
              <Route path="/productList" element={<ProductList />} />
            </Route>
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  );
};

export default App;
