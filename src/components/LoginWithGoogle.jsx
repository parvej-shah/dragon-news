import React from 'react'
import { FaGoogle, FaGithub } from "react-icons/fa";
export default function LoginWithGoogle() {
  return (
    <div className="flex flex-col space-y-4 mx-2">
      <h2 className="text-lg font-bold">Login With</h2>
      
      <button className="btn btn-outline btn-primary flex items-center space-x-2">
        <FaGoogle size={20} />
        <span>Login with Google</span>
      </button>
      
      <button className="btn btn-outline flex items-center space-x-2">
        <FaGithub size={20} />
        <span>Login with Github</span>
      </button>
    </div>
  )
}
