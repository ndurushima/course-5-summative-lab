import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import AdminPortal from "./pages/AdminPortal"
import './App.css'


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/adminPortal" element={<AdminPortal />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App