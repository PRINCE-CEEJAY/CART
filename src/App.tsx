import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Basket from "./components/Basket";
import Profile from "./components/Profile";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/basket" element={<Basket />} />
        <Route path="/product" element={<Product />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
