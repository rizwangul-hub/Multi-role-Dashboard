import React, { useState } from "react";
import Logo from "../../public/image/NovaCRM.png";

import { useNavigate } from "react-router-dom";
import Sliders from "../component/Slider";

const SignIn = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (!fullName || !email || !password || !role) {
      alert("Please complete all signup fields.");
      return;
    }

    const userData = {
      fullName,
      email,
      password,
      role,
    };

    localStorage.setItem("userData", JSON.stringify(userData));
    alert("Signup successful. Please log in.");
    navigate("/login");
  };

  return (
    <div className="w-screen h-screen flex items-center justify-end bg-gray-100">
      <div className="w-[90%] h-[90%] bg-white rounded-2xl flex overflow-hidden shadow-lg">
        {/* LEFT SIDE */}
        <div className="w-[40%] p-10 flex flex-col justify-center">
          <div className="flex justify-between pb-11">
            <img src={Logo} alt="NovaCRM Logo" className="w-32 mb-4" />
            <p>
              Already have an account?{" "}
              <button
                className="text-teal-600 underline"
                onClick={() => navigate("/login")}
              >
                Log in
              </button>
            </p>
          </div>
          <h1 className="text-3xl font-bold mb-2">Welcome to NovaCRM!</h1>
          <p className="text-gray-500 mb-6">
            Best tool for business management
          </p>

          {/* Google Button */}
          <button className="border rounded-lg py-3 flex items-center justify-center gap-2 mb-4 hover:bg-gray-100">
            <img
              src="\public\image\download.jpg"
              alt="google"
              className="w-5"
            />
            Sign up with Google
          </button>

          {/* OR Divider */}
          <div className="flex items-center justify-center my-4">OR</div>

          {/* FORM */}
          <form onSubmit={handleSignup} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-teal-500"
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-teal-500"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-teal-500"
            />

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="border rounded-lg p-3"
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="customer">Customer</option>
              <option value="sale">Sales</option>
              <option value="marketing">Marketing</option>
            </select>

            <button
              type="submit"
              className="bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition"
            >
              Sign Up
            </button>

            <p className="text-xs text-gray-400 text-center">
              By clicking on sign up, you agree to NovaCRM's <br />
              Terms of Service and Privacy Policy
            </p>
          </form>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="w-1/2 hidden md:block relative">
          <Sliders />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
