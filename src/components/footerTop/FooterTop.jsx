import React from "react";
import Flex from "../../layer/Flex";
import { Link } from "react-router-dom";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdAccountCircle } from "react-icons/md";
import { IoPricetagsSharp } from "react-icons/io5";


const FooterTop = () => {
  return (
    <>
      <div className="py-12 bg-[#F5F7FF]">
        <div className="w-5xl h-40 mx-auto">
          <Flex className="justify-between">
            <div>
              <Flex className="items-center justify-center">
                <Flex className="items-center justify-center w-12 h-12 rounded-full bg-button">
                  <Link to="/" className="text-3xl text-white">
                    <RiCustomerService2Fill />
                  </Link>
                </Flex>
              </Flex>
              <div className="mt-6 w-[265px] text-center">
                <h4 className="font-poppins font-bold text-lg leading-8 text-black">Product Support</h4>
                <p className="mt-3 font-poppins font-normal text-sm leading-5 text-black/70">Up to 3 years on-site warranty available for your peace of mind.</p>
              </div>
            </div>
            <div>
              <Flex className="items-center justify-center">
                <Flex className="items-center justify-center w-12 h-12 rounded-full bg-button">
                  <Link to="/" className="text-3xl text-white">
                    <MdAccountCircle />
                  </Link>
                </Flex>
              </Flex>
              <div className="mt-6 w-[265px] text-center">
                <h4 className="font-poppins font-bold text-lg leading-8 text-black">Personal Account</h4>
                <p className="mt-3 font-poppins font-normal text-sm leading-5 text-black/70">With big discounts, free delivery and a dedicated support specialist.</p>
              </div>
            </div>
            <div>
              <Flex className="items-center justify-center">
                <Flex className="items-center justify-center w-12 h-12 rounded-full bg-button">
                  <Link to="/" className="text-3xl text-white">
                    <IoPricetagsSharp />
                  </Link>
                </Flex>
              </Flex>
              <div className="mt-6 w-[265px] text-center">
                <h4 className="font-poppins font-bold text-lg leading-8 text-black">Amazing Savings</h4>
                <p className="mt-3 font-poppins font-normal text-sm leading-5 text-black/70">Up to 70% off new Products, you can be sure of the best price.</p>
              </div>
            </div>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default FooterTop;
