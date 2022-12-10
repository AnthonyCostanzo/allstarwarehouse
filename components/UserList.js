import Link from "next/Link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // const loadUsers = async () => {
    //   try {
    //     const userRes = await fetch("http://localhost:8080/user/all");
    //     const userData = await userRes.json();
    //     setUsers(userData);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // };
    // loadUsers();
  }, []);

  const router = useRouter();
  return (
    <table className="font-semibold w-3/12 text-center m-auto min-h-max">
      <thead>
        <tr>
          <th>ID</th>
          <th>EMAIL</th>
        </tr>
      </thead>

      <tbody className="divide-y-2 divide-black">
        {users.length
          ? users.map((user) => (
              <tr key={user.userId}>
                <td>{user.userId}</td>
                <td>{user.email}</td>
              </tr>
            ))
          : null}
      </tbody>
    </table>
  );
};

export default UserList;
