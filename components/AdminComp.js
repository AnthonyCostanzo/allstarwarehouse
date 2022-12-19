import UserList from "./UserList";
const AdminComp = ({ users }) => {
  return (
    <div className="mt-10">
      <div className="bg-gradient-to-br from-sky-600 to-sky-500 rounded-b-md p-3 w-1/2 space-y-2 m-auto min-w-max">
        <h3 className="text-xl text-center text-white font-bold">
          Welcome to the Admin Portal
        </h3>
        <p className="text-center text-sky-50 font-bold">
          Here is where you can manage and view your inventory & users
        </p>
      </div>
      <div className="mt-10 w-10/12 p-5">
        <h1 className="mb-5 font-semibold text-xl md:ml-10">ACTIVE USERS</h1>
        <UserList users={users} />
      </div>
    </div>
  );
};

export default AdminComp;
