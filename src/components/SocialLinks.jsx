import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="p-4 max-w-xs bg-white rounded-lg">
      <h2 className="text-lg font-bold mb-4">Find Us On</h2>

      <div className="space-y-2">
        <button className="flex items-center w-full p-2 border border-gray-200 rounded-lg hover:bg-gray-100">
          <FaFacebook size={20} className="text-blue-600 mr-3" />
          <span>Facebook</span>
        </button>
        
        <button className="flex items-center w-full p-2 border border-gray-200 rounded-lg hover:bg-gray-100">
          <FaTwitter size={20} className="text-blue-400 mr-3" />
          <span>Twitter</span>
        </button>
        
        <button className="flex items-center w-full p-2 border border-gray-200 rounded-lg hover:bg-gray-100">
          <FaInstagram size={20} className="text-pink-500 mr-3" />
          <span>Instagram</span>
        </button>
      </div>
    </div>
  );
}

export default SocialLinks;
