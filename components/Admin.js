import InventoryList from "./InventoryList";
const Admin = () => {
  return (
    <div className="mt-10">
      <div className="bg-gradient-to-br from-sky-500 to-sky-300 rounded-b-md p-3 w-1/2 space-y-2 m-auto min-w-max">
        <h3 className="text-xl">Welcome to the Admin Portal</h3>
        <p>Here is where you can manage and view your inventory</p>
      </div>
      <div className="mt-10">
        <h1 className="mb-5 font-semibold text-xl">ACTIVE USERS</h1>
        {/* <UserList /> */}
      </div>
      <InventoryList />
    </div>
  );
};
