import Layout from "../components/Layout";
import AdminComp from "../components/AdminComp";
import User from "../models/User";
import Product from "../models/Product";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { useSession } from "next-auth/react";
import db from "../utils/db";
const AdminPage = ({ users, products }) => {
  const router = useRouter();
  const { status, data: session } = useSession();
  useEffect(() => {
    if (!session.user || session.user.isAdmin !== true) {
      router.push("/");
    }
  }, []);
  const handleDelete = async (id) => {
    await axios.delete(`/api/admin/products/delete/${id}`);
    router.reload();
  };
  return (
    <Layout>
      <AdminComp users={users} />
      <div className=" mb-10">
        <h1 className="text-xl font-bold ml-10 mb-5">Listed Products</h1>
        <table className="w-10/12 m-auto text-center">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th>In Stock</th>
            </tr>
          </thead>
          <tbody className="divide-y-2 divide-black font-bold">
            {products.map((prod) => (
              <tr key={prod._id}>
                <td
                  className="relative h-28
                "
                >
                  <Image alt={prod.description} fill src={prod.image} />
                </td>
                <td>{prod.name}</td>
                <td>{prod.brand}</td>
                <td>${prod.price}</td>
                <td>{prod.inStock}</td>
                <td>
                  <button
                    onClick={() => handleDelete(prod._id)}
                    className="bg-red-500 text-white w-20 h-10 text-2xl"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  await db.connect();
  let users = await User.find({}).lean();
  let products = await Product.find({}).lean();
  await db.disconnect();
  return {
    props: {
      users: users.map((user) => db.convertDocToObject(user)),
      products: products.map((prod) => db.convertDocToObject(prod)),
    },
  };
};
AdminPage.auth = true;
export default AdminPage;
