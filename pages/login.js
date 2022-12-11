import Link from "next/Link";
import Layout from "../components/Layout";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Store } from "../utils/store";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { signIn, useSession } from "next-auth/react";
import { getError } from "../utils/error";

const Login = () => {
  const router = useRouter();
  const { redirect } = router.query;
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || "/");
    }
  }, [router, session, redirect]);

  const submitHandler = async ({ email, password }) => {
    try {
      const result = await signIn("credentials", {
        redirect: redirect || "/",
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };

  return (
    <Layout>
      <div className="w-5/12 m-auto">
        <h1 className="text-2xl font-bold">Login</h1>

        <form
          className="grid gap-4 mt-5"
          onSubmit={handleSubmit(submitHandler)}
        >
          <input
            autoFocus
            {...register("email", {
              required: "Please enter email",
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i,
                message: "Enter a valid email",
              },
            })}
            className="p-3 rounded-sm  border-[1.2px] border-black"
            placeholder="Email"
          />
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}

          <input
            autoFocus
            {...register("password", {
              required: "Please enter a password",
              minLength: { value: 5, message: "Enter at least 5 characters" },
            })}
            className="p-3 rounded-sm border-[1.2px] border-black"
            placeholder="Password"
          />
          {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
          )}

          <button
            type="submit"
            className="bg-green-500 p-2 text-white hover:text-yellow-300 "
          >
            LOGIN
          </button>
        </form>
        <p className="mt-2">
          {`Don't have an account?`}
          <Link
            href={`/register?redirect=${redirect || "/"}`}
            className="text-green-600 hover:font-bold"
          >
            Register
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default Login;
