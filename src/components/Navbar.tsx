import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex w-screen justify-around p-2 bg-amber-900 rounded-sm text-white">
      <h1 className="animate-bounce text-gray-300 mx-3">Shopping Cart</h1>
      <section className="flex gap-6 list-none">
        <Link to="/product">
          <li>Product</li>
        </Link>
        <Link to="/basket">
          <li className="flex items-center">
            Basket
            <TiShoppingCart size={40} />
          </li>
        </Link>
      </section>
      <section className="flex gap-3 list-none">
        <Link to="/signin">
          <li>Sign In</li>
        </Link>
        <Link to="/signup">
          <li>SignUp</li>
        </Link>
        <Link to="/profile">
          <li>Profile</li>
        </Link>
      </section>
    </nav>
  );
};

export default Navbar;
