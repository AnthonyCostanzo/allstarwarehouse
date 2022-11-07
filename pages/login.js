const textInputStyle =
  "pl-2 py-1 rounded-sm  border-2 border-black focus:scale-105";

const Login = () => {
  return (
    <>
      <div className="m-auto mt-20 rounded-sm bg-white shadow-md shadow-slate-500 w-96 p-10  ">
        <h1 className="text-center text-2xl font-semibold"> LOGIN </h1>
        <div className="flex justify-center mt-5 ">
          <form className="rounded-md grid gap-4 ">
            <div>
              {/* <label htmlFor="email" /> */}
              <input
                required
                className={`${textInputStyle}`}
                type="text"
                id="email"
                placeholder="email"
              />
            </div>
            <div>
              {/* <label htmlFor="password"></label> */}
              <input
                required
                className={textInputStyle}
                type="text"
                id="password"
                placeholder="password"
              />
            </div>
            <button
              type="submit"
              className="bg-black shadow-slate-800 shadow-md text-amber-50 h-8"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
