import Navbar from "../components/navbar";
import ProductCard from "../components/productcard";
import products from "../data/product";

function Products() {
  return (
    <div className="bg-lime-50 min-h-screen">
    <div>

      <Navbar />

      <div className="p-10">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-10">
          All Products
        </h1>

        <div className="grid md:grid-cols-3 gap-10">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Products;