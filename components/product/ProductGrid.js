import ProductCard from "./productCard";
const ProductGrid = ({ products }) => {
  return (
    <div className=" grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-3 gap-7">
      {products.length > 0 &&
        products.map((prod, i) => {
          return <ProductCard key={prod._id} product={prod} />;
        })}
    </div>
  );
};

export default ProductGrid;
