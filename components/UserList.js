import { useRouter } from "next/router";
const UserList = ({ users }) => {
  const router = useRouter();
  return (
    <div className="p-1">
      <table className="font-semibold md:w-10/12 text-center m-auto min-h-max">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>EMAIL</th>
          </tr>
        </thead>

        <tbody className="divide-y-2 divide-black">
          {users.length
            ? users.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
