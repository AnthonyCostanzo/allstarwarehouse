import Link from "next/Link";
import { useRouter } from "next/router";

const InventoryList = ({ inventory }) => {
  const router = useRouter();
  const deleteItem = async (id) => {
    await fetch(`http://localhost:8080/items/delete/${id}`, {
      method: "DELETE",
    });
    router.replace("/");
  };

  const updateItem = async (item) => {
    router.push({
      pathname: `/item/${item.id}`,
      query: { item: JSON.stringify(item) },
    });
  };

  return (
    <div className="md:w-3/4 m-auto mt-10">
      <h1 className="mb-5 font-semibold text-xl">Current Inventory</h1>
      <table className="w-11/12 font-semibold h-48 m-5 md:w-11/12 md:m-auto min-h-max">
        <thead>
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
          {inventory.length &&
            inventory.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.item_name}</td>
                <td>${item.item_price.toFixed(2)}</td>
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
            ))}
        </tbody>
      </table>
      <div className="w-1/4">
        <button className="ml-4 p-1 bg-green-500 md:ml-0 md:p-2 rounded-md text-white">
          <Link href="/addItem">ADD NEW ITEM</Link>
        </button>
      </div>
    </div>
  );
};

export default InventoryList;
