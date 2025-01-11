import React from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import Footer from "../components/Footer";
import Modal from "react-modal"; 
import Slider from "react-slick"; 
import Test from "../components/Products/testproduct";
import { useParams } from "react-router-dom";

const Product = () => {
    const [activeTab, setActiveTab] = useState("description"); // state برای تب فعال
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
    const descriptionRef = useRef(null);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    const detailsRef = useRef(null);
    const [isSizeOpen, setIsSizeOpen] = useState(false);
    const sizeRef = useRef(null);
    const [isGetOpen, setIsGetOpen] = useState(false);
    const getRef = useRef(null);
    const [mainImage, setMainImage] = useState("");
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { id } = useParams(); // دریافت آیدی از URL
    const [data, setData] = useState(null); // همان state قبلی برای ذخیره داده‌ها
    const [loading, setLoading] = useState(true); // برای مدیریت وضعیت بارگذاری


    useEffect(() => {
      // ارسال درخواست به API با استفاده از آیدی محصول
      axios
        .get(`https://ecommerce-data-6460.onrender.com/product/${id}`) // درخواست به API با استفاده از آیدی
        .then((res) => {
          console.log(res.data); // بررسی داده‌ها
          setData(res.data); // ذخیره داده‌ها در state
          setMainImage(res.data.image); // تنظیم تصویر اصلی
          setLoading(false); // تغییر وضعیت بارگذاری به false
        })
        .catch((err) => {
          console.log(err);
          setLoading(false); // حتی در صورت خطا وضعیت بارگذاری را خاتمه می‌دهیم
        });
    }, [id]); // هر بار که آیدی تغییر کند، درخواست جدید ارسال می‌شود
  
    if (loading) {
      return <div>در حال بارگذاری...</div>; // نمایش وضعیت بارگذاری
    }
  


  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color); // تنظیم رنگ انتخاب‌شده
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // باز و بسته کردن پنجره
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
          <Navbar />
          <div className="flex gap-[10px] items-center p-6 h-[72px] bg-pro mt-[20px]">
            <h1>خانه</h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            <h1>محصولات</h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            <h1>{data ? data.title : "در حال بارگذاری..."}</h1>
          </div>
          <div className="flex justify-between items-start h-screen mt-[30px] mx-[80px]">
  {data ? (
    <>
      <div className="w-[60%] hidden md:block">
        <h1 className="text-4xl mb-2 font-bold">{data.title}</h1>
        <p className="text-lg">{data.etitle}</p>
        <div className="flex gap-[15px] justify-center mt-10">
          <button className="w-[48px] h-[49px] border border-gray2 rounded-lg text-sm">راهنما سایز</button>
          <button className={`w-[48px] h-[49px] border border-gray2 rounded-lg text-xl ${
    selectedSize === "XL" ? "bg-black text-white" : ""
  }`}
  onClick={() => handleSizeClick("XL")}>XL</button>
          <button className={`w-[48px] h-[49px] border border-gray2 rounded-lg text-xl ${
    selectedSize === "L" ? "bg-black text-white" : ""
  }`}
  onClick={() => handleSizeClick("L")}>L</button>
          <button className={`w-[48px] h-[49px] border border-gray2 rounded-lg text-xl ${
    selectedSize === "M" ? "bg-black text-white" : ""
  }`}
  onClick={() => handleSizeClick("M")}>M</button>
          <button className={`w-[48px] h-[49px] border border-gray2 rounded-lg text-xl ${
    selectedSize === "S" ? "bg-black text-white" : ""
  }`}
  onClick={() => handleSizeClick("S")}>S</button>
          <button className={`w-[48px] h-[49px] border border-gray2 rounded-lg text-xl ${
    selectedSize === "XS" ? "bg-black text-white" : ""
  }`}
  onClick={() => handleSizeClick("XS")}>XS</button>
        </div>
        <div className="flex gap-[15px] justify-center mt-10">
          <button className={`h-[49px] rounded-lg text-xl transition-all duration-300 ${
                    selectedColor === "green" ? "bg-green-300 w-[120px]" : "bg-green-300 w-[48px]"
                  }`}
                  onClick={() => handleColorClick("green")}>{selectedColor === "green" ? "Green" : "G"}</button>
          <button className={`h-[49px] rounded-lg text-xl transition-all duration-300 ${
                    selectedColor === "pink" ? "bg-pink-300 w-[120px]" : "bg-pink-300 w-[48px]"
                  }`}
                  onClick={() => handleColorClick("pink")}
                >
                  {selectedColor === "pink" ? "Pink" : "P"}</button>
          <button className={`h-[49px] rounded-lg text-xl transition-all duration-300 ${
                    selectedColor === "red" ? "bg-red-300 w-[120px]" : "bg-red-300 w-[48px]"
                  }`}
                  onClick={() => handleColorClick("red")}
                >
                  {selectedColor === "red" ? "Red" : "R"}</button>
          <button className={`h-[49px] rounded-lg text-xl transition-all duration-300 ${
                    selectedColor === "yellow" ? "bg-yellow-300 w-[120px]" : "bg-yellow-300 w-[48px]"
                  }`}
                  onClick={() => handleColorClick("yellow")}
                >
                  {selectedColor === "yellow" ? "Yellow" : "Y"}</button>
          <button className={`h-[49px] rounded-lg text-xl transition-all duration-300 ${
                    selectedColor === "blue" ? "bg-blue-300 w-[120px]" : "bg-blue-300 w-[48px]"
                  }`}
                  onClick={() => handleColorClick("blue")}
                >
                  {selectedColor === "blue" ? "Blue" : "B"}</button>
        </div>
        <div className="flex mt-10 justify-between">
            <h1 className="text-2xl">{data.brand}</h1>
            <p className="text-2xl">{data.price}</p>
        </div>
        <button className="h-[64px] w-full bg-black mt-10 rounded-xl text-white">افزودن به سبد خرید</button>
        <div className="flex flex-col gap-[10px] text-lg mt-6">
          <button className="flex justify-between" onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}>
            <h1>توضیحات</h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          <div
        ref={descriptionRef}
        style={{
          maxHeight: isDescriptionOpen
            ? descriptionRef.current.scrollHeight + "px"
            : "0px",
          opacity: isDescriptionOpen ? 1 : 0,
        }}
        className="transition-all duration-500 ease-in-out overflow-hidden"
      >
        <p className="text-gray-600">{data.intro}</p>
      </div>
          <button className="flex justify-between" onClick={() => setIsDetailsOpen(!isDetailsOpen)}>
            <h1>جزئیات و مراقبت</h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          <div
        ref={detailsRef}
        style={{
          maxHeight: isDetailsOpen
            ? detailsRef.current.scrollHeight + "px"
            : "0px",
          opacity: isDetailsOpen ? 1 : 0,
        }}
        className="transition-all duration-500 ease-in-out overflow-hidden"
      >
        <p className="text-gray-600">{data.description}</p>
      </div>
          <button className="flex justify-between" onClick={() => setIsSizeOpen(!isSizeOpen)}>
            <h1>اندازه و تناسب</h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          <div
        ref={sizeRef}
        style={{
          maxHeight: isSizeOpen
            ? sizeRef.current.scrollHeight + "px"
            : "0px",
          opacity: isSizeOpen ? 1 : 0,
        }}
        className="transition-all duration-500 ease-in-out overflow-hidden"
      >
        <p className="text-gray-600">{data.size}</p>
      </div>
          <button className="flex justify-between" onClick={() => setIsGetOpen(!isGetOpen)}>
            <h1>تحویل و مرجوعی</h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          <div
        ref={getRef}
        style={{
          maxHeight: isGetOpen
            ? getRef.current.scrollHeight + "px"
            : "0px",
          opacity: isGetOpen ? 1 : 0,
        }}
        className="transition-all duration-500 ease-in-out overflow-hidden"
      >
        <p className="text-gray-600">{data.size}</p>
      </div>
        </div>
      </div>
      <div className="w-[35%] hidden md:block">
  <img className="rounded-2xl cursor-pointer mb-4" onClick={toggleModal} src={mainImage} alt={data.title} />
  <div className="flex justify-between gap-2">
    <img className="w-[20%] h-[150px] object-cover rounded-lg cursor-pointer border border-gray-300 hover:border-black" 
         src={data.image} 
         alt="Thumbnail 1" 
         onClick={() => handleThumbnailClick(data.image)} />
    <img className="w-[20%] h-[150px] object-cover rounded-lg cursor-pointer border border-gray-300 hover:border-black" 
         src={data.image2} 
         alt="Thumbnail 2" 
         onClick={() => handleThumbnailClick(data.image2)} />
    <img className="w-[20%] h-[150px] object-cover rounded-lg cursor-pointer border border-gray-300 hover:border-black" 
         src={data.images[0]} 
         alt="Thumbnail 3" 
         onClick={() => handleThumbnailClick(data.images[0])} />
    <img className="w-[20%] h-[150px] object-cover rounded-lg cursor-pointer border border-gray-300 hover:border-black" 
         src={data.images[2]} 
         alt="Thumbnail 4" 
         onClick={() => handleThumbnailClick(data.images[2])} />
  </div>
</div>
<Modal
              isOpen={isModalOpen}
              onRequestClose={toggleModal}
              shouldCloseOnOverlayClick={true}
              className="fixed inset-0 flex items-center justify-center bg-opacity-75"
              overlayClassName="fixed inset-0 bg-black bg-opacity-75"
            >
              <div className="relative rounded-lg w-2/4 lg:w-1/4 md:w-1/4">
              <button
              className="absolute top-2 right-2  text-black text-2xl rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-300 z-50"
              onClick={toggleModal}
              >
              ×
              </button>
                <Slider {...sliderSettings}>
                  <div>
                    <img
                      src={data.image}
                      alt="Slide 1"
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div>
                    <img
                      src={data.image2}
                      alt="Slide 2"
                      className="rounded-lg object-cover"
                    />
                  </div>
                  {data.images.map((img, index) => (
                    <div key={index}>
                      <img
                        src={img}
                        alt={`Slide ${index + 3}`}
                        className="rounded-lg object-cover"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </Modal>
            <div className="block md:hidden w-[100%]">
  <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
  <h3 className="text-lg mb-8">{data.etitle}</h3>
  <div className="flex flex-col gap-4">
    <img
      className="rounded-2xl cursor-pointer mb-4"
      onClick={toggleModal}
      src={mainImage}
      alt={data.title}
    />
    <div className="flex justify-between gap-2">
      <img
        className="w-[23%] h-[80px] object-cover rounded-lg cursor-pointer border border-gray-300 hover:border-black"
        src={data.image}
        alt="Thumbnail 1"
        onClick={() => handleThumbnailClick(data.image)}
      />
      <img
        className="w-[23%] h-[80px] object-cover rounded-lg cursor-pointer border border-gray-300 hover:border-black"
        src={data.image2}
        alt="Thumbnail 2"
        onClick={() => handleThumbnailClick(data.image2)}
      />
      <img
        className="w-[23%] h-[80px] object-cover rounded-lg cursor-pointer border border-gray-300 hover:border-black"
        src={data.images[0]}
        alt="Thumbnail 3"
        onClick={() => handleThumbnailClick(data.images[0])}
      />
      <img
        className="w-[23%] h-[80px] object-cover rounded-lg cursor-pointer border border-gray-300 hover:border-black"
        src={data.images[2]}
        alt="Thumbnail 4"
        onClick={() => handleThumbnailClick(data.images[2])}
      />
    </div>
  </div>
  <div className="flex flex-wrap gap-[15px] justify-center mt-10">
          <button className="w-[48px] h-[49px] border border-gray2 rounded-lg text-sm">راهنما سایز</button>
          <button className={`w-[48px] h-[49px] border border-gray2 rounded-lg text-xl ${
    selectedSize === "XL" ? "bg-black text-white" : ""
  }`}
  onClick={() => handleSizeClick("XL")}>XL</button>
          <button className={`w-[48px] h-[49px] border border-gray2 rounded-lg text-xl ${
    selectedSize === "L" ? "bg-black text-white" : ""
  }`}
  onClick={() => handleSizeClick("L")}>L</button>
          <button className={`w-[48px] h-[49px] border border-gray2 rounded-lg text-xl ${
    selectedSize === "M" ? "bg-black text-white" : ""
  }`}
  onClick={() => handleSizeClick("M")}>M</button>
          <button className={`w-[48px] h-[49px] border border-gray2 rounded-lg text-xl ${
    selectedSize === "S" ? "bg-black text-white" : ""
  }`}
  onClick={() => handleSizeClick("S")}>S</button>
          <button className={`w-[48px] h-[49px] border border-gray2 rounded-lg text-xl ${
    selectedSize === "XS" ? "bg-black text-white" : ""
  }`}
  onClick={() => handleSizeClick("XS")}>XS</button>
  </div>
  <div className="flex gap-[15px] justify-center mt-10">
          <button className={`h-[49px] rounded-lg text-xl transition-all duration-300 ${
                    selectedColor === "green" ? "bg-green-300 w-[90px]" : "bg-green-300 w-[48px]"
                  }`}
                  onClick={() => handleColorClick("green")}>{selectedColor === "green" ? "Green" : "G"}</button>
          <button className={`h-[49px] rounded-lg text-xl transition-all duration-300 ${
                    selectedColor === "pink" ? "bg-pink-300 w-[90px]" : "bg-pink-300 w-[48px]"
                  }`}
                  onClick={() => handleColorClick("pink")}
                >
                  {selectedColor === "pink" ? "Pink" : "P"}</button>
          <button className={`h-[49px] rounded-lg text-xl transition-all duration-300 ${
                    selectedColor === "red" ? "bg-red-300 w-[90px]" : "bg-red-300 w-[48px]"
                  }`}
                  onClick={() => handleColorClick("red")}
                >
                  {selectedColor === "red" ? "Red" : "R"}</button>
          <button className={`h-[49px] rounded-lg text-xl transition-all duration-300 ${
                    selectedColor === "yellow" ? "bg-yellow-300 w-[90px]" : "bg-yellow-300 w-[48px]"
                  }`}
                  onClick={() => handleColorClick("yellow")}
                >
                  {selectedColor === "yellow" ? "Yellow" : "Y"}</button>
          <button className={`h-[49px] rounded-lg text-xl transition-all duration-300 ${
                    selectedColor === "blue" ? "bg-blue-300 w-[90px]" : "bg-blue-300 w-[48px]"
                  }`}
                  onClick={() => handleColorClick("blue")}
                >
                  {selectedColor === "blue" ? "Blue" : "B"}</button>
        </div>
        <div className="flex justify-between mt-10 text-2xl">
          <h1>{data.brand}</h1>
          <h1>{data.price}</h1>
        </div>
        <button className="h-[64px] w-full bg-black mt-10 rounded-xl text-white">افزودن به سبد خرید</button>
</div>
    </>
  ) : (
    <p>در حال بارگذاری...</p>
  )}
</div>
<div className="mx-[50px] h-[400px] mt-[270px] lg:mt-[180px] md:mt-[180px] sm:mt-[700px]">
        <div className="flex gap-[40px] text-lg">
          <button
            onClick={() => setActiveTab("description")}
            className={`${
              activeTab === "description" ? "border-b-2 border-black" : "border-b-2 border-transparent"
            }`}
          >
            توضیحات
          </button>
          <button
            onClick={() => setActiveTab("specs")}
            className={`${
              activeTab === "specs" ? "border-b-2 border-black" : "border-b-2 border-transparent"
            }`}
          >
            مشخصات
          </button>
          <button
            onClick={() => setActiveTab("shipping")}
            className={`${
              activeTab === "shipping" ? "border-b-2 border-black" : "border-b-2 border-transparent"
            }`}
          >
            نحوه ارسال
          </button>
        </div>
        {/* نمایش محتوای مرتبط با تب فعال */}
        <div className="flex justify-between mt-6">
          {activeTab === "description" && 
            data && <div><h1 className="text-xl mb-6">{data.title}</h1>
            <h3 className="text-lg mb-2">پارچه پشمی درجه یک </h3>
            <h3 className="text-lg mb-2">طراحی برجسته</h3>
            <h3 className="text-lg mb-2">دوخته شده با نخ بز</h3>
            <h3 className="text-lg mb-6">رنگ طبیعی</h3>
            <p className="text-lg lg:w-[70%] md:w-[70%]">{data.longintro}</p>
            </div>
          }
          {activeTab === "specs" && <div className="lg:w-[70%] md:w-[70%]">
            <h1 className="text-lg">پاراگراف ۱</h1>
            <p className="mb-8">این لباس از پارچه‌ای با کیفیت بالا تهیه شده است که از ترکیب الیاف طبیعی و مصنوعی بهره می‌برد. طراحی این پارچه به گونه‌ای است که علاوه بر مقاومت در برابر سایش و کشیدگی، نرمی و راحتی خاصی را برای پوست فراهم می‌کند. جنس آن قابلیت تنفس دارد و باعث می‌شود در طول استفاده طولانی‌مدت، احساس خنکی داشته باشید.</p>
            <h1 className="text-lg">پاراگراف ۲</h1>
            <p>لباس با جزئیاتی دقیق و دوخت‌های تقویت‌شده تولید شده است که دوام و استحکام بیشتری به آن می‌بخشد. طراحی آن شامل برش‌های مدرن و فرم بدن‌نما است که به زیبایی اندام کمک می‌کند. همچنین این لباس به گونه‌ای طراحی شده که در شرایط مختلف آب‌وهوایی کارایی مناسبی داشته باشد.</p>
            </div>}
          {activeTab === "shipping" && <div className="lg:w-[70%] md:w-[70%]">
            <h1 className="text-lg">پاراگراف نحوه ارسال</h1>
            <p>محصولات خریداری‌شده با دقت بسته‌بندی شده و از طریق سیستم حمل‌ونقل مطمئن به دست شما می‌رسند. ما از بسته‌بندی‌های مقاوم و دوست‌دار محیط‌زیست استفاده می‌کنیم تا اطمینان حاصل کنیم که محصول در شرایط کاملاً سالم و بدون آسیب به شما تحویل داده می‌شود. زمان تحویل سفارش‌ها بسته به موقعیت مکانی شما بین ۲ تا ۵ روز کاری است. همچنین امکان رهگیری سفارش از لحظه ارسال تا تحویل نهایی از طریق سامانه آنلاین فراهم است. در صورت وجود هرگونه مشکل یا تأخیر، تیم پشتیبانی ما آماده پاسخگویی و رفع مشکلات شما خواهد بود.</p>
            </div>}
          {data && data.image2 && <img className=" hidden md:block w-[20%] h-auto object-cover" src={data.image2} alt="Product Image" />}
        </div>
      </div>
      <div className="grid grid-row-2 justify-center mx-auto h-[590px] mb-[70px] bg-gray1 mt-[230px] pb-[30px]">
          <h1 className="text-center mt-[30px] font-bold text-2xl">محصولات مشابه</h1>
          <div className="flex items-center justify-center ">
          <div className="mx-[50px] h-[460px] w-[270px] sm:w-[380px] md:w-[800px] lg:w-[1280px] bg-white rounded-3xl ">
            <div className="mt-6 w-full">
            <Slider className="" {...settings}>
             <div>
              <Test id={1} />
             </div>
             <div>
              <Test id={2} />
             </div>
             <div>
              <Test id={3} />
             </div>
             <div>
              <Test id={4} />
             </div>
             <div>
              <Test id={1} />
             </div>
             <div>
              <Test id={2} />
             </div>
             <div>
              <Test id={3} />
             </div>
            </Slider>
            </div>
          </div>
          </div>
        </div>
      <Footer />
        </>
    )
}

export default Product;