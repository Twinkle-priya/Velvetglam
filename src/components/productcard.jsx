import { useContext } from "react";
import { CartContext } from "../context/cartcontext";

function ProductCard({ product }) {

  const {
    cartItems,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  // Find Current Product In Cart

  const existingProduct = cartItems.find(
    (item) => item.id === product.id
  );

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-all duration-300">

      {/* Product Image */}

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
      />

      {/* Product Details */}

      <div className="p-5">

        <h2 className="text-2xl font-bold text-green-800">
          {product.name}
        </h2>

        <p className="text-green-700 mt-2 font-semibold">
          ₹{product.price}
        </p>

        {/* Add To Cart OR Quantity Buttons */}

        {!existingProduct ? (

          <button
            onClick={() => addToCart(product)}
            className="mt-5 w-full bg-green-700 text-white py-3 rounded-xl hover:bg-green-800 transition-all duration-300"
          >
            Add To Cart
          </button>

        ) : (

          <div className="flex items-center justify-center gap-5 mt-5">

            {/* Minus Button */}

            <button
              onClick={() => decreaseQuantity(product.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg text-xl font-bold hover:bg-red-600"
            >
              -
            </button>

            {/* Quantity */}

            <span className="text-2xl font-bold">
              {existingProduct.quantity}
            </span>

            {/* Plus Button */}

            <button
              onClick={() => increaseQuantity(product.id)}
              className="bg-green-700 text-white px-4 py-2 rounded-lg text-xl font-bold hover:bg-green-800"
            >
              +
            </button>

          </div>
        )}

      </div>
    </div>
  );
}

export default ProductCard;