import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../UserContext";

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
      const { data } = await axios.post("/login", { email, password });
      alert("Login successful");
      setUser(data);
      setRedirect(true);
    } catch (e) {
      console.log(e);
      alert("Login failed");
    }
  }

  if (redirect) return <Navigate to={"/account"} />;

  return (
    <div className="h-full w-full  flex flex-col items-center justify-center overflow-hidden p-4 bg-gray-400">
      <div className=" flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-black mb-2">Login</h1>
        <form
          onSubmit={handleLoginSubmit}
          className="border-2 border-black rounded-lg w-[500px] bg-white max-w-[90vw] shadow-lg"
        >
          <div className="p-4">
            <h1 className="text-2xl font-extrabold text-black px-2">Email</h1>
            <input
              type="email"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              placeholder="Enter your email"
              className="w-full py-4 px-2 mt-2 mb-4 border-2 border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <h1 className="text-2xl font-extrabold text-black px-2">
              Password
            </h1>
            <input
              type="password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              placeholder="Enter your password"
              className="w-full py-4 px-2 mt-2 mb-4 border-2 border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-red-500 text-white font-bold py-2 w-full rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Login
            </button>
            <div className="text-center mt-3 text-gray-600">
              Do not have an account yet?{" "}
              <Link to="/register" className="text-black underline">
                Register
              </Link>
            </div>
          </div>
        </form>
        <div className="h-full w-full bg-gray-400 flex flex-col items-center justify-center overflow-hidden mt-2">
          <div
            type="submit"
            className="p-2 flex bg-red-600 rounded-lg border-2 border-black items-center gap-2 cursor-pointer shadow-white shadow-md"
            // onClick={loginGoogle}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPwdkceagT7Apjjp8wz0_GaJcIWkj72NYQPA&s"
              className="h-10 w-10"
            ></img>
            <p className="text-white sm:text-4xl  pb-1">
              Login with google
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
