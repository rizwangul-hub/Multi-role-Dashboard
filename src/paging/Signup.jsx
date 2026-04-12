import React from "react";
import computer from "../../public/image/image (6).png";

const Signup = () => {
  const [cheak, setCheack] = {
    path: "/admin",
    path: "/user",
    path: "/vender",
  };
  return (
    <div className="w-[80%] h-[80vh] flex justify-center m-auto items-center">
      <div className="w-[90%] bg-slate-50 flex justify-evenly gap-4">
        <div className="flex flex-col">
          <h1 className="text-[64px] w-[550px]">Computer Shop System</h1>
          <div className="text-[36px] text-[#FF0080]">Sign In</div>
          <p>Enter the email and password provided to log in.</p>
          <form action="" className="flex flex-col w-[360px] gap-6">
            <label htmlFor="">Email</label>
            <input
              className="w-full border-black  p-2"
              type="email"
              placeholder="Email"
              name=""
              id=""
            />
            <label htmlFor="">Password</label>
            <input
              className="w-full border-black p-2 h-[40px]"
              type="password"
              placeholder="password"
              name=""
              id=""
            />
            <div className="flex gap-2">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Remember me</label>
            </div>
            <button className="bg-[#FF0080] w-full pt-3 pb-3 rounded">
              SIGN IN
            </button>
          </form>
        </div>
        <div>
          <img src={computer} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
