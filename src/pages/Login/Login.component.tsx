import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import gLogo from "../../images/login/google.png";
import useAuth from "../../hooks/UseAuth";
interface User {
  name: string;
  id: number;
}
interface Form {
  email: string;
  password: string;
}

const Login = () => {
  const {
    setUser,
    errorLogin,
    setErrorLogin,
    signInUsingGoogle,
    setIsLoading,
    handleEmail,
    handlePassword,
    handleLogin,
    // saveUser,
  } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const redirect_url = location.state?.from || "/";

  const submit = (e: any) => {
    e.preventDefault();
    handleLogin(e)
      ?.then((result: any) => {
        const user = result.user;
        setUser(user);
        setErrorLogin("");
        navigate(redirect_url);
      })
      .catch((error: any) => {
        setErrorLogin("User Not found, please register");
      });
  };

  const GoogleSignIn = () => {
    signInUsingGoogle()
      ?.then((result: any) => {
        const user = result.user;
        setUser(user);
        // saveUser(user.email, user.displayName);
        navigate(redirect_url);
      })
      .catch((error: any) => {
        console.log("Error", error);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <>
      {/* Login section start  */}
      <div className="flex justify-center items-center h-screen bg-blue-50">
        <div className="w-80 md:w-96 shadow-lg px-8 py-8 bg-body rounded-lg bg-white">
          <h4 className="text-3xl text-blue-400 font-bold">
            S<span className="text-gray-500 text-xl">trade</span>
          </h4>
          <span className="text-xs text-gray-400">Welcome back !!!</span>
          <h1 className="text-4xl font-bold mt2 mt-4 mb-8">Sign in</h1>
          <form onSubmit={submit}>
            <div className="mb-1 text-start">
              <label htmlFor="exampleInputEmail1" className="">
                Email
              </label>
              <input
                onBlur={handleEmail}
                type="email"
                name="email"
                placeholder="email@gmail.com"
                className="w-full py-2 px-2 bg-blue-50 text-gray-700 outline-none mb-5 rounded-md"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="text-start">
              <div className="flex justify-between items-center">
                <label htmlFor="exampleInputPassword1" className="">
                  Password
                </label>
                <span className="text-xs text-gray-400">Forgot Password ?</span>
              </div>
              <input
                onBlur={handlePassword}
                type="password"
                name="password"
                placeholder="password"
                className="w-full py-2 px-2 bg-blue-50 text-gray-700 outline-none rounded-md"
                id="exampleInputPassword1"
                required
              />
            </div>
            <div className="mb-3 text-xs text-red-400">{errorLogin}</div>
            <button
              type="submit"
              className="block text-sm mx-auto px-6 py-2.5 bg-blue-500  hover:bg-blue-600 hover:outline outline-2 outline-blue-600 outline-offset-2 rounded-full text-white"
            >
              Sing in
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="ml-2 w-6 h-6 inline"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </span>
            </button>
          </form>
          <p className="text-center font-sm text-gray-400  mt-6 mb-4">
            I don't have an account?
            <span className="text-blue-600">
              <Link to="/register"> Sign up</Link>
            </span>
          </p>
          <hr />
          <button
            onClick={GoogleSignIn}
            className="mt-3 p-1.5 flex mx-auto rounded-full border-solid border-2 border-blue-500 hover:bg-blue-400 hover:text-white"
          >
            <div>
              <img className="flex-grow-1 mr-5" src={gLogo} alt="" />
            </div>
            <p>Continue with Google</p>
          </button>
          <p className="text-center text-blue-600 mt-1">
            <Link to="/"> Goto Home page</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
