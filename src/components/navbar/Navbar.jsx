import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import Logo from "../../assets/Logo.png";
import Prvz from "../../assets/prvz.png";
import Container from "../../layer/Container";
import Image from "../../layer/Image";
import Flex from "../../layer/Flex";

const Navbar = () => {
  const navbarMenu = [
    { id: 1, name: "Laptops", path: "/laptop" },
    { id: 2, name: "Desktop PCs", path: "/desktop" },
    { id: 3, name: "Networking Devices", path: "/networking" },
    { id: 4, name: "Printers & Scanners", path: "/printer-scanner" },
    { id: 5, name: "PC Parts", path: "/pc-parts" },
    { id: 6, name: "All Other Products", path: "/product" },
    { id: 7, name: "Repairs", path: "/repair" },
  ];
  return (
    <>
      <nav className="py-6 bg-white">
        <Container>
          <Flex className="items-center justify-between">
            <Image to="/" src={Logo} />
            <Flex className="items-center">
              <ul className="flex justify-between">
                {navbarMenu.map((item) => (
                  <li key={item.id}>
                    <NavLink to={item.path} className="mx-2 px-2 py-2 font-poppins font-semibold text-base text-black">
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <button className="ml-2 px-5 py-1.5 cursor-pointer border-2 border-button rounded-4xl font-poppins font-semibold capitalize text-sm text-button">our deals</button>
            </Flex>
            <Flex className="items-center">
              <Link ><FiSearch className="mr-4 text-xl"/></Link>
              <Link className="relative after:content-[''] after:w-4 after:h-4 after:rounded-full after:bg-button after:absolute after:-top-2 after:-right-3">
                <span className="absolute -top-2 -right-2 z-10 font-DM font-semibold text-xs text-white">2</span>
                <FiShoppingCart className="text-xl" />
              </Link>
              <Link className="ml-8">
                <img className="block h-9 w-9 rounded-full ring-2 ring-headerFont-01" src={Prvz} alt="Profile Image" />
              </Link>
            </Flex>
          </Flex>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
