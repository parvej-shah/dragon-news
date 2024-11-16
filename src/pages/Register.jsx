import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import React from "react";

function Register() {
    const {createUser} = useAuth();
    const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Basic password validation
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

      // Handle successful registration (e.g., redirect to login page, show success message)
      createUser(email,password)
    // Redirect or show success message here
      .then(()=>{
          alert("Registration successful!");
          navigate('/');
      })
      .catch((error)=>{
        if (error.code === "auth/weak-password") {
          alert("Password is too weak. Please choose a stronger password.");
        } else if (error.code === "auth/email-already-in-use") {
          alert("Email address is already in use.");
        } else {
          alert("An error occurred. Please try again later.");
        }
      });}

  return (
    <div className="flex justify-center items-center min-h-screen">
        <div className="bg-base-100 p-10 rounded-lg shadow-lg w-full md:w-2/5 mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Register your account</h2>
      <hr className="my-4" />
      <form onSubmit={handleSubmit}>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            name="name"
            className="input input-bordered"
            placeholder="Enter your name"
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photoUrl"
            className="input input-bordered"
            placeholder="Enter your photo URL"
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            className="input input-bordered"
            placeholder="Enter your email address"
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            className="input input-bordered"
            placeholder="Enter your password"
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <div className="label-text flex justify-center items-center">
              <input type="checkbox" className="checkbox" />
              <span className="ml-2">Accept Term & Conditions</span>
            </div>
          </label>
        </div>

        <button type="submit" className="btn bg-black text-white hover:bg-gray-800 w-full">
          Register
        </button>
      </form>
    </div>
    </div>
  );
}

export default Register;
