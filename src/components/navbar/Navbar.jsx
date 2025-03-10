import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import Logo from "../../assets/Logo.png";
import Prvz from "../../assets/prvz.png";
import CPU_1 from "../../assets/CPU_1.png";
import Laptop_1 from "../../assets/Laptop_1.png";
import Stock from "../../assets/stock.png";
import MenuData from "../../layer/MenuData";
import Container from "../../layer/Container";
import Image from "../../layer/Image";
import Flex from "../../layer/Flex";

const Navbar = () => {

  let navbarMenu = MenuData;

  let [show, setShow] = useState(false);
  let [view, setView] = useState(false);
  let [cart, setCart] = useState(false);

  let manageSearch = ()=>{
    setShow(!show)
  }

  return (
    <>
      <nav>
        <Container className="relative py-7 bg-white">
          <div className={`${cart ? "opacity-100 visible duration-300" : "opacity-0 invisible duration-300"} w-[300px] py-3 border-2 border-[#CACDD8] bg-white drop-shadow-mega absolute right-15 top-full -translate-y-6 z-10`}>
            <div className="shape w-3 h-3 rounded-sm border-t-2 border-l-2 border-[#CACDD8] bg-white rotate-45 absolute right-2 -top-1.5"></div>
              <div className="profile py-3 border-b-1 border-[#CACDD8]">
                <div className="text-center">
                  <h3 className="my-1.5 font-poppins font-semibold text-lg leading-7 text-black">My Cart</h3>
                  <p className="font-poppins font-normal text-sm text-[#A2A6B0]">2 item in cart</p>
                  <Link to="/" className="flex justify-center">
                    <h4 className="w-60 h-10 mt-3 border-2 border-button rounded-[48px] flex justify-center items-center font-poppins font-semibold text-sm text-button">View or Edit Your Cart</h4>
                  </Link>
                </div>
            </div>
          </div>
          <Flex className="items-center justify-between">
            <Image to="/" src={Logo} />
            <Flex className="items-center">
              <ul className={`flex items-center justify-between duration-700 ease-in-out ${show? "hidden" : "block"}`}>
                {navbarMenu.map((item) => (
                  <li key={item.id} className="group">
                    <NavLink to={item.path} className="mx-2 px-2 py-3 font-poppins font-semibold text-base text-black">
                      {item.name}
                    </NavLink>
                    {item.megaMenu && 
                      (<div className="megaMenu grid grid-cols-8 grid-rows-8 group-hover:opacity-100 opacity-0 group-hover:visible invisible absolute top-18 left-0 w-full h-[543px] bg-white drop-shadow-mega z-20">
                        <div className="col-span-2 row-span-6 p-6 border-r border-[#cccccc]">
                          <ul>
                            {item.megaMenu.map((i, index)=>(
                                <li key={index} className="my-5">
                                  <Link to="/" className="font-poppins font-semibold text-base text-black">
                                    {i}
                                  </Link>
                                </li>
                              ))
                            }
                          </ul>
                        </div>
                        <div className="col-span-6 row-span-6 p-6">
                          <Flex className="justify-between">
                            <div className="w-58.5 px-5.5 py-6">
                              <Image to="/" src={Stock}/>
                              <div className="">
                                <Image to="/" src={CPU_1} />
                              </div>
                              <Flex className="items-center">
                                <ul className="flex justify-between">
                                  <li><FaStar className="text-[#E9A426]" /></li>
                                  <li><FaStar className="text-[#E9A426]" /></li>
                                  <li><FaStar className="text-[#E9A426]" /></li>
                                  <li><FaStar className="text-[#E9A426]" /></li>
                                  <li><FaStar className="text-[#CACDD8]" /></li>
                                </ul>
                                <p className="ml-2 font-poppins font-normal text-sm text-[#A2A6B0]">Reviews (4)</p>
                              </Flex>
                              <div className="my-2">
                                <h3 className="font-poppins font-normal text-[15px] leading-6 text-black">EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</h3>
                              </div>
                              <div className="my-3">
                                <h4 className="font-poppins font-medium text-base text-[#666666] line-through">$499.00</h4>
                                <h3 className="font-poppins font-bold text-lg text-black">$499.00</h3>
                              </div>
                            </div>
                            <div className="w-58.5 px-5.5 py-6">
                              <Image to="/" src={Stock}/>
                              <div className="">
                                <Image to="/" src={Laptop_1} />
                              </div>
                              <Flex className="items-center">
                                <ul className="flex justify-between">
                                  <li><FaStar className="text-[#E9A426]" /></li>
                                  <li><FaStar className="text-[#E9A426]" /></li>
                                  <li><FaStar className="text-[#E9A426]" /></li>
                                  <li><FaStar className="text-[#E9A426]" /></li>
                                  <li><FaStar className="text-[#CACDD8]" /></li>
                                </ul>
                                <p className="ml-2 font-poppins font-normal text-sm text-[#A2A6B0]">Reviews (4)</p>
                              </Flex>
                              <div className="my-2">
                                <h3 className="font-poppins font-normal text-[15px] leading-6 text-black">EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</h3>
                              </div>
                              <div className="my-3">
                                <h4 className="font-poppins font-medium text-base text-[#666666] line-through">$499.00</h4>
                                <h3 className="font-poppins font-bold text-lg text-black">$499.00</h3>
                              </div>
                            </div>
                            <div className="w-58.5 px-5.5 py-6">
                              <Image to="/" src={Stock}/>
                              <div className="">
                                <Image to="/" src={CPU_1} />
                              </div>
                              <Flex className="items-center">
                                <ul className="flex justify-between">
                                  <li><FaStar className="text-[#E9A426]" /></li>
                                  <li><FaStar className="text-[#E9A426]" /></li>
                                  <li><FaStar className="text-[#E9A426]" /></li>
                                  <li><FaStar className="text-[#E9A426]" /></li>
                                  <li><FaStar className="text-[#CACDD8]" /></li>
                                </ul>
                                <p className="ml-2 font-poppins font-normal text-sm text-[#A2A6B0]">Reviews (4)</p>
                              </Flex>
                              <div className="my-2">
                                <h3 className="font-poppins font-normal text-[15px] leading-6 text-black">EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</h3>
                              </div>
                              <div className="my-3">
                                <h4 className="font-poppins font-medium text-base text-[#666666] line-through">$499.00</h4>
                                <h3 className="font-poppins font-bold text-lg text-black">$499.00</h3>
                              </div>
                            </div>
                            <div className="w-58.5 px-5.5 py-6">
                              <Image to="/" src={Stock}/>
                              <div className="">
                                <Image to="/" src={Laptop_1} />
                              </div>
                              <Flex className="items-center">
                                <ul className="flex justify-between">
                                  <li><FaStar className="text-[#E9A426]" /></li>
                                  <li><FaStar className="text-[#E9A426]" /></li>
                                  <li><FaStar className="text-[#E9A426]" /></li>
                                  <li><FaStar className="text-[#E9A426]" /></li>
                                  <li><FaStar className="text-[#CACDD8]" /></li>
                                </ul>
                                <p className="ml-2 font-poppins font-normal text-sm text-[#A2A6B0]">Reviews (4)</p>
                              </Flex>
                              <div className="my-2">
                                <h3 className="font-poppins font-normal text-[15px] leading-6 text-black">EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</h3>
                              </div>
                              <div className="my-3">
                                <h4 className="font-poppins font-medium text-base text-[#666666] line-through">$499.00</h4>
                                <h3 className="font-poppins font-bold text-lg text-black">$499.00</h3>
                              </div>
                            </div>
                          </Flex>
                        </div>
                        <div className="col-span-8 row-span-2 p-6 border-t border-[#cccccc]"></div>

                      </div>
                    )}
                  </li>
                ))}
              <button className="ml-2 px-5 py-1.5 cursor-pointer border-2 border-button rounded-4xl font-poppins font-semibold capitalize text-sm text-button">our deals</button>
              </ul>
            </Flex>
            <div className={`relative duration-700 ease-in-out ${show? "block" : "hidden"}`}>
              <input className="w-5xl h-10 pl-5 pr-16 rounded-4xl bg-[#F5F7FF] outline-0 placeholder:font-DM placeholder:font-normal placeholder:text-sm placeholder:text-[#A2A6B0]" type="text" placeholder="Search entire store here..." />
              <Link>
                <FiSearch className="text-xl absolute top-1/2 -translate-y-1/2 right-6"/>
              </Link>
            </div>
            <Flex className="items-center gap-4">
              <Link>
                <FiSearch onClick={manageSearch} className={`text-xl ${show? "hidden":"block"}`}/>
                <IoCloseSharp onClick={manageSearch} className={`text-xl ${show? "block":"hidden"}`} />
              </Link>
                <span className="absolute -top-2 -right-2 z-10"></span>
              <Link className="relative after:content-['2'] after:w-4 after:h-4 after:rounded-full after:bg-button after:absolute after:-top-2 after:-right-3">
                <div onClick={() => setCart(!cart)}>
                  <FiShoppingCart className="text-xl" />
                </div>
              </Link>
              <div onClick={() => setView(!view)} >
                <Image className="ml-4 block h-9 w-9 rounded-full ring-2 ring-headerFont-01" src={Prvz}/>
              </div>
            </Flex>
          </Flex>
          <div className={`${view ? "opacity-100 visible duration-300" : "opacity-0 invisible duration-300"} w-[200px] py-3 border-2 border-[#CACDD8] bg-white drop-shadow-mega absolute right-0 top-full -translate-y-4 z-10`}>
            <div className="shape w-3 h-3 rounded-sm border-t-2 border-l-2 border-[#CACDD8] bg-white rotate-45 absolute right-2 -top-1.5"></div>
              <div className="profile mx-6 py-3">
                <div>
                  <Link to="/">
                    <h3 className="my-1.5 font-poppins font-semibold text-sm leading-7 text-black">My  Account</h3>
                  </Link>
                  <Link to="/">
                    <h3 className="my-1.5 font-poppins font-semibold text-sm leading-7 text-black">My Wish List (0)</h3>
                  </Link>
                  <Link to="/">
                    <h3 className="my-1.5 font-poppins font-semibold text-sm leading-7 text-black">Compare (0)</h3>
                  </Link>
                  <Link to="/">
                    <h3 className="my-1.5 font-poppins font-semibold text-sm leading-7 text-black">Create an Account</h3>
                  </Link>
                  <Link to="/">
                    <h3 className="my-1.5 font-poppins font-semibold text-sm leading-7 text-black">Sign In</h3>
                  </Link>
                </div>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
