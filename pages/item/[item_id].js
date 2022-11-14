import { useRouter } from "next/router";
import { useState } from "react";

const UpdateItem = ({ item }) => {
  const router = useRouter();
  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(item.price);
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
    const updatedItem = { name, price, quantity };
    try {
      const res = await fetch(`http://localhost:8080/products/${item.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedItem),
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
    let {
      query: { item },
    } = context;
    item = JSON.parse(item);
    return { props: { item } };
  }
};

export default UpdateItem;
