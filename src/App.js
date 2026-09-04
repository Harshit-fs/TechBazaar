import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Products from "./Pages/Products";
import Carts from "./Pages/Carts";
import Contacts from "./Pages/Contacts";
import Login from "./Component/Login";
import Register from "./Component/Register";
import AddProduct from "./Products Comp/AddProduct";
import Contact from "./Component/Contact";
import Cart from "./Products Comp/Cart";
import CheckoutPage from "./Component/CheckoutPage";
import ScrollTop from "./Component/ScrollTop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      

  <Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
  <Route path="shop" element={<Shop />} />
  <Route path="products" element={<Products />} />
  <Route path="carts" element={<Carts />} />
  <Route path="contact" element={<Contacts />} />
  <Route path="login" element={<Login/>} />
   <Route path="register" element={<Register/>} /> 
  <Route path="addproduct" element={<AddProduct/>} /> 
  <Route path="contact" element={<Contact/>} />
  <Route path="cart" element={<Cart/>} />
  <Route path="checkoutpage/:id" element={<CheckoutPage />} />
  <Route path="scrolltop" element={<ScrollTop/>} />
</Route>
       

      </Routes>
    </BrowserRouter>
  );
}

export default App;