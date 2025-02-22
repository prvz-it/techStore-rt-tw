import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import Logo from "../../assets/Logo.png";
import Prvz from "../../assets/prvz.png";
import MenuData from "../../layer/MenuData";
import Container from "../../layer/Container";
import Image from "../../layer/Image";
import Flex from "../../layer/Flex";

const Navbar = () => {

  let navbarMenu = MenuData;

  let [show, setShow] = useState(false);

  let manageSearch = ()=>{
    setShow(!show)
  }

  return (
    <>
      <nav>
        <Container className="relative py-7 bg-white">
          <Flex className="items-center justify-between">
            <Image to="/" src={Logo} />
            <Flex className="items-center">
              <ul className={`flex items-center justify-between duration-700 ease-in-out ${show? "hidden" : "block"}`}>
                {navbarMenu.map((item) => (
                  <li key={item.id} className="group">
                    <NavLink to={item.path} className="mx-2 px-2 py-2 font-poppins font-semibold text-base text-black">
                      {item.name}
                    </NavLink>
                    {
                      item.megaMenu && 
                      (<div className="megaMenu grid grid-cols-7 grid-rows-8 group-hover:opacity-100 opacity-0 group-hover:visible invisible absolute top-full left-0 w-full h-[543px] bg-white drop-shadow-mega z-20">
                        <div className="col-span-2 row-span-6 p-6 border-r border-[#cccccc]">
                          <ul>
                            {
                              item.megaMenu.map((i, index)=>(
                                <li key={index} className="my-5.5 font-poppins font-semibold text-base text-black">
                                  {i}
                                </li>
                              ))
                            }
                          </ul>
                        </div>
                        <div className="col-span-5 row-span-6 p-6"></div>
                        <div className="col-span-7 row-span-2 p-6 border-t border-[#cccccc]"></div>

                      </div>
                    )}
                  </li>
                ))}
              <button className="ml-2 px-5 py-1.5 cursor-pointer border-2 border-button rounded-4xl font-poppins font-semibold capitalize text-sm text-button">our deals</button>
              </ul>
            </Flex>
            <div className={`relative duration-700 ease-in-out ${show? "block" : "hidden"}`}>
              <input className="w-6xl h-10 pl-5 pr-16 rounded-4xl bg-[#F5F7FF] outline-0 placeholder:font-DM placeholder:font-normal placeholder:text-sm placeholder:text-[#A2A6B0]" type="text" placeholder="Search entire store here..." />
              <Link>
                <FiSearch className="text-xl absolute top-1/2 -translate-y-1/2 right-6"/>
              </Link>
            </div>
            <Flex className="items-center gap-4">
              <Link>
                <FiSearch onClick={manageSearch} className={`text-xl ${show? "hidden":"block"}`}/>
                <IoCloseSharp onClick={manageSearch} className={`text-xl ${show? "block":"hidden"}`} />
              </Link>
              <Link className="relative after:content-[''] after:w-4 after:h-4 after:rounded-full after:bg-button after:absolute after:-top-2 after:-right-3">
                <span className="absolute -top-2 -right-2 z-10 font-DM font-semibold text-xs text-white">2</span>
                <FiShoppingCart className="text-xl" />
              </Link>
              <Image className="ml-4 block h-9 w-9 rounded-full ring-2 ring-headerFont-01" src={Prvz}/>
            </Flex>
          </Flex>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
