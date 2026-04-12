import { Slider } from "@mantine/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sliders from "../component/Slider";
import Logo from "../../public/image/NovaCRM.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUserJson = localStorage.getItem("userData");
    if (!storedUserJson) {
      alert("No account found. Please sign up first.");
      navigate("/");
      return;
    }

    const storedUser = JSON.parse(storedUserJson);

    if (email === storedUser.email && password === storedUser.password) {
      localStorage.setItem("role", storedUser.role);
      navigate("/dashboards");
    } else {
      alert("Invalid email or password.");
      setPassword("");
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-end bg-gray-100">
      <div className="w-[90%] h-[90%] bg-white rounded-2xl flex overflow-hidden shadow-lg">
        <div className="w-[40%] p-10 flex flex-col justify-center">
          <div className="flex justify-between pb-11">
            <img src={Logo} alt="NovaCRM Logo" className="w-32 mb-4" />
            <p>
              Already have an account?{" "}
              <button
                className="text-teal-600 underline"
                onClick={() => navigate("/")}
              >
                Log in
              </button>
            </p>
          </div>
          <h1 className="text-3xl font-bold mb-2">Welcome back!</h1>
          <p className="text-gray-500 mb-6">Enter your details to continue</p>

          <button className="border rounded-lg py-3 flex items-center justify-center gap-2 mb-4 hover:bg-gray-100">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5"
            />
            Sign in with Google
          </button>

          <div className="flex items-center justify-center my-4">OR</div>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-teal-500"
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-teal-500"
            />

            <button
              type="submit"
              className="bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition"
            >
              Log In
            </button>
          </form>
        </div>
        <div className="w-1/2 hidden md:block relative">
          <Sliders />
        </div>
      </div>
    </div>
  );
};

export default Login;
