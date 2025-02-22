import React from "react";
import { Link } from "react-router-dom";
import { FaSquareFacebook, FaLinkedin } from "react-icons/fa6";
import paypal from "../../assets/paypal.png";
import visa from "../../assets/visa.png";
import master from "../../assets/master.png";
import american from "../../assets/american.png";
import Container from "../../layer/Container";
import Image from "../../layer/Image";
import Flex from "../../layer/Flex";

const Footer = () => {
  return (
    <>
      <div className="pt-12 bg-[#020203]">
        <Container>
          <Flex className="pb-11 items-center justify-between">
            <div>
              <h2 className="font-poppins font-medium text-[38px] text-white">Sign Up To Our Newsletter.</h2>
              <p className="mt-2 font-poppins font-light text-base text-white">Be the first to hear about the latest offers.</p>
            </div>
            <div>
              <input
                type="email"
                className="w-96 h-12 pl-3 border-2 border-white rounded-sm outline-0 placeholder:font-DM placeholder:font-normal placeholder:text-base placeholder:leading-5 placeholder:capitalize placeholder:text-white focus:text-base focus:text-white"
                placeholder="Your mail"
              />
              <button className="ml-6 px-8 py-4 rounded-full bg-button cursor-pointer font-poppins font-semibold text-sm text-white">Subscribe</button>
            </div>
          </Flex>
          <Flex className="pb-11 justify-between">
            <div className="w-48">
              <h4 className="font-poppins font-medium text-xl text-white/50">Information</h4>
              <ul className="mt-8 ">
                <li className="my-2"><Link className="font-poppins font-medium text-base text-white">About Us</Link></li>
                <li className="my-2"><Link className="font-poppins font-medium text-base text-white">About Zip</Link></li>
                <li className="my-2"><Link className="font-poppins font-medium text-base text-white">Privacy Policy</Link></li>
                <li className="my-2"><Link className="font-poppins font-medium text-base text-white">Search Product</Link></li>
                <li className="my-2"><Link className="font-poppins font-medium text-base text-white">Terms & Condition</Link></li>
                <li className="my-2"><Link className="font-poppins font-medium text-base text-white">Orders and Returns</Link></li>
                <li className="my-2"><Link className="font-poppins font-medium text-base text-white">Contact Us</Link></li>
                <li className="my-2"><Link className="font-poppins font-medium text-base text-white">Advanced Search</Link></li>
                <li className="my-2"><Link className="font-poppins font-medium text-base text-white">Newsletter Subscription</Link></li>
              </ul>
            </div>
            <div className="w-68">
              <h4 className="font-poppins font-medium text-xl text-white/50">PC Parts</h4>
              <ul className="mt-8 ">
                <li className="my-2"><Link className="font-poppins font-medium text-base text-white">CPUS</Link></li>
                <li className="my-2"><Link className="font-poppins font-medium text-base text-white">Add On Cards</Link></li>
                <li className="my-2"><Link className="font-poppins font-medium text-base text-white">Hard Drives (Internal)</Link></li>
                <li className="my-2"><Link className="font-poppins font-medium text-base text-white">Graphic Cards</Link></li>
                <li className="my-2"><Link className="font-poppins font-medium text-base text-white">Keyboards / Mice</Link></li>
                <li className="my-2"><Link className="font-poppins font-medium text-base text-white">Cases / Power Supplies / Cooling</Link></li>
                <li className="my-2"><Link className="font-poppins font-medium text-base text-white">RAM (Memory)</Link></li>
                <li className="my-2"><Link className="font-poppins font-medium text-base text-white">Speakers / Headsets</Link></li>
                <li className="my-2"><Link className="font-poppins font-medium text-base text-white">Motherboards</Link></li>
              </ul>
            </div>
            <div className="w-40">
              <h4 className="font-poppins font-medium text-xl text-white/50">Desktop PCs</h4>
              <ul className="mt-8 ">
                <li className="my-2"><Link className="font-poppins font-medium text-base text-white">Custom PCs</Link></li>
                <li className="my-2"><Link className="font-poppins font-medium text-base text-white">Servers PCs</Link></li>
                <li className="my-2"><Link className="font-poppins font-medium text-base text-white">MSI All-In-One PCs</Link></li>
                <li className="my-2"><Link className="font-poppins font-medium text-base text-white">HP / Compaq PCs</Link></li>
                <li className="my-2"><Link className="font-poppins font-medium text-base text-white">ASUS PCs</Link></li>
                <li className="my-2"><Link className="font-poppins font-medium text-base text-white">Tecs PCs</Link></li>
              </ul>
            </div>
            <div className="w-54">
              <h4 className="font-poppins font-medium text-xl text-white/50">Laptops</h4>
              <ul className="mt-8 ">
                <li className="my-2"><Link className="font-poppins font-medium text-base text-white">Everyday Use Notebooks</Link></li>
                <li className="my-2"><Link className="font-poppins font-medium text-base text-white">MSI Workstation Series</Link></li>
                <li className="my-2"><Link className="font-poppins font-medium text-base text-white">MSI Prestige Series</Link></li>
                <li className="my-2"><Link className="font-poppins font-medium text-base text-white">Tablets and Pads</Link></li>
                <li className="my-2"><Link className="font-poppins font-medium text-base text-white">Netbooks</Link></li>
                <li className="my-2"><Link className="font-poppins font-medium text-base text-white">Infinity Gaming Notebooks</Link></li>
              </ul>
            </div>
            <div className="w-96">
              <h4 className="font-poppins font-medium text-xl text-white/50">Address</h4>
              <div className="mt-8 ">
                <h4 className="my-2 font-poppins font-semibold text-base text-white">
                  Address: <span className="ml-1 font-medium"> Equria, South Keranigonj, Dhaka-1311.</span>
                </h4>
                <h4 className="my-2 font-poppins font-semibold text-base text-white">
                  Phones: <span className="ml-1 font-medium text-button"><Link to="tel:+8809696365626"> +8809696365626</Link></span>
                </h4>
                <h4 className="my-2 font-poppins font-semibold text-base text-white">
                  E-mail: <span className="ml-1 font-medium text-button"><Link to="mailto:parvez.rzk.bd@gmail.com"> parvez.rzk.bd@gmail.com</Link></span>
                </h4>
                <div className="">
                <p className="font-poppins font-medium text-lg text-white">We are open:</p>
                <h3 className="my-2 font-poppins font-semibold text-base text-headerFont-01">
                  Monday-Thursday: <span className="ml-1 text-white">9:00 AM - 5:30 PM</span>
                </h3>
                <h3 className="my-2 font-poppins font-semibold text-base text-headerFont-01">
                  Friday: <span className="ml-1 text-white">9:00 AM - 6:00 PM</span>
                </h3>
                <h3 className="my-2 font-poppins font-semibold text-base text-headerFont-01">
                  Saturday: <span className="ml-1 text-white">11:00 AM - 5:00 PM</span>
                </h3>
              </div>
              </div>
            </div>
            
          </Flex>
        </Container>
        <Container className="border-t border-white/20">
        <div className="py-4.5">
          <Flex className="items-center justify-between">
            <Flex className="flex items-center gap-2">
              <Link to="https://www.facebook.com/" className="w-6 text-white/50">
                <FaSquareFacebook />
              </Link>
              <Link to="https://www.linkedin.com/" className="w-6 text-white/50">
                <FaLinkedin />
              </Link>
            </Flex>
            <Flex className="items-center gap-2">
              <Link  className="w-8.5 h-5.5 rounded-sm bg-white flex items-center justify-center">
               <Image src={paypal}/>
              </Link>
              <Link  className="w-8.5 h-5.5 rounded-sm bg-white flex items-center justify-center">
               <Image src={visa}/>
              </Link>
              <Link  className="w-8.5 h-5.5 rounded-sm bg-white flex items-center justify-center">
               <Image src={master}/>
              </Link>
              <Link  className="w-8.5 h-5.5 rounded-sm bg-white flex items-center justify-center">
               <Image src={american}/>
              </Link>
            </Flex>
            <Flex className="flex items-center gap-2">
              <Link className="font-poppins font-medium text-xs text-white/60">
                <p>Copyright © 2025 Prvz-it.Ltd</p>
              </Link>
            </Flex>
          </Flex>
        </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
