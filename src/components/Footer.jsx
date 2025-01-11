import React from "react"
import bg from "../images/footer.png";
import frame1 from "../images/frame1.png";
import frame2 from "../images/frame2.png";
import frame3 from "../images/frame3.png";
import logo1 from "../images/Frame 72.png";
import logo2 from "../images/Frame 73.png";
import logo3 from "../images/Frame 74.png";

const Footer = () => {
    return(
        <>
        <div className="block md:hidden">
          <div className="h-[333px] bg-gray1">
             <div className="flex flex-col items-center pt-6 font-bold text-xl text-black">
                <h1 className="text-center">باشگاه مشتریان بلک دارک</h1>
                <h3 className="mt-6 text-center">اطلاع از محصولات جدید و تخفیفات !</h3>
                <input className="w-[320px] mt-6 p-2 text-black rounded-2xl" type="text" placeholder="نام" />
                <input className="w-[320px] mt-6 p-2 text-black rounded-2xl" type="text" placeholder="شماره همراه" />
                <button className="w-[320px] h-[25%] mt-6 rounded-2xl border bg-black text-white p-2">ارسال</button>
              </div>
          </div>
          <div className="relative pt-8 px-4 h-[950px] bg-black ">
            <div className="absolute top-4 left-0 text-white"style={{ writingMode: "vertical-rl", textOrientation: "upright" }}>
              <a href=""><h1 className=" text-[60px] whitespace-nowrap">BLACK DARK</h1></a>
            </div>
            <div className="text-white">
              <h1 className="text-lg mb-2 font-bold">شماره تماس :</h1>
              <p className="text-md">۰۲۱-۱۲۳۴۵۶۷۸</p>
              <p className="mb-10 text-md">۰۹۱۲ ۲۴۷ ۲۵۸</p>
            </div>
            <div className="text-white w-[50%]">
              <h1 className="text-lg font-bold mb-2">آدرس:</h1>
              <p className="mb-10 text-lg">تهران / بعد قم  ساختمان اصفهان  پلاک 0</p>
            </div>
            <div className="flex gap-4">
              <div className="text-white text-lg">
                <a href=""><h3 className="mb-4">تماس باما</h3></a>
                <a href=""><h3 className="mb-4">درباره ما</h3></a>
                <a href=""><h3 className="mb-4">قوانین و مقررات</h3></a>
                <a href=""><h3 className="mb-4">شیوه ارسال و مرجوع</h3></a>
                <a href=""><h3>پیگیری سفارش</h3></a>
              </div>
              <div className="text-white text-xl mb-10">
                <a href=""><h3 className="mb-4">پیراهن</h3></a>
                <a href=""><h3 className="mb-4">تیشرت</h3></a>
                <a href=""><h3 className="mb-4">کت شلوار</h3></a>
                <a href=""><h3 className="mb-4">شلوار</h3></a>
                <a href=""><h3>اکسستوری</h3></a>
              </div>
            </div>
            <div className="flex gap-8 justify-center mb-10 mt-48">
              <img src={frame1} alt="" />
              <img src={frame2} alt="" />
              <img src={frame3} alt="" />
            </div>
            <div className="flex gap-8 justify-center">
              <a href=""><img src={logo1} alt="" /></a>
              <a href=""><img src={logo2} alt="" /></a>
              <a href=""><img src={logo3} alt="" /></a>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
            <div className="flex relative h-[420px] bg-cover pt-14" style={{backgroundImage:`url(${bg})`}}>
              <div className="w-[15%] mr-[50px] font-bold md:text-sm lg:text-lg text-white">
                <a href=""><h3 className="mb-8">تماس با ما</h3></a>
                <a href=""><h3 className="mb-8">درباره ما</h3></a>
                <a href=""><h3 className="mb-8">قوانین و مقررات</h3></a>
                <a href=""><h3 className="mb-8">شیوه ارسال و مرجوع</h3></a>
               <a href=""><h3>پیگیری سفارش</h3></a>
              </div>
              <div className="w-[13%] font-bold text-white lg:text-lg md:text-sm">
                <a href=""><h3 className="mb-8">پیراهن</h3></a>
                <a href=""><h3 className="mb-8">تیشرت</h3></a>
                <a href=""><h3 className="mb-8">کت شلوار</h3></a>
                <a href=""><h3 className="mb-8">شلوار</h3></a>
                <a href=""><h3>اکسسوری</h3></a>
              </div>
              <div className="w-[10%] font-bold text-white lg:text-lg md:text-sm">
                <h1 className="text-xl mb-3">شماره تماس :</h1>
                <h3 className="mb-1">۰۲۱-۱۲۳۴۵۶۷۸</h3>
                <h3 className="mb-8">۰۹۱۲   ۲۴۷   ۲۵۸</h3>
                <h1 className="mb-3 font-bold text-xl">آدرس :</h1>
                <h3>تهران / بعد قم  ساختمان اصفهان  پلاک 0</h3>
              </div>
              <div className="absolute lg:left-[240px] md:left-[210px] flex flex-col lg:text-md md:text-sm text-white">
                <h1 className="text-center">باشگاه مشتریان بلک دارک</h1>
                <h3 className="mt-6 text-center">اطلاع از محصولات جدید و تخفیفات !</h3>
                <input className="lg:w-[250px] md:w-[180px] mt-6 p-2 text-black" type="text" placeholder="نام" />
                <input className="lg:w-[250px] md:w-[180px] mt-6 p-2 text-black" type="text" placeholder="شماره همراه" />
                <button className="lg:w-[250px] md:w-[180px] h-[25%] mt-6 rounded-2xl border border-white p-2">ارسال</button>
              </div>
              <div className="absolute left-1 -top-16 text-black">
                <a href=""><h1 className="text-[68px]">BLAC</h1></a>
              </div>
              <div className="absolute left-6 top-24 text-black whitespace-nowrap ">
                <a href=""><h1 className="text-[68px] rotate-90 whitespace-nowrap">K DARK</h1></a>
              </div>
              <div className="absolute left-7 top-8">
                <img className="mb-3" src={frame1} alt="" />
                <img className="mb-3" src={frame2} alt="" />
                <img src={frame3} alt="" />
              </div>
              <div className="absolute h-[100px] w-full bottom-0 -z-10 bg-footer"></div>
              <div className="flex absolute bottom-4 left-[45px] gap-6">
                <a href=""><img src={logo1} alt="" /></a>
                <a href=""><img src={logo2} alt="" /></a>
                <a href=""><img src={logo3} alt="" /></a>
              </div>
            </div>
          </div>
        </>
    )
}

export default Footer;