import Link from "next/Link";
import Layout from "../components/Layout";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Store } from "../utils/store";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const Register = () => {
  const router = useRouter();

  const { redirect } = router.query;

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password Mismatch");
      return;
    }
    try {
      const { data } = await axios.post("/api/users/register", {
        name,
        email,
        password,
      });
      dispatch({ type: "USER_LOGIN", payload: data });
      Cookies.set("userInfo", JSON.stringify(data));
      router.push("/");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Layout>
      <div className="w-5/12 m-auto">
        <h1 className="text-2xl font-bold">Register</h1>

        <form className="grid gap-4 mt-5" onSubmit={onFormSubmit}>
          <input
            className="p-3 rounded-sm  border-[1.2px] border-black"
            placeholder="Name"
            onChange={onNameChange}
          />
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
          <input
            className="p-3 rounded-sm border-[1.2px] border-black"
            placeholder="Confirm Password"
            onChange={onConfirmPasswordChange}
          />

          <button
            type="submit"
            className="bg-green-500 p-2 text-white hover:text-yellow-300 "
          >
            Register
          </button>
        </form>
        <p className="mt-2">
          {`Already have an account?`}
          <Link
            href={`/login?redirect=${redirect || "/"}`}
            className="text-green-600 hover:font-bold"
          >
            Login
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default Register;
