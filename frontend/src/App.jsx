import { Routes, Route } from "react-router-dom"
import { Header } from "./component/header"
import Home from "./pages/userside/home"
import Category from "./pages/userside/category"
import Product from "./pages/userside/product"
import About from "./pages/userside/about"
import Contact from "./pages/userside/contact"
import Login from "./pages/userside/login"
import Register from "./pages/userside/regiser"
import ErrorPage from "./pages/userside/error"
import { Footers } from "./component/footer"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footers />
    </>
  )
}

export default App
