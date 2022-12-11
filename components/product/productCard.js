import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { Store } from "../../utils/store";
import axios from "axios";

const ProductCard = ({ product }) => {
  const {
    dispatch,
    state: {
      cart: { cartItems },
    },
  } = useContext(Store);

  const addItemToCart = async (item) => {
    const existItem = cartItems.find((cartItem) => cartItem._id === item._id);
    const quantity = existItem ? +existItem.quantity + 1 : 1;
    const data = await axios.get(`/api/products/${item._id}`);
    if (data.inStock < quantity) {
      window.alert("Product out of stock");
      return;
    }
    dispatch({ type: "ADD_ITEM_TO_CART", payload: { ...item, quantity } });
  };
  return (
    <div className="shadow-md shadow-slate-500 bg-white bg-opacity-70 pb-3">
      <div className="relative h-48 mb-2 bg-black cursor-pointer">
        <div className="absolute w-full h-full hover:opacity-60 transition-all duration-200 ">
          <Link legacyBehavior href={`/item/${product.slug}`} passHref>
            <a>
              <Image
                className=""
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </a>
          </Link>
        </div>
      </div>

      <div className=" p-2">
        <h3>{product.name}</h3>
        <p className="font-bold">
          <span className="font-bold">$</span>
          {product.price}
        </p>
        <div className=" border-t-2 mt-2 border-t-black">
          <button
            onClick={() => addItemToCart(product)}
            className=" text-xs hover:bg-black hover:text-white transition-all duration-150
           py-1 px-2 rounded-sm border-black border-[1px] mt-2"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
