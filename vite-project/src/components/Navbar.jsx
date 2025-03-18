import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold">My Product App</div>
        <div>User Profile</div>
      </div>
    </nav>
  );
};

export default Navbar;
