import React from "react";
import logo from "../assets/buyoyo/buyoyo-light mode.png";
import "./Header.css";
import { FaHamburger } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  // {
  //   search, setSearch, searchproduct;
  // }
  // const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <>
      <div className="header">
        <div className="w-full h-20 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
          <nav className="h-full px-4 max-w-container mx-auto relative">
            <div className="flex items-center justify-between h-full">
              <a href="/">
                <div>
                  <img className="w-20 object-cover" src={logo} />
                </div>
              </a>
              <div>
                <ul
                  className="flex items-center w-auto z-50 p-0 gap-2"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <a
                    className="flex font-bold hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#532b1c] hover:underline underline-offset-[4px] decoration-[1px] hover:text-yellow-300 md:border-r-[2px] border-r-yellow-300 hoverEffect last:border-r-0 active"
                    href="/"
                  >
                    <li>Home</li>
                  </a>
                  <a
                    className="flex font-bold hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#532b1c] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#e3daa3] md:border-r-[2px] border-r-yellow-300 hoverEffect last:border-r-0"
                    href="/shop"
                  >
                    <li>Shop</li>
                  </a>
                  <a
                    className="flex font-bold hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#532b1c] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#e3daa3] md:border-r-[2px] border-r-yellow-300 hoverEffect last:border-r-0"
                    href="/about"
                  >
                    <li>About</li>
                  </a>
                  <a
                    className="flex font-bold hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#532b1c]-500 hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#e3daa3] md:border-r-[2px] border-r-yellow-300 hoverEffect last:border-r-0"
                    href="/contact"
                  >
                    <li>Contact</li>
                  </a>
                  <a
                    className="flex font-bold hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#532b1c] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#e3daa3] md:border-r-[2px] border-r-yellow-300 hoverEffect last:border-r-0"
                    href="/journal"
                  >
                    <li>Journal</li>
                  </a>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div className="w-full bg-[#532b1c] text-#e3daa3-400 relative">
          <div className="max-w-container mx-auto">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full px-4 pb-4 lg:pb-0 h-full lg:h-24">
              <div className="flex h-14 cursor-pointer items-center gap-2 text-primeColor">
                <FaHamburger className="text-[#e3daa3] text-[16px]" />
                <p className="text-[14px] font-normal text-[#e3daa3]">
                  Shop by Category
                </p>
                <ul
                  className="absolute top-36 z-50 bg-[#532b1c] w-auto text-[#e3daa3] h-auto p-4 pb-6"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <li className="text-[#e3daa3] px-4 py-1 border-b-[1px] border-b-yellow-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Accessories
                  </li>
                  <li className="text-[#e3daa3] px-4 py-1 border-b-[1px] border-b-yellow-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Furniture
                  </li>
                  <li className="text-[#e3daa3] px-4 py-1 border-b-[1px] border-b-yellow-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Electronics
                  </li>
                  <li className="text-[#e3daa3] px-4 py-1 border-b-[1px] border-b-yellow-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Clothes
                  </li>
                  <li className="text-[#e3daa3] px-4 py-1 border-b-[1px] border-b-yellow-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Bags
                  </li>
                  <li className="text-[#e3daa3] px-4 py-1 border-b-[1px] border-b-yellow-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                    Home appliances
                  </li>
                </ul>
              </div>
              <div className="relative w-full lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
                <input
                  className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
                  type="text"
                  placeholder="Search your products here"
                  value=""
                />
                <IoSearchOutline className="text-[#e3daa3]" />
              </div>
              <div className="flex gap-4 mt-2 lg:mt-0 items-center pr-6 cursor-pointer relative">
                <div className="flex">
                  <CgProfile className="text-[#e3daa3]" />
                  <MdArrowDropDown className="text-[#e3daa3]" />
                </div>

                <Link to="../Signin.jsx">
                  <p>Go</p>
                </Link>

                <a href="/cart">
                  <div className="relative">
                    <IoCart className="text-[#e3daa3]" />
                    <span className="absolute font-titleFont top-3 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-primeColor text-white">
                      0
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
