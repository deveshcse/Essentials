import { useState } from "react";
import { registerUser, loginUser } from "../Utils/authApis";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../Utils/authSlice";
import { useNavigate } from "react-router-dom";

const SignUpLogin = () => {
  const [signUpForm, setSignUpForm] = useState(true);
  const [username, setUserame] = useState("");
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = async () => {
    if (signUpForm) {
      registerUser({ username, email, password });
    } else {
      try {
        const data = await loginUser({ email, password });
        localStorage.setItem("token", JSON.stringify(data.data.accessToken));
        dispatch(loginSuccess());
        navigate(-1);
        
      } catch (err) {
        console.error(err.message);
      }
    }
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
              value={username}
              placeholder="Username"
              className="p-2 rounded-lg"
              onChange={(e) => setUserame(e.target.value)}
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            className="p-2 rounded-lg"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => SetPassword(e.target.value)}
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
            {signUpForm ? `Already have account?` : `New to Essentials? `}
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
