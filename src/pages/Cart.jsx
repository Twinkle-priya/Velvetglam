import { useContext } from "react";
import Navbar from "../components/navbar";
import { CartContext } from "../context/cartcontext";

function Cart() {

  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  // TOTAL PRICE
  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-lime-50 min-h-screen">

      <Navbar />

      <div className="p-10">

        <h1 className="text-4xl font-bold text-pink-700 mb-10">
          Shopping Cart
        </h1>
         <h2>Cart Page Updated</h2>
        {cartItems.length === 0 ? (

          <h2 className="text-2xl text-purple-500">
            Cart is Empty
          </h2>

        ) : (

          <div className="grid gap-8">

            {cartItems.map((item) => (

              <div
                key={item.id}
                className="bg-white p-6 rounded-2xl shadow-lg flex justify-between items-center"
              >

                <div className="flex items-center gap-6">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-cover rounded-xl"
                  />

                  <div>

                    <h2 className="text-2xl font-bold">
                      {item.name}
                    </h2>

                    <p className="text-pink-700 font-semibold mt-2">
                      ₹{item.price}
                    </p>

                    {/* Quantity Buttons */}

                    <div className="flex items-center gap-4 mt-4">

                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="bg-black-500 text-white px-4 py-1 rounded-lg"
                      >
                        -
                      </button>

                      <span className="text-xl font-bold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="bg-purple-700 text-white px-4 py-1 rounded-lg"
                      >
                        +
                      </button>

                    </div>

                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-purple-700 text-white px-5 py-3 rounded-xl hover:bg-gray-800"
                >
                  Remove
                </button>

              </div>
            ))}

            {/* Total Section */}

            <div className="bg-white p-6 rounded-2xl shadow-lg text-right">

              <h2 className="text-3xl font-bold text-pink-500">
                Total: ₹{totalPrice}
              </h2>

            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;