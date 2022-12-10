import Link from "next/Link";
import Image from "next/image";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Store } from "../../utils/store";
const CartTable = ({ cartItems }) => {
  const { dispatch } = useContext(Store);
  const updateCartHandler = async (item, quantity) => {
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.inStock <= 0) {
      window.alert("Product is out of stock");
      return;
    }
    quantity = +quantity.replace(/^0+/, "");

    dispatch({ type: "ADD_ITEM_TO_CART", payload: { ...item, quantity } });
  };

  const removeItemHandler = (item) => {
    console.log("clicked");
    dispatch({ type: "REMOVE_CART_ITEM", payload: item });
  };

  return (
    <table className="w-full mt-10 table-auto text-center border-separate border-spacing-y-5">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <tr key={item._id} className="">
            <td className="relative h-32">
              <Link href={`/item/${item.slug}`} passHref>
                <Image fill src={item.image} alt={item.name} />
              </Link>
            </td>
            <td>{item.name}</td>
            <td>
              <select
                size={1}
                value={item.quantity}
                onChange={(e) => updateCartHandler(item, e.target.value)}
              >
                {[...Array(item.inStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
            </td>
            <td>${item.price}</td>
            <td>
              <button
                className="bg-red-600 p-2 text-white w-20"
                onClick={() => removeItemHandler(item)}
              >
                <span className="text-2xl">X</span>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CartTable;
