import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Basket from "./components/Basket";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
