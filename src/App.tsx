import React from "react";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";

import Cart from "./pages/Cart/Cart.component";
import Checkout from "./pages/Checkout/Checkout.component";
import Allproducts from "./pages/Home/Category/CategoryPages/Allproducts";
import CatagoriesPages from "./pages/Home/Category/CategoryPages/CatagoriesPages";
import Home from "./pages/Home/Home/Home.component";
import Login from "./pages/Login/Login.component";
import OrderDetails from "./pages/OrderDetails/OrderDetails.component";
import Payment from "./pages/Payment/Payment.component";
import ProductDetails from "./pages/ProductDetails/ProductDetails.component";
import Register from "./pages/Register/Register.component";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route
              path="/productDetails/:id"
              element={<ProductDetails></ProductDetails>}
            />
            <Route path="/cart" element={<Cart></Cart>} />
            <Route path="/checkout" element={<Checkout></Checkout>} />
            <Route path="/payment" element={<Payment></Payment>} />
            <Route
              path="/orderDetails"
              element={<OrderDetails></OrderDetails>}
            />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/register" element={<Register></Register>} />
            <Route
              path="/categories/:name"
              element={<CatagoriesPages></CatagoriesPages>}
            ></Route>
            <Route path="/categories" element={<Allproducts></Allproducts>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
