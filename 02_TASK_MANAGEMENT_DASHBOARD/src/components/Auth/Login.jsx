import React, { useState } from "react";

function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center ">
        <div className="border-2 border-emerald-800 p-20 rounded-xl">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="flex flex-col items-center justify-center"
          >
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              className="outline-none rounded-full bg-transparent py-3 px-5 border-2 border-emerald-700 text-xl  text-white placeholder:text-gray-700"
              type="email"
              placeholder="Enter your email"
            />
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              className="outline-none rounded-full bg-transparent py-3 px-5 border-2 border-emerald-700 text-xl mt-10 text-white placeholder:text-gray-700"
              type="password"
              placeholder="Enter your password"
            />
            <button className="text-white outline-none rounded-full  py-3 px-5 border-none bg-emerald-700 text-xl mt-5">
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
