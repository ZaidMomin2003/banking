import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="VforUloans" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {/* Iterate through existing nav links */}
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}

        {/* Car Loan Page Link */}
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] ${
            active === "Car Loan" ? "text-white" : "text-dimWhite"
          } ml-10`} // Adjust spacing with margin-left
          onClick={() => setActive("Car Loan")}
        >
          <Link to="/car-loan">Car Loan</Link>
        </li>

        {/* Loan Calculator Page Link */}
        <li
          className={`font-poppins font-normal cursor-pointer text-[16px] ${
            active === "Loan Calculator" ? "text-white" : "text-dimWhite"
          } ml-10`} // Adjust spacing with margin-left
          onClick={() => setActive("Loan Calculator")}
        >
          <Link to="/loan-calculator">Loan Calculator</Link>
        </li>
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => {
                  setActive(nav.title);
                  setToggle(false); // Close mobile menu after clicking
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}

            {/* Car Loan Page Link for Mobile */}
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                active === "Car Loan" ? "text-white" : "text-dimWhite"
              } mt-4`} // Adjust spacing with margin-top
              onClick={() => {
                setActive("Car Loan");
                setToggle(false); // Close mobile menu after clicking
              }}
            >
              <Link to="/car-loan">Car Loan</Link>
            </li>

            {/* Loan Calculator Page Link for Mobile */}
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                active === "Loan Calculator" ? "text-white" : "text-dimWhite"
              } mt-4`} // Adjust spacing with margin-top
              onClick={() => {
                setActive("Loan Calculator");
                setToggle(false); // Close mobile menu after clicking
              }}
            >
              <Link to="/loan-calculator">Loan Calculator</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
