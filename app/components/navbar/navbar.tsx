import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-light text-dark">
      <div className="container mx-20 px-4 py-2 flex items-center justify-between">
        <a className="text-3xl font-bold text-red-500" href="#">Foodle</a>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="hidden md:flex space-x-6 text-xl">
          <a className="text-dark" href="#">Home</a>
          <a className="text-dark" href="#">Offer</a>
          <a className="text-dark" href="#">Service</a>
          <a className="text-dark" href="#">Menu</a>
          <a className="text-dark" href="#">About Us</a>
        </div>
        <div className="hidden md:flex space-x-4">
          <span className="text-dark m-2">Login</span>
          <a className=" text-black py-2 px-6 rounded-full border-2 border-red-500 inline-block" href="#">Sign Up</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
