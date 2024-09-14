import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="flex bg-grey-1 aspect-square flex-col  gap-y-14">
        <div className="flex flex-col items-center gap-y-6 pt-10">
          <Image
            alt="Order"
            src="/home/logo.svg"
            width={268}
            height={66}
            className="w-[268px] h-[66px]"
            priority
          />
          <div className="flex gap-x-2">
            <Image
              src="/home/appstore.webp"
              width={180}
              height={53}
              className="w-[180px] h-[53px]"
              alt="appstore logo"
            />
            <Image
              src="/home/playstore.webp"
              className="w-[180px] h-[53px]"
              width={180}
              height={53}
              alt="playstore logo"
            />
          </div>
          <p className="px-6 w-full text-center">
            Company # 490039-445, Registered with House of companies.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-4">
          <span className="font-bold text-xl text-center">
            Get Exclusive Deals in your Inbox
          </span>
          <div className="flex">
            <input
              type="text"
              className="rounded-full pr-16 pl-4 text-left"
              placeholder="kismatkc28@gmail.com"
            />

            <Button className="bg-orange-500 rounded-full text-center h-full -ml-12 px-8 py-6">
              Subscribe
            </Button>
          </div>

          <p className="text-sm">we wont spam, read our email policy</p>
          <div className="flex gap-x-3">
            <Image
              src="/home/Facebook.png"
              width={45}
              height={45}
              alt="facebook icon"
            />
            <Image
              src="/home/Instagram.png"
              width={45}
              height={45}
              alt="facebook icon"
            />
            <Image
              src="/home/TikTok.png"
              width={45}
              height={45}
              alt="facebook icon"
            />
            <Image
              src="/home/Snapchat.png"
              width={45}
              height={45}
              alt="facebook icon"
            />
          </div>
        </div>
        <div>
          <div className="pl-16 flex flex-col gap-y-12">
            <ul className=" [&>li]:font-medium [&>li:first-child]:font-bold [&>li]:underline flex flex-col gap-y-3">
              <li>Legal Pages</li>
              <li>Terms and conditions</li>
              <li>Privacy</li>
              <li>Cookies</li>
              <li>Terms and conditions</li>
              <li>Modern Slavery Statment</li>
            </ul>
            <ul className=" [&>li]:font-medium [&>li:first-child]:font-bold [&>li]:underline flex flex-col gap-y-3">
              <li>Important Links</li>
              <li>Get help</li>
              <li>Add your restaurant</li>
              <li>Sign up to deliver</li>
              <li>Create a business account</li>
            </ul>
          </div>
        </div>
        <span className="bg-blue-dark text-white p-10 text-nowrap w-full text-center">
          Order.uk Copyright 2024, All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
