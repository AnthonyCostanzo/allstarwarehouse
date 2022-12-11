import Link from "next/Link";
import Layout from "../components/Layout";
import axios from "axios";
import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/users/login", {
        email,
        password,
      });
      console.log(data);
    } catch (err) {
      alert(err.response.data ? err.response.data.message : err.message);
    }
  };

  return (
    <Layout>
      <div className="w-5/12 m-auto">
        <h1 className="text-2xl font-bold">Login</h1>

        <form className="grid gap-4 mt-5" onSubmit={onFormSubmit}>
          <input
            className="p-3 rounded-sm  border-[1.2px] border-black"
            placeholder="Email"
            onChange={onEmailChange}
          />
          <input
            className="p-3 rounded-sm border-[1.2px] border-black"
            placeholder="Password"
            onChange={onPasswordChange}
          />
          <button
            type="submit"
            className="bg-green-500 p-2 text-white hover:text-yellow-300 "
          >
            LOGIN
          </button>
        </form>
        <p className="mt-2">
          {`Don't have an account?`}
          <Link href="/register" className="text-green-600 hover:font-bold">
            Register
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default Login;
