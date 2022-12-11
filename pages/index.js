import { useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";
import Layout from "../components/Layout";
import ProductGrid from "../components/product/ProductGrid";
import SearchBox from "../components/Searchbox";
import db from "../utils/db";
import Product from "../models/Product";

export default function Home({ products }) {
  const [searchField, setSearchField] = useState("");

  const [filteredProds, setFilteredProds] = useState(products);
  const handleSearchChange = (e) => {
    setSearchField(e.target.value);
  };

  useEffect(() => {
    setFilteredProds(
      products.filter((prod) =>
        prod.name.toLowerCase().includes(searchField.toLowerCase().trim())
      )
    );
  }, [searchField, searchField.length, products]);

  return (
    <Layout>
      <div className="mt-10 flex flex-col items-center">
        <p className="text-3xl max-w-sm text-center relative">
          Search through our large inventory of products
          <span className="absolute bottom-2">
            <FcSearch size={28} />
          </span>
        </p>
        <div className="flex justify-center mt-3">
          <SearchBox onSearchChange={handleSearchChange} />
        </div>
      </div>

      <div className="w-8/12 sm:w-10/12 m-auto mt-10">
        <h1 className="text-2xl font-semibold">Featured Products</h1>
        <ProductGrid products={filteredProds} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  await db.connect();
  let products = await Product.find({}).lean();
  await db.disconnect();
  return {
    props: { products: products.map((prod) => db.convertDocToObject(prod)) },
  };
}
