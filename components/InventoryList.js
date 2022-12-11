import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const InventoryList = () => {
  const router = useRouter();
  const [inventory, setInventory] = useState([]);

  // useEffect(() => {}, []);

  return (
    <div className="md:w-3/4 m-auto mt-10">
      <h1 className="mb-5 font-semibold text-xl">Current Inventory</h1>
      <table className="w-10/12 m-auto font-semibold md:w-full min-h-[10rem]">
        <thead className="">
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>UPDATE</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody className="divide-y-2 divide-black">
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>${item.price.toFixed(2)}</td>
            <td>{item.quantity}</td>
            <td>
              <button
                onClick={() => updateItem(item)}
                className="bg-orange-400 md:w-3/4 h-8 text-white w-full"
              >
                {"UPDATE"}
              </button>
            </td>
            <td className="">
              <button
                onClick={() => deleteItem(item.id)}
                className="bg-red-600 md:w-3/4 text-white w-full text-2xl "
              >
                X
              </button>
            </td>
          </tr>
          ))
        </tbody>
      </table>
      <div className="mt-4 text-left ml-10 md:ml-0">
        <button className="p-1 md:mr-12 bg-green-600 md:ml-0 md:p-2 rounded-md text-white">
          <Link href="/addItem">ADD NEW ITEM</Link>
        </button>
      </div>
    </div>
  );
};

export default InventoryList;
