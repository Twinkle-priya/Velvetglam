import Navbar from "../components/navbar";
import Hero from "../components/hero";
import ProductCard from "../components/productcard";
import products from "../data/product";

function Home() {
  return (
    <div className="bg-lime-50 min-h-screen">
      
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Featured Products Section */}
      <div className="px-6 md:px-12 py-16">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-purple-800">
            Our Products
          </h1>

          <p className="text-pink-600 mt-4 text-lg">
            Explore our Beauty products collection
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>
      </div>

      {/* Extra Eco Section */}
      <div className="bg-pink-100 py-16 px-8 text-center mt-16">

        <h2 className="text-3xl font-bold text-skyblue-800">
          Enhance your Beauty With 💄✨ VelvetGlam ✨💄
        </h2>

        <p className="text-pink-700 mt-4 max-w-2xl mx-auto text-lg">
         ✨💄 VelvetGlam — Where Beauty Meets Elegance 💖🌸
Glow different, shine confident 💅✨
        </p>

        <button className="mt-8 bg-green-700 text-white px-8 py-3 rounded-xl hover:bg-green-800 transition-all duration-300 shadow-lg">
          Shop 🌸💄 Glow. Glam. Repeat.
        </button>
      </div>

    </div>
  );
}

export default Home;