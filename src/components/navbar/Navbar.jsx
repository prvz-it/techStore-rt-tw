import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Container from "../../layer/Container";
import Image from "../../layer/Image";
import Flex from "../../layer/Flex";

const Navbar = () => {
  const navbarMenu = [
    "Laptops",
    "Desktop PCs",
    "Networking Devices",
    "Printers & Scanners",
    "PC Parts",
    "All Other Products",
    "Repairs",
  ];
  return (
    <>
      <nav className="py-6 bg-white">
        <Container>
          <Flex className="justify-between">
            <Image to="/" src={Logo} />
            <div>
              <ul className="flex justify-between">
                {navbarMenu.map((item) => {
                  <li>
                    <NavLink className="px-6 py-2 font-poppins font-semibold text-sm text-black">
                      {item}
                    </NavLink>
                  </li>;
                })}
              </ul>
            </div>
          </Flex>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
