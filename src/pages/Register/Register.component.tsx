import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/UseAuth";

const Register = () => {
  const {
    useEmail,
    errorRegister,
    handleName,
    handleEmail,
    handlePassword,
    confirmPassword,
    handleRegister,
  } = useAuth();

  const navigate = useNavigate();

  const register = (e: any) => {
    handleRegister(navigate);
    e.preventDefault();
  };
  return (
    <div className="flex justify-center items-center h-screen bg-blue-50">
      {/* Registration component start */}
      <div className="block bg-white p-6 rounded-xl shadow-lg shadow-blue-300">
        <h2 className="text-blue-700 text-3xl font-semibold my-4">Register</h2>
        <form onSubmit={register}>
          {/* full name */}
          <div className="flex fle-row mb-2">
            {/* first name */}
            <div className="w-1/2 mr-1">
              <label htmlFor="fname" className="text-sm">
                First Name
              </label>
              <input
                onBlur={handleName}
                type="text"
                name="name"
                placeholder="hasib"
                className="h-8 w-full rounded-md border border-blue-300 px-2 py-4 bg-transparent outline-blue-600 shadow-sm"
                required
              />
            </div>
            {/* last name */}
            <div className="w-1/2 mr-1">
              <label htmlFor="lname" className="text-sm">
                Last Name
              </label>
              <input
                onBlur={handleName}
                type="text"
                name="name"
                placeholder="shovon"
                className="h-8 w-full rounded-md border border-blue-300 px-2 py-4 bg-transparent outline-blue-600 shadow-sm"
                required
              />
            </div>
          </div>

          {/* email */}
          <div className="mb-2">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <br />
            <input
              onBlur={handleEmail}
              type="email"
              name="email"
              placeholder="email@gmail.com"
              id="email"
              className="h-8 w-full rounded-md border border-blue-300 text-sm px-2 py-4 bg-transparent outline-blue-600 shadow-sm"
              required
            />
          </div>
          <div className="mb-2 text-xs text-red-500">{useEmail}</div>
          {/* password */}
          <div className="mb-2">
            <label htmlFor="email" className="text-sm">
              password
            </label>
            <br />
            <input
              onBlur={handlePassword}
              type="password"
              name="password"
              placeholder="password"
              id="password"
              className="h-8 w-full rounded-md border border-blue-300 text-sm px-2 py-4 bg-transparent outline-blue-600 shadow-sm"
              required
            />
          </div>
          <div className="mb-2 text-xs text-red-500">{errorRegister}</div>
          {/* confirm password */}
          <div className="mb-2">
            <label htmlFor="confirmPassword" className="text-sm">
              Confirm Password
            </label>
            <br />
            <input
              onBlur={confirmPassword}
              type="password"
              name="confirmPassword"
              placeholder="confirm password"
              id="confirmPassword"
              className="h-8 w-full rounded-md border border-blue-300 text-sm px-2 py-4 bg-transparent outline-blue-600 shadow-sm"
              required
            />
          </div>
          <div className="mb-2 text-xs text-red-500">{errorRegister}</div>
          {/* radio button for gender */}
          <div className="mb-2 text-sm">
            <p className="mt-2">Gender</p>
            <input
              type="radio"
              name="gender"
              value="male"
              className="text-sm mx-1"
            />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              name="gender"
              value="female"
              className="text-sm mx-1"
            />
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              name="gender"
              value="other"
              className="text-sm mx-1"
            />
            <label htmlFor="other">Other</label>
          </div>

          {/* sign up */}
          <button className="bg-blue-500 w-full h-10 mt-5 mb-5 text-white rounded-md hover:bg-blue-600 hover:outline outline-2 outline-blue-600 outline-offset-2 text-sm">
            Sign up
          </button>
        </form>
        <hr />
        <p className="text-center text-gray-400  mt-3">
          Already have a account?
          <span className="text-blue-600">
            <Link to="/login"> Sign in</Link>
          </span>
        </p>
        <p className="text-center text-blue-600">
          <Link to="/"> Goto Home page</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
