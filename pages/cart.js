import Image from "next/image";
import Link from "next/Link";
import { useContext, useState, useEffect } from "react";
import Layout from "../components/Layout";
import CartTable from "../components/cart/CartTable";
import { Store } from "../utils/store";
import dynamic from "next/dynamic";
const Cart = () => {
  const {
    state: {
      cart: { cartItems },
    },
  } = useContext(Store);

  return (
    <Layout>
      <div className="p-2 md:w-10/12 m-auto md:p-0">
        <h1 className="text-xl font-bold">Shopping Cart</h1>
        {!cartItems.length > 0 ? (
          <h1>
            Cart is empty.{" "}
            <Link className=" hover:text-sky-800" href="/">
              Go Shopping
            </Link>
          </h1>
        ) : (
          <div className="w-full md:flex items-baseline">
            <div className="md:w-9/12">
              <CartTable cartItems={cartItems} />
            </div>
            <div className="bg-white shadow-md shadow-slate-500 min-h-32 p-5 md:w-3/12">
              <p className="text-xl">
                Subtotal (
                {cartItems.reduce((acc, item) => acc + item.quantity, 0)}{" "}
                items):
              </p>
              <p className="text-xl">
                $
                {cartItems.reduce(
                  (acc, item) => acc + item.quantity * item.price,
                  0
                )}
              </p>
              <button className="text-white font-bold text-md bg-sky-300 w-full h-8 mt-2">
                CHECK OUT
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default dynamic(() => Promise.resolve(Cart), { ssr: false });
