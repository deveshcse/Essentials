import React from "react";
import { useState, useRef } from "react";
import {useSelector} from "react-redux";

const SignUpLogin = () => {
  const [signUpForm, setSignUpForm] = useState(true);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleClick = () => {
    console.log(
      "onSubmit",
      "name:",
      name.current.value,
      "email:",
      email.current.value,
      "password:",
      password.current.value
    );
  };

  return (
    <div className="flex p-2 bg-teal-100 mx-auto justify-center">
      <div className="p-20 bg-transparent border-2 border-gray-400 rounded-lg">
        <div>
          <h3 className="font-heading text-4xl py-1">
            {signUpForm ? `Create an account` : `Log in to Essentials`}
          </h3>
          <h5 className="font-title text-base py-1">
            Enter your details below
          </h5>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4"
        >
          {signUpForm && (
            <input
              type="text"
              ref={name}
              placeholder="Name"
              className="p-2 rounded-lg"
            />
          )}
          <input
            type="email"
            ref={email}
            placeholder="Email"
            className="p-2 rounded-lg"
          />
          <input
            type="password"
            ref={password}
            placeholder="Password"
            className="p-2 rounded-lg"
          />
          <button
            type="button"
            onClick={handleClick}
            className="bg-red-500 p-2 rounded-lg"
          >
            {signUpForm ? `Create Account` : `Log In`}
          </button>
        </form>
        <div className="text-center mt-4">
          <span>
            {signUpForm ? `Already have account?` : `New to Essentials? `}{" "}
          </span>
          <span
            className="cursor-pointer underline"
            onClick={() => setSignUpForm(!signUpForm)}
          >
            {signUpForm ? `Log In` : `Sign Up`}{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUpLogin;
// onChange={(e) => setEmail(e.target.value)}
//             onChange={(e) => setPassword(e.target.value)}
//               onChange={(e) => setName(e.target.value)}
