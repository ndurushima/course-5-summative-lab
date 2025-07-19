import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import AdminPortal from "./pages/AdminPortal"


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />}>
            <Route />
            <Route />
        </Route>
        <Route path="/adminPortal" element={<AdminPortal />}>
            <Route />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App