import React from "react";
import Navbar from "../components/Navbar";
import image1 from '../pages/bannerw.png';
import image2 from '../images/mask1.jpg';
import image2a from '../images/mask2.png';
import { useState, useEffect } from "react";
import Products from "../components/Products/landingProducts";
import special from "../pages/section 3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Test from "../components/Products/testproduct";
import guys1 from "../images/guys1.png";
import guys2 from "../images/guys2.png";
import black from "../images/black.png";
import Footer from "../components/Footer";
import mobilebanner from "../images/SLIDER.png";
import banner1 from "../images/untitled folder/BANER1.png";
import banner2 from "../images/untitled folder/BANER2.png";
import Scroll from "../components/Products/scroll";
import cloth1 from "../pages/a3.png";
import cloth2 from "../pages/a4.png";
import cloth3 from "../pages/a6.png";
import { Link } from "react-router-dom";


const Home = () => {
  const [shirtImage, setShirtImage] = useState(cloth1);
    const [selectedColor, setSelectedColor] = useState("blue"); 
    const handleColorChange = (color, image) => {
        setSelectedColor(color);
        setShirtImage(image);
      };
  const [timeLeft, setTimeLeft] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetTime = new Date();
    targetTime.setHours(targetTime.getHours() + 1); // تنظیم زمان هدف به 1 ساعت دیگر

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetTime - now;

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          hours: String(hours).padStart(2, "0"),
          minutes: String(minutes).padStart(2, "0"),
          seconds: String(seconds).padStart(2, "0"),
        });
      } else {
        clearInterval(timerInterval);
        setTimeLeft({
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
      }
    };

    const timerInterval = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(timerInterval);
  }, []);
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // کمتر از 1024px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // کمتر از 768px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // کمتر از 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
    return(
        <>
          <Navbar/>
          <header className="mt-6">
         <div className="block md:hidden">
          <Link to="/products">
           <img className="w-full" src={mobilebanner} alt="Mobile Banner" />
          </Link>
          <Link to="/products">
            <div className="relative mx-[40px] mt-[20px]">
              <img className="relative w-full" src={banner1} alt="" />
              <div className="absolute bottom-0 text-white flex justify-center items-center w-[23%] h-[26%] rounded-2xl bg-black">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                   </svg>
              </div>
            </div>
          </Link>
          <Link to="/products">
            <div className="relative mx-[40px] mt-[20px]">
              <img className="relative w-full" src={banner2} alt="" />
              <div className="absolute bottom-0 left-0 text-white flex justify-center items-center w-[23%] h-[26%] rounded-2xl bg-black">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                   </svg>
              </div>
            </div>
            <div className="flex justify-center mt-[50px] mx-[50px] text-2xl font-bold mb-[15px]">
              <h1 >فروش ویژه فصل</h1>
            </div>
          </Link>
          <div className="overflow-x-auto overflow-hidden flex items-center bg-gray1 h-[450px]">
           <Link to="/product/1"><div className="min-w-[290px] h-[400px] bg-gray1"><Scroll id={1} /></div></Link>
           <Link to="/product/2"><div className="min-w-[290px] h-[400px] bg-gray1"><Scroll id={2} /></div></Link>           
           <Link to="/product/3"><div className="min-w-[290px] h-[400px] bg-gray1"><Scroll id={3} /></div></Link>
           <Link to="/product/4"><div className="min-w-[290px] h-[400px] bg-gray1"><Scroll id={4} /></div></Link>
          </div>
           <div className="w-full h-[80px] bg-gray1">
              <div className="flex flex-row-reverse pt-3 justify-center space-x-2 bg-gray1 rounded-lg">
              {/* Hours */}
                 <div className="bg-black text-white text-3xl font-mono px-4 py-2 rounded-md">
                 {timeLeft.hours}
                 </div>
              <span className="text-black text-3xl font-bold">:</span>
              {/* Minutes */}
                 <div className="bg-black text-white text-3xl font-mono px-4 py-2 rounded-md">
                 {timeLeft.minutes}
                 </div>
              <span className="text-black text-3xl font-bold">:</span>
              {/* Seconds */}
                 <div className="bg-black text-white text-3xl font-mono px-4 py-2 rounded-md">
                 {timeLeft.seconds}
                 </div>
             </div>
           </div>
         </div>

          </header>
          <header className=" mt-[24px] mx-[50px]">
            <Link to="/products" className="hidden md:block" href="">
              <div className="relative transition-transform duration-300 ease-in-out hover:scale-105">
                <img className="hidden lg:block md:block w-full" src={image1} alt="" />
                <div className="absolute lg:bottom-2 md:bottom-1 sm:bottom-1 lg:right-1 md:right-0.5 sm:right-0.5 rounded-2xl lg:w-[11%] md:w-[11%]  lg:h-[20%] md:h-[19%] bg-black">
                  <div className="flex justify-center text-white items-center h-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:size-10 md:size-8 ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                  </div>
                </div>
              </div>
            </Link>

           <div className="hidden md:block relative mt-[10px]">
           <Link to="/products" href="" className="">
              <img className="w-[62%] transition-transform duration-300 ease-in-out hover:scale-105 " src={image2} alt="" />
              <a href="">
              <img className="absolute left-0 top-0 w-[62%] transition-transform duration-300 ease-in-out hover:scale-105 " src={image2a} alt="" />
            </a>
            </Link>
           </div>
          </header>

        <div className="hidden md:block">
         <div className="flex justify-center mt-[50px] mx-[50px] text-2xl font-bold mb-[15px]">
              <h1 >فروش ویژه فصل</h1>
          </div>
          <div className="flex flex-col items-center gap-6 justify-center mx-[50px] h-[490px] bg-prbg rounded-2xl">
            <div className="flex justify-center gap-3 w-full">
              <Link to="/products"><Products /></Link>
            </div>
            <div>
              <div className="flex flex-row-reverse bg-prbg justify-center space-x-2 rounded-lg">
              {/* Hours */}
                 <div className="bg-black text-white text-3xl font-mono px-4 py-2 rounded-md">
                 {timeLeft.hours}
                 </div>
              <span className="text-black text-3xl font-bold">:</span>
              {/* Minutes */}
                 <div className="bg-black text-white text-3xl font-mono px-4 py-2 rounded-md">
                 {timeLeft.minutes}
                 </div>
              <span className="text-black text-3xl font-bold">:</span>
              {/* Seconds */}
                 <div className="bg-black text-white text-3xl font-mono px-4 py-2 rounded-md">
                 {timeLeft.seconds}
                 </div>
             </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between md:justify-center sm:justify-center items-center h-auto w-full bg-no-repeat bg-contain" style={{ backgroundImage: `url(${special})` }}>
  <div className="mx-4 lg:mx-[50px] sm:mx-[25px] flex flex-col lg:flex-row justify-between gap-4 lg:gap-[30px] md:gap-[40px] items-start mt-[400px]">
    {/* متن توضیحات */}
    <div className="w-full lg:w-[40%] ml-0 lg:ml-[70px] hidden lg:block">
      <h1 className="font-bold text-xl lg:text-2xl mb-2">تیشرت پاییزه هوگو باس</h1>
      <p>اگه دارای این متن میخونی خییلی دمت گرم که اینقد به جزعیات توجه میکنی . حتما حمایت کن . دیگه بیخیال بیشتر دیگه متن الکیه نخون . خب چطوری داداش صبحت بخیر . تیشرت زشت داریم فقط پنج ملیون توپاته .تا اینجام خوندی دیگه خیلی دمت گرم .</p>
    </div>

    {/* بخش تصویر */}
    <div className="relative lg:ml-32 w-full sm:w-[90%] md:w-[400px] lg:w-[40%] h-[150px] bg-black rounded-2xl flex justify-center items-center mx-auto">
  {shirtImage ? (
    <img className="absolute bottom-6 w-full h-auto " src={shirtImage} alt="T-shirt" />
  ) : (
    <p className="text-white text-center">تصویر بارگذاری نشد</p>
  )}
  <div className="absolute bottom-4 flex gap-4">
    <button
      className={`border border-white w-8 h-8 rounded-md bg-blue-400 transition-transform duration-300 ${selectedColor === "red" ? "scale-125" : "scale-100"}`}
      onClick={() => handleColorChange("red", cloth3)}
    ></button>
    <button
      className={`border border-white w-8 h-8 rounded-md bg-green-400 transition-transform duration-300 ${selectedColor === "green" ? "scale-125" : "scale-100"}`}
      onClick={() => handleColorChange("green", cloth2)}
    ></button>
    <button
      className={`border border-white w-8 h-8 rounded-md bg-red-400 transition-transform duration-300 ${selectedColor === "blue" ? "scale-125" : "scale-100"}`}
      onClick={() => handleColorChange("blue", cloth1)}
    ></button>
  </div>
</div>

<div className="block lg:hidden w-[350px] text-center mt-6 mb-6">
  <h1 className="font-bold text-xl mb-2 ">تیشرت پاییزه هوگو باس</h1>
  <p>اگه دارای این متن میخونی خییلی دمت گرم که اینقد به جزعیات توجه میکنی . حتما حمایت کن . دیگه بیخیال بیشتر دیگه متن الکیه نخون . خب چطوری داداش صبحت بخیر . تیشرت زشت داریم فقط پنج ملیون توپاته .تا اینجام خوندی دیگه خیلی دمت گرم .</p>
</div>

    {/* متن BOSS */}
    <div className="w-full lg:w-[30%] text-center lg:text-right">
      <h1 className="font-bold text-[40px] sm:text-[50px] lg:text-[61px]">BOSS</h1>
      <p>H&nbsp;&nbsp;U&nbsp;&nbsp;G&nbsp;&nbsp;O &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; B&nbsp;&nbsp;O&nbsp;&nbsp;S&nbsp;&nbsp;S </p>
    </div>
  </div>
</div>
        <div className="grid grid-row-2 justify-center mx-auto h-[590px] bg-gray1 mt-[100px] pb-[30px]">
          <h1 className="text-center mt-[30px] font-bold text-2xl">جدیدترین ها در بلک دارک</h1>
          <div className="flex items-center justify-center ">
          <div className="mx-[50px] h-[460px] w-[260px] sm:w-[380px] md:w-[800px] lg:w-[1280px] bg-white rounded-3xl ">
            <div className="mt-6 w-full">
            <Slider className="" {...settings}>
             <div>
              <Link to="/product/1"><Test id={1} /></Link>
             </div>
             <div>
             <Link to="/product/2"><Test id={2} /></Link>
             </div>
             <div>
             <Link to="/product/3"><Test id={3} /></Link>
             </div>
             <div>
             <Link to="/product/4"><Test id={4} /></Link>
             </div>
             <div>
             <Link to="/product/1"><Test id={1} /></Link>
             </div>
             <div>
             <Link to="/product/2"><Test id={2} /></Link>
             </div>
             <div>
              <Test id={3} />
             </div>
            </Slider>
            </div>
          </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center mt-[40px] gap-[70px]  mx-[50px] mb-[50px]">
          <Link to="/products" href="">
            <div className="relative">
            <img className="relative" src={guys1} alt="" />
            <div className="absolute bottom-0 bg-black w-[40%] h-[14%] rounded-2xl flex items-center justify-center">
              <h1 className="text-white font-bold lg:text-xl text-md">ست سفید</h1>
            </div>
          </div>
          </Link>
          <Link to="/products" href="">
           <div className="relative">
            <img src={guys2} alt="" />
            <div className="absolute bottom-0 left-0 bg-black w-[40%] h-[14%] rounded-2xl flex items-center justify-center">
            <h1 className="text-white font-bold lg:text-xl text-md">ست مشکی</h1>
            </div>
           </div>
          </Link>
        </div>

        <div className="flex flex-col justify-center sm:flex-row mx-[50px] gap-[30px] mb-[90px]">
          <div className="">
            <img className="w-full" src={black} alt="" />
          </div>
          <div className="w-full lg:w-[70%] md:w-[70%]">
            <h1 className="font-bold text-3xl lg:text-right md:text-right text-center">بلک دارک</h1>
            <p className="text-md">تکس بیخودی بی ارزش زشت مضحک احمق خر .تکس بیخودی بی ارزش زشت مضحک احمق خرتکس بیخودی بی ارزش زشت مضحک احمق خرتکس بیخودی بی ارزش زشت مضحک احمق خرتکس بیخودی بی ارزش زشت مضحک احمق خر . تکس بیخودی بی ارزش زشت مضحک احمق خر .تکس بیخودی بی ارزش زشت مضحک احمق خرتکس بیخودی بی ارزش زشت مضحک احمق خرتکس بیخودی بی ارزش زشت مضحک احمق خرتکس بیخودی بی ارزش زشت مضحک احمق خر .</p>
          </div>
        </div>
        <Footer />
        </>
    )
}

export default Home;