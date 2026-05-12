import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/cartcontext";

function Navbar() {

  const { cartItems } = useContext(CartContext);

  const totalCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="sticky top-0 z-50 bg-pink-200 text-white px-8 py-4 flex justify-between items-center shadow-lg">

      <h1 className="text-3xl font-bold">
        💄✨ VelvetGlam ✨💄
      </h1>

      <div className="flex gap-4 items-center">

        <Link
          to="/"
          className="bg-purple-200 text-pink-700 px-5 py-2 rounded-xl hover:bg-lime-100 transition-all duration-300"
        >
          Home
        </Link>

        <Link
          to="/products"
          className="bg-purple-200 text-pink-700 px-5 py-2 rounded-xl hover:bg-lime-100 transition-all duration-300"
        >
          Products
        </Link>

        <Link
          to="/cart"
          className="bg-purple-200 text-pink-700 px-5 py-2 rounded-xl hover:bg-lime-100 transition-all duration-300"
        >
          Cart ({totalCount})
        </Link>

        <Link
          to="/login"
          className="bg-purple-800 text-white-700 px-5 py-2 rounded-xl hover:bg-gray-800 transition-all duration-300"
        >
          Login
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;