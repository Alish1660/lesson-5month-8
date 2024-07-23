"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/images/Logo.png";
import Tel from "@/public/images/tel.png";
import Mail from "@/public/images/mail.png";
import Layers from "@/public/images/layers.png";
import Search from "@/public/images/search.png";
import User from "@/public/images/user.png";
import Sign from "@/public/images/sign.png";
import Cart from "@/public/images/cart.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Burger and close icons

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-custom-black h-20 font-Fira-sans relative mb-[140px]">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center space-x-4 lg:space-x-6">
          <Image src={Logo} alt="Logo" className="w-10 h-10 lg:w-12 lg:h-12" />
          <h1 className="text-lg text-white lg:text-xl">Sport Market</h1>

          <nav className="hidden lg:flex lg:items-center lg:space-x-6">
            <a
              href="#"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Продукты
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Контакты
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Оплата и Доставка
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Новости
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              О нас
            </a>
          </nav>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Image src={Tel} alt="tel" className="w-5 h-5 lg:w-6 lg:h-6" />
            <p className="text-white text-xs lg:text-sm">+998 (90) 565-85-85</p>
          </div>
          <div className="flex items-center space-x-2">
            <Image src={Mail} alt="mail" className="w-5 h-5 lg:w-6 lg:h-6" />
            <p className="text-white text-xs lg:text-sm">info@gmail.com</p>
          </div>
        </div>

        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <AiOutlineClose className="text-white text-2xl" />
            ) : (
              <AiOutlineMenu className="text-white text-2xl" />
            )}
          </button>
        </div>
      </div>
      <div className="container ">
        <div className="flex justify-center gap-3 sm:flex sm:flex-row sm:justify-between lg:flex lg:flex-row lg:justify-between items-center ">
          <div className="font-Fira-sans pt-[15px] flex items-center gap-[20px] lg:gap-[10px]">
            <button className=" flex items-center gap-[10px] text-white lg:text-[20px] py-3 px-7 sm:text-[14px] sm:py-3 sm:px-7 lg:py-4 lg:px-10 bg-custom-black rounded-md">
              <Image src={Layers} alt="Layers" />
              <span className=" hidden sm:hidden lg:block">Каталог</span>
            </button>
            <div className="relative w-36 sm:w-[300px]  lg:w-[502px] ">
              <input
                className="w-full   sm:h-[40px] lg:h-[52px] px-4 py-2 border border-gray-300 rounded focus:outline-none bg-custom-gray"
                placeholder="Поиск"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5">
                <Image src={Search} alt="Search Icon" layout="fill" />
              </div>
            </div>
          </div>
          <div className="flex gap-[10px] lg:gap-[20px] items-center justify-center pt-[15px]">
            <button className="bg-custom-gray  py-3 px-3 rounded-[3px]">
              <Image src={User} alt="User" />
            </button>
            <button className="bg-custom-gray  py-3 px-3 rounded-[3px]">
              <Image src={Sign} alt="heart sign" />
            </button>
            <button className=" flex items-center  gap-[10px] py-3 px-7 lg:text-[20px] sm:text-[14px] sm:py-3 sm:px-7 lg:py-4 lg:px-10 bg-custom-gray rounded-md">
              <Image src={Cart} alt="Cart" />
              <span className="hidden sm:hidden lg:block">Корзина</span>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden ${
          isOpen ? "block" : "hidden"
        } absolute top-20 left-0 w-full bg-custom-black text-center z-10`}
      >
        <nav className="flex flex-col items-center py-4 space-y-4">
          <a
            href="#"
            className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Продукты
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Контакты
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Оплата и Доставка
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Новости
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            О нас
          </a>

          <div className="flex flex-col items-center mt-4 space-y-2">
            <div className="flex items-center space-x-2">
              <Image src={Tel} alt="tel" className="w-5 h-5 lg:w-6 lg:h-6" />
              <p className="text-white text-xs lg:text-sm">
                +998 (90) 565-85-85
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Image src={Mail} alt="mail" className="w-5 h-5 lg:w-6 lg:h-6" />
              <p className="text-white text-xs lg:text-sm">info@gmail.com</p>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Index;
