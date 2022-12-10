import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
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
      <div className="flex w-full justify-center relative">
        <h1 className="text-2xl inline-block relative text-center mt-10 group-hover:animate-bounce  ">
          All Star Warehouse
          <span className="absolute top-1 ml-[.5px]">
            <AiFillStar className="text-sky-500" size={20} />
          </span>
        </h1>
      </div>
      <div className="flex justify-center mt-3">
        <SearchBox onSearchChange={handleSearchChange} />
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
