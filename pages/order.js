const Order = () => {
  return (
    <div className=" md:w-7/12 md:m-auto mt-10 ">
      <h1 className="text-center text-xl font-bold">Active Orders</h1>

      <div className="bg-gradient-to-br rounded-md from-sky-500 to-sky-800 min-w-max mt-10 md:p-10 shadow-md shadow-gray-400">
        <table className="w-full text-center text-white">
          <thead className="">
            <th>ORDER_ID</th>
            <th>ITEM_NAME</th>
            <th>USER_ID</th>
            <th>SHIPPING_ADDRESS</th>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>rasberry pi</td>
              <td>6</td>
              <td>123 sesame street</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
