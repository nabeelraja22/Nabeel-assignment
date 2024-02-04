import React from "react";

const Header = () => {
  return (
    <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex justify-between h-16 mx-auto">
        <ul className="items-stretch hidden space-x-3 lg:flex"></ul>
        <h1 className="flex items-center justify-center text-4xl font-semibold lg:justify-start">
          <a href="/" className="dark:text-violet-400">
            Movie Tracking System
          </a>
        </h1>
        <div className="flex items-center md:space-x-4"></div>
        <button title="Open menu" type="button" className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
