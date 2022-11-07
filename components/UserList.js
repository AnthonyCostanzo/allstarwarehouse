import Link from "next/Link";
import { useRouter } from "next/router";

const UserList = ({ users }) => {
  const router = useRouter();

  return (
    <div className="md:w-3/4 m-auto">
      <table className="font-semibold w-3/12 text-center m-auto min-h-max">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
          </tr>
        </thead>
        <tbody className="divide-y-2 divide-black">
          {users.map((user) => (
            <tr key={user.userId}>
              <td>{user.userId}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
