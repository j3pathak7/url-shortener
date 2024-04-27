import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6">
      <div className="text-gray-400 flex justify-center">
        &copy; {new Date().getFullYear()} JP All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
