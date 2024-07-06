import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(ev) {
    ev.preventDefault();
    try {
      await axios.post(
        "/register",
        {
          name,
          email,
          password,
        },
        {
          withCredentials: true, // Include credentials (cookies)
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert("Registration successful. Now you can log in");
    } catch (e) {
      console.log(e);
      alert("Registration failed. Please try again later");
    }
  }

  return (
    <div className="h-full w-full bg-gray-400 flex flex-col items-center justify-center overflow-hidden p-4">
      <div className="">
        <h1 className="text-4xl mb-4 font-extrabold text-black w-full text-center">
          Register
        </h1>
        <form
          onSubmit={registerUser}
          className="border-2 border-black rounded-lg w-[500px] bg-white max-w-[90vw] shadow-lg"
        >
          <div className="p-4">
            <h1 className="text-2xl font-extrabold text-black px-2">Name</h1>
            <input
              type="text"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
              placeholder="Enter your name"
              className="w-full py-4 px-2 mt-2 mb-4 border-2 border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
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
              Register
            </button>
            <div className="text-center mt-3 text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-black underline">
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
