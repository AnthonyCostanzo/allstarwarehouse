import { useRouter } from "next/router";
import { useState } from "react";

const UpdateItem = ({ query }) => {
  const router = useRouter();
  const { item_id } = query;
  let item = JSON.parse(query.item);

  const [name, setName] = useState(item.item_name);
  const [price, setPrice] = useState(item.item_price);
  const [quantity, setQuantity] = useState(item.quantity);

  const onNameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const onPriceChangeHandler = (e) => {
    setPrice(e.target.value);
  };

  const onQuantityChangeHandler = (e) => {
    setQuantity(e.target.value);
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
    const item = { item_name: name, item_price: price, quantity };
    try {
      const res = await fetch(`http://localhost:8080/items/update/${item_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ item_id, ...item }),
      });
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mt-20 w-3/4 m-auto">
      <form
        onSubmit={onFormSubmit}
        className="rounded-md flex flex-col min-w-max w-4/12 gap-5 bg-white shadow-md shadow-slate-400 p-10 m-auto"
      >
        <h1 className="text-center text-xl font-semibold">UPDATE ITEM</h1>
        <div>
          <input
            onChange={onNameChangeHandler}
            className="border-2 w-full border-black p-1 rounded-sm"
            type="text"
            id="name"
            defaultValue={name}
            placeholder="item name"
          />
        </div>
        <div>
          <input
            onChange={onPriceChangeHandler}
            required
            className="border-2 w-full border-black p-1 rounded-sm"
            type="text"
            id="price"
            defaultValue={price}
            placeholder="item price"
          />
        </div>
        <div>
          <input
            onChange={onQuantityChangeHandler}
            required
            className="border-2 w-full border-black p-1 rounded-sm"
            type="number"
            id="quantity"
            defaultValue={quantity}
            min="1"
            placeholder="item quantity"
          />
        </div>
        <button
          type="submit"
          className="bg-black shadow-slate-800 shadow-md text-amber-50 h-8"
        >
          UPDATE
        </button>
      </form>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  {
    const { query } = context;
    return { props: { query } };
  }
};

export default UpdateItem;
