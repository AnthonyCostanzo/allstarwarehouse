import { useState } from "react";
import { useRouter } from "next/router";

const AddItem = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const router = useRouter();

  const onFormSubmit = async (event) => {
    event.preventDefault();
    const item = { item_name: name, item_price: price, quantity };
    try {
      const res = await fetch("http://localhost:8080/items/addItem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
      router.push("/");
    } catch (error) {
      alert(error);
    }
  };

  const onNameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const onPriceChangeHandler = (e) => {
    setPrice(e.target.value);
  };

  const onQuantityChangeHandler = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div className="mt-20 w-3/4 m-auto">
      <form
        onSubmit={onFormSubmit}
        className="rounded-md flex flex-col min-w-max w-4/12 gap-5 bg-white shadow-md shadow-slate-400 p-10 m-auto"
      >
        <h1 className="text-center text-xl font-semibold">ADD NEW ITEM</h1>
        <div>
          <input
            onChange={onNameChangeHandler}
            className="border-2 focus:scale-105 w-full transition-all duration-75 border-black p-1 rounded-sm"
            type="text"
            id="name"
            placeHolder="item name"
          />
        </div>
        <div>
          <input
            onChange={onPriceChangeHandler}
            required
            className="border-2 focus:scale-105 w-full  transition-all duration-75 border-black p-1 rounded-sm"
            type="text"
            id="price"
            placeHolder="item price"
          />
        </div>
        <div>
          <input
            onChange={onQuantityChangeHandler}
            required
            className="border-2 focus:scale-105 w-full  transition-all duration-75 border-black p-1 rounded-sm"
            type="number"
            id="price"
            min="1"
            placeHolder="item quantity"
          />
        </div>
        <button
          type="submit"
          className="bg-black shadow-slate-800 shadow-md text-amber-50 h-8"
        >
          ADD ITEM
        </button>
      </form>
    </div>
  );
};

export default AddItem;
