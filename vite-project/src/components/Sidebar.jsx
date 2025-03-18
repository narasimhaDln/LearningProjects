import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-200 w-64 h-full p-4 shadow-lg">
      <h2 className="font-bold text-xl mb-4">Menu</h2>
      <ul className="space-y-2">
        <li>
          <Link
            to="/"
            className="block p-3 rounded-lg bg-blue-500 text-white text-center hover:bg-blue-600 transition duration-200"
          >
            Product Details
          </Link>
        </li>
        <li>
          <Link
            to="/compare"
            className="block p-3 rounded-lg bg-blue-500 text-white text-center hover:bg-blue-600 transition duration-200"
          >
            Compare Products
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
