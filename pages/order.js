const Order = () => {
  return (
    <div className=" md:w-7/12 md:m-auto mt-10 ">
      <h1 className="text-center text-xl font-bold">Active Orders</h1>

      <div className="bg-white min-w-max mt-10 md:p-10 shadow-md shadow-slate-500">
        <table className="w-full text-center">
          <thead>
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

      <div className="bg-white min-w-max mt-10 md:p-10 shadow-md shadow-slate-500">
        <table className="w-full text-center">
          <thead>
            <th>ORDER_ID</th>
            <th>ITEM_NAME</th>
            <th>USER_ID</th>
            <th>SHIPPING_ADDRESS</th>
          </thead>
          <tbody>
            <tr>
              <td>2</td>
              <td>Network Adatper</td>
              <td>8</td>
              <td>456 wayne ave</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
