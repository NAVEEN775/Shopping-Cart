import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Registration/Header";
import { useState } from "react";
import Home from "./Registration/Home";
import Login from "./Registration/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Cart from "./Registration/Cart.js";
import Card from "./Registration/Card";
import Banner from "./Registration/Banner";
import Sidebar from "./Timestructure/Sidebar.js";
import Timeline from "./Timestructure/Timeline";
import Nav from "./Timestructure/Nav";

function App() {
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(true);
  const handleonClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };
  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;
    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  return (
    <div>
      <Header cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route
          path="/card"
          element={
            <Card cart={cart} setShow={setShow} handleonClick={handleonClick} />
          }
        />
        <Route
          path="/list"
          element={
            <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
          }
        />
        {/* <Route path="/banner" element={<Banner />} /> */}
      </Routes>
      {/* 
      <Nav />
      <Sidebar />
      <Timeline /> */}
    </div>
  );
}

export default App;
