const textInputStyle =
  "pl-2 py-1 rounded-sm  border-[1px] border-sky-500 focus:scale-105";

const Login = () => {
  const onNameChange = (e) => {};

  const onPasswordChange = (e) => {};

  const onFormSubmit = () => {
    event.preventDefault();
    localStorage.setItem("user", JSON.stringify({ username }));
  };

  return (
    <>
      <div className="m-auto rounded-md mt-20 bg-gradient-to-br from-gray-100 to-gray-300 shadow-md shadow-gray-600 w-96 p-10  ">
        <h1 className="text-center text-2xl font-semibold text-sky-500">
          {" "}
          LOGIN{" "}
        </h1>
        <div className="flex justify-center mt-5 ">
          <form onSubmit={onFormSubmit} className="rounded-md grid gap-4 ">
            <div>
              {/* <label htmlFor="email" /> */}
              <input
                onChange={onNameChange}
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
                onChange={onPasswordChange}
                required
                className={textInputStyle}
                type="text"
                id="password"
                placeholder="password"
              />
            </div>
            <button
              type="submit"
              className="bg-sky-800 shadow-slate-800 shadow-md text-white h-8"
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
