import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Mobile Navbar */}
      <div className="block md:hidden">
        <div className="flex justify-between items-center bg-white p-4">
          {/* دکمه همبرگر */}
          <button onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          {/* منوی بازشونده */}
          <div
            className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform transform ${
              isMenuOpen ? "opacity-100 visible translate-x-0" // حالت باز
              : "opacity-0 invisible translate-x-0" // حالت بسته
            } w-3/4 md:w-1/2 z-50`}
          >
            <button
              onClick={toggleMenu}
              className="fixed top-4 left-4 text-gray-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex flex-col gap-4 mt-16 p-4">
              <a href="#" className="text-gray-700 text-lg">
                پیراهن
              </a>
              <a href="#" className="text-gray-700 text-lg">
                تیشرت
              </a>
              <a href="#" className="text-gray-700 text-lg">
                شلوار
              </a>
              <a href="#" className="text-gray-700 text-lg">
                کت و شلوار
              </a>
              <a href="#" className="text-gray-700 text-lg">
                ژاکت
              </a>
              <a href="#" className="text-gray-700 text-lg">
                کاپشن
              </a>
            </div>
          </div>

          <a href="">
            <div className="">
              <h1 className="text-xl">BLACK DARK</h1>
            </div>
          </a>
        </div>
        <div className="flex justify-between items-center mx-5">
     <div className="flex">
      <input className="w-[210px] h-[44px] bg-gray1 rounded-s-md p-3 border-none outline-none" type="text" placeholder="جستجو..."/>
      <button className="w-[32px] h-[44px] bg-gray1 rounded-e-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray2">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
      </button>
     </div>
     <div className="flex gap-1">
     <a href="">
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
     <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
     </svg>
     </a>
     <a href="">
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
     <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
     </svg>
     </a>
     </div>
    </div>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <div className="bg-gray1 flex mx-auto justify-between items-center h-[38px] px-[25px]">
          <div>
            <a className="" href="">
              تماس با ما&nbsp;
            </a>
            <a className="mr-[25px]" href="">
              پشتیبانی&nbsp;
            </a>
            <a className="mr-[25px]" href="">
              درباره ما
            </a>
          </div>
          <div>
            <a
              className="border-r-2 border-l-2 border-white p-4"
              href=""
            >
              سبد خرید&nbsp;
            </a>
            <a className="border-l-2 border-white p-4" href="">
              پروفایل من&nbsp;
            </a>
          </div>
        </div>
        <div className="flex mt-[10px] items-center gap-[20px]">
          <form className="flex w-[160px] h-[40px] border-2 border-gray1 rounded-md p-1 mr-[25px]">
            <div className="flex items-center gap-2 text-gray2 ">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-gray2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
              <input
                className="w-[90px] border-none outline-none"
                type="search"
                placeholder="جستجو"
              />
            </div>
          </form>
          <div
            className="flex lg:gap-[30px] md:gap-[20px] sm:gap-[10px] whitespace-nowrap lg:text-lg md:text-base sm:text-sm"
            style={{ margin: "auto", textAlign: "center" }}
          >
            <a href="">پیراهن</a>
            <a href="">تیشرت</a>
            <a href="">شلوار</a>
            <a href="">کت و شلوار</a>
            <a href="">ژاکت</a>
            <a href="">کاپشن</a>
          </div>
          <a href="">
            <div>
              <h1 className="ml-[25px] whitespace-nowrap">BLACK DARK</h1>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;