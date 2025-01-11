import React from "react"
import Home from "./pages/Home"
import { BrowserRouter , Routes , Route } from "react-router-dom"
import Products from "./pages/Products";
import Product from "./pages/Product";

function App() {

  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
