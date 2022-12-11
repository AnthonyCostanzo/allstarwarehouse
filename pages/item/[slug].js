import { useContext } from "react";
import { Store } from "../../utils/store";
import Image from "next/image";
import db from "../../utils/db";
import Link from "next/Link";
import Product from "../../models/Product";
import axios from "axios";
const ItemPage = ({ product: prod }) => {
  const { state, dispatch } = useContext(Store);
  const addItemToCart = async (item) => {
    const existItem = state.cart.cartItems.find(
      (cartItem) => cartItem._id === item._id
    );
    const quantity = existItem ? +existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.inStock < quantity) {
      window.alert("Product out of stock");
      return;
    }
    dispatch({ type: "ADD_ITEM_TO_CART", payload: { ...item, quantity } });
  };
  if (!prod._id) {
    return (
      <h1 className="text-center text-xl text-red-800">Product not found</h1>
    );
  }
  return (
    <div className="pb-10">
      <div className="ml-20 hover:text-sky-800">
        {" "}
        <Link href="/">Back to products</Link>
      </div>

      <div className="bg-white bg-opacity-50 shadow-md shadow-slate-700 mt-10 w-10/12 m-auto grid md:grid-cols-2 p-5">
        <div className="w-full">
          <div className="relative h-96">
            <Image src={prod.image} fill alt={prod.name} />
          </div>
        </div>
        <div className="md:ml-5 mt-5 md:mt-0">
          <h3 className="text-xl font-bold">{prod.name}</h3>
          <p className="md:w-8/12 mt-2 overflow-scroll">{prod.description}</p>
          <div className=" gap-4 mt-5 space-y-2">
            <p>In Stock:{prod.inStock}</p>
            <p className="mt-1">Price: ${prod.price}</p>

            <button
              onClick={() => addItemToCart(prod)}
              className=" hover:bg-black hover:text-white transition-all duration-150
           py-1 px-2 rounded-sm border-black border-[1px]"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  await db.connect();
  const { slug } = context.params;
  let product = await Product.findOne({ slug: slug }).lean();
  await db.disconnect();
  return {
    props: { product: product ? db.convertDocToObject(product) : {} },
  };
}

export default ItemPage;
