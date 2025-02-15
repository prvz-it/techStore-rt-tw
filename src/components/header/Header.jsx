import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSquareFacebook, FaLinkedin, FaRegClock } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import Container from "../../layer/Container";
import Flex from "../../layer/Flex";

const Header = () => {
  let [show, setShow] = useState(false)
  return (
    <>
      <header className="bg-headerBG-01">
        <Container className="relative py-2">
          <div className={`${show ? "opacity-100 visible duration-300" : "opacity-0 invisible duration-300"} w-[262px] py-3 border-2 border-[#CACDD8] bg-white absolute left-0 top-full translate-y-1.5 z-10`}>
            <div className="shape w-3 h-3 rounded-sm border-t-2 border-l-2 border-[#CACDD8] bg-white rotate-45 absolute left-6 -top-1.5"></div>
            <div className="time px-2.5 pb-3 flex border-b-2 border-[#CACDD8]">
              <FaRegClock className="mt-1.5 text-2xl text-button" />
              <div className="ml-3">
                <p className="font-poppins font-medium text-xs leading-6 text-black">We are open:</p>
                <h3 className="font-poppins font-semibold text-sm text-headerFont-01">
                  Mon-Thu: <span className="ml-1 text-black">9:00 AM - 5:30 PM</span>
                </h3>
                <h3 className="font-poppins font-semibold text-sm text-headerFont-01">
                  Fri: <span className="ml-1 text-black">9:00 AM - 6:00 PM</span>
                </h3>
                <h3 className="font-poppins font-semibold text-sm text-headerFont-01">
                  Sat: <span className="ml-1 text-black">11:00 AM - 5:00 PM</span>
                </h3>
              </div>
            </div>
            <div className="location px-2.5 py-3 flex border-b-2 border-[#CACDD8]">
              <GoLocation className="text-4xl text-button" />
              <div className="ml-3">
                <p className="font-poppins font-semibold text-sm text-black">
                  Address: <span className="font-medium">Equria, South Keranigonj, Dhaka-1311.</span>
                </p>
              </div>
            </div>
            <div className="ml-3 mt-3">
              <h5 className="font-poppins font-semibold text-sm text-black">
                Phone : <span className="font-normal text-button"><Link to="tel:+8809696365626">+8809696365626</Link></span>
              </h5>
              <h5 className="font-poppins font-semibold text-sm text-black">
                E-mail : <span className="font-normal text-button"><Link to="mailto:parvez.rzk.bd@gmail.com">parvez.rzk.bd@gmail.com</Link></span>
              </h5>
            </div>
          </div>
          <Flex className="items-center justify-between">
            <Flex className="items-center">
              <h4 className="font-poppins font-semibold text-sm text-headerFont-01">
                Mon-Thu: <span className="ml-1 text-white"> 9:00 AM - 5:30 PM</span>
              </h4>
              <Link className="ml-1.5 text-white">
                <MdKeyboardArrowDown onClick={() => setShow(!show)} />
              </Link>
            </Flex>
            <Flex className="w-[480px]">
              <h4 className="font-poppins font-semibold text-sm text-headerFont-01">
                Visit our showroom in: Equria, Keranigonj, Dhaka-1311.
              </h4>
              <Link to="/Contact">
                <h3 className="ml-2 font-poppins font-semibold text-sm text-white relative">
                  Contact Us <span className="w-20 h-0.5 bg-white rounded-[1px] absolute -bottom-0.5 left-0"></span>
                </h3>
              </Link>
            </Flex>
            <Flex className="items-center gap-3">
              <div className="font-poppins font-semibold text-sm text-white">
                Call Us: <Link to='tel:+8809696365626'>+8809696365626</Link>
              </div>
              <Flex className="flex items-center gap-1.5">
                <Link to="https://www.facebook.com/" className="text-white">
                  <FaSquareFacebook />
                </Link>
                <Link to="https://www.linkedin.com/" className="text-white">
                  <FaLinkedin />
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </header>
    </>
  );
};

export default Header;
