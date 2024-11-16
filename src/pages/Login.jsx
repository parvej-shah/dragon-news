import { useAuth } from "../auth/AuthProvider";
import React, { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const {signInUser} = useAuth();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();

    // Access input values directly using refs
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInUser(email,password)
    .then(()=>{
      alert("User logged in successfully");
      navigate('/');
    })
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex items-center min-h-screen w-full">
      <div className="bg-white p-14 rounded-2xl shadow-md w-full md:w-2/5 mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-4">Login Your Account</h2>
        <div className="divider"></div>
        <form onSubmit={handleLogin}>
          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              ref={emailRef}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Password Field */}
          <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              ref={passwordRef}
              className="input input-bordered w-full "
              required
            />
            <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className=" text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-block bg-black text-white hover:bg-gray-800 mt-5"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-sm mt-4">
          Don’t Have An Account?{" "}
          <Link to={"/auth/register"} className="text-red-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
