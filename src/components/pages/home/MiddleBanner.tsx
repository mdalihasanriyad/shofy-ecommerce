import React from "react";
import {
  bannerImageFive,
  bannerImageFour,
  bannerImageSix,
  bannerImageThree,
  bannerImageTwo,
} from "@/assets";
import Container from "@/components/Container";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import Button from "@/components/ui/Button";

const MiddleBanner = () => {
  return (
    <div>
      <div className="">
        <Container>
          <div className="flex gap-10 py-20">
            <div className="relative ">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={bannerImageTwo}
                  alt="bannerImageTwo"
                  className="rounded-xl hover:scale-110 duration-300"
                />
              </div>
              <div className="absolute top-16 left-16">
                <p>Sale 20% off all store</p>
                <h2 className="w-2/3 text-3xl font-semibold mt-2 mb-2 cursor-pointer hover:text-themeColor">
                  Smartphone BLU G91 Pro 2022
                </h2>
                <p className="flex items-center gap-2 text-sm cursor-pointer hover:text-themeColor font-semibold duration-200">
                  Shop Now <GoArrowRight />
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={bannerImageThree}
                  alt="bannerImageThree"
                  className="rounded-xl hover:scale-105 duration-300"
                />
              </div>
              <div className="absolute top-10 left-10">
                <h2 className="text-xl font-semibold w-2/3 mb-2 cursor-pointer">
                  HyperX Cloud II Wireless
                </h2>
                <p className="font-semibold">Sale 35% off</p>
                <p className="flex items-center gap-2 text-sm hover:text-themeColor mt-6 font-semibold hover:text-gap-2 duration-200 cursor-pointer">
                  Shop Now <GoArrowRight />
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className=" py-20">
        <Container>
          <div className="bg-[#0989FF] flex items-center justify-between h-[500px] rounded-xl p-24">
            <div className="text-white/90 w-[50%]">
              <p className="text-xl opacity-80 uppercase">
                Tablet Collection 2023
              </p>
              <h2 className="text-5xl font-extrabold  ">
                Samsung Galaxy Tab S6, Wifi Tablet
              </h2>
              <div className="mt-4">
                <p className="line-through  opacity-70"> $1240.00</p>
                <h3 className="text-4xl font-semibold">$975.00</h3>
              </div>
              <Button className="mt-8 font-semibold rounded-lg bg-black text-white hover:bg-white hover:text-black duration-300">
                Shop Now
              </Button>
            </div>

            <div className="">
              <Image src={bannerImageFour} alt="bannerImageFour" />
            </div>
          </div>
        </Container>
      </div>
      <div className="flex justify-between items-center bg-[#0989FF] py-20 h-[170px]">
        <div className=" relative">
          <Image
            src={bannerImageFive}
            alt="bannerImageFive"
            className="opacity-40"
          />
          <div className="absolute top-12 left-24">
            <p className="text-white uppercase text-base font-semibold">
              Sale 20% off all store
            </p>
            <h2 className="text-4xl text-white font-bold opacity-100">
              Subscribe our Newsletter
            </h2>
          </div>
        </div>
        <div className="mr-44 relative">
          <Image src={bannerImageSix} alt="bannerImageSix" />
          <div className="flex items-center justify-center absolute top-16 -right-12">
            <input
              type="email"
              placeholder="Enter your email"
              className="outline-none px-6 w-96 py-4 rounded-l-xl"
            />
            <input
              type="submit"
              value="Subscribe"
              className="px-8 py-4 rounded-r-xl cursor-pointer bg-black text-white "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleBanner;
