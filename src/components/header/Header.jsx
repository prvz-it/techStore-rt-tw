import React from "react";
import { Link } from "react-router-dom";
import { FaSquareFacebook, FaLinkedin } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import Container from "../../layer/Container";
import Flex from "../../layer/Flex";

const Header = () => {
  return (
    <>
      <header className="bg-headerBG-01">
        <Container className="py-2">
          <Flex className="items-center justify-between">
            <Flex className="items-center">
              <h4 className="font-poppins font-semibold text-sm text-headerFont-01">
                Mon-Thu: <span className="text-white"> 9:00 AM - 5:30 PM</span>
              </h4>
              <Link className="ml-1.5 text-white">
                <MdKeyboardArrowDown />
              </Link>
            </Flex>
            <div>
              <h4 className="font-poppins font-semibold text-sm text-headerFont-01">
                Visit our showroom in 101 Street, City Dhaka 1311.{" "}
                <Link to="/Contact">
                  <span className="text-white">
                    <u>Contact Us</u>
                  </span>
                </Link>
              </h4>
            </div>
            <Flex className="items-center">
              <div className="font-poppins font-semibold text-sm text-white">
                Call Us: +8809696365626
              </div>
              <div className="ml-3 flex">
                <Link to="https://www.facebook.com/" className="text-white">
                  <FaSquareFacebook />
                </Link>
                <Link to="https://www.linkedin.com/" className="ml-1.5 text-white">
                  <FaLinkedin />
                </Link>
              </div>
            </Flex>
          </Flex>
        </Container>
      </header>
    </>
  );
};

export default Header;
