import React from "react";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import axios from "axios";
import lineimg from "../images/untitled folder/Frame 220.png";
import lineimg2 from "../images/untitled folder/half.png";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedColors, setSelectedColors] = useState([]);
  const [price, setPrice] = useState(2000000);
  
    useEffect (() => {
      const savedBrands = JSON.parse(localStorage.getItem("selectedBrands")) || [];
      const savedColors = JSON.parse(localStorage.getItem("selectedColors")) || [];
      setSelectedBrands(savedBrands);
      setSelectedColors(savedColors);

        axios.get('http://localhost:4000/product')
        .then(res => setData(res.data))
        .catch(err => console.log(err) )
    },[])

    const handleBrandChange = (brand) => {
      const updatedBrands = selectedBrands.includes(brand)
        ? selectedBrands.filter((item) => item !== brand)
        : [...selectedBrands, brand];
  
      setSelectedBrands(updatedBrands);
      localStorage.setItem("selectedBrands", JSON.stringify(updatedBrands)); // ذخیره در LocalStorage
    };

    const handleColorChange = (color) => {
      const updatedColors = selectedColors.includes(color)
        ? selectedColors.filter((item) => item !== color)
        : [...selectedColors, color];

        setSelectedColors(updatedColors);
        localStorage.setItem("selectedColors", JSON.stringify(updatedColors));
      };

      const handleChange = (event) => {
        setPrice(event.target.value);
      };
    
  
 const filteredProducts = data.filter((product) => {
    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesColor =
      selectedColors.length === 0 || selectedColors.includes(product.color);
      const productPrice = Number(product.price.replace(/[^0-9.-]+/g, "")); // حذف هر گونه کاراکتر غیر عددی
  
      const matchesPrice = productPrice >= 1000000 && productPrice <= price;
    
      return matchesBrand && matchesColor && matchesPrice;
    });

  
    
  const products = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
  }));

  // تعداد محصولات در هر صفحه
  const itemsPerPage = 8;

  // مقدار صفحه فعلی از localStorage یا مقدار پیش‌فرض 1
  const [currentPage, setCurrentPage] = useState(
    parseInt(localStorage.getItem("currentPage")) || 1
  );

  // محاسبه تعداد کل صفحات
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // محاسبه محصولات موجود در صفحه فعلی
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  // تغییر صفحه و ذخیره آن در localStorage
  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
    localStorage.setItem("currentPage", pageNumber); // ذخیره شماره صفحه
  };

  const [isBrandMenuOpen, setIsBrandMenuOpen] = useState(false);
  const [isColorMenuOpen, setIsColorMenuOpen] = useState(false);
  const [isPriceMenuOpen, setIsPriceMenuOpen] = useState(false);

  
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };


  
  const toggleBrandMenu = () => {
    setIsBrandMenuOpen(!isBrandMenuOpen);
  };

  const toggleColorMenu = () => {
    setIsColorMenuOpen((prev) => !prev);
  };

  const togglePriceMenu = () => {
    setIsPriceMenuOpen((prev) => !prev)
  };

  const resetFilters = () => {
    setSelectedBrands([]);
    setSelectedColors([]);
    setPrice(2000000);
    
    // حذف اطلاعات ذخیره‌شده در LocalStorage
    localStorage.removeItem("selectedBrands");
    localStorage.removeItem("selectedColors");
  };

   return(
    <>
    <Navbar />
    <div className="flex p-6 gap-[10px] h-[72px] bg-pro mt-[20px] ">
        <h1>خانه</h1>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        <h1>محصولات</h1>
    </div>
    <div className="h-[41px] bg-gray1 flex justify-between items-center">
        <button onClick={() => setIsFilterOpen(!isFilterOpen)}>
        <div className="flex justify-center items-center w-[95px] border-x-2 mr-[40px] border-white h-[41px]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
          </svg>
          <h1>فیلتر</h1>
        </div>
        </button>
        <div className="ml-[40px]">
            <h1>{filteredProducts.length} محصول</h1>
        </div>
    </div>

     {/* Overlay برای مات کردن صفحه */}
     {isFilterOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm z-40"
          onClick={toggleFilter} // کلیک روی Overlay برای بستن همبرگر
        />
      )}

    {isFilterOpen && (
        <div
          className="fixed top-0 right-0 h-full w-2/3 lg:w-1/3 md:w-1/3 bg-white shadow-lg z-50 p-4"
          style={{
            transition: "transform 0.3s ease",
            transform: isFilterOpen ? "translateX(0)" : "translateX(100%)",
          }}
        >
         <div>
          <div className="flex justify-end">
          <button
            className="text-black font-bold text-xl mb-4"
            onClick={() => setIsFilterOpen(false)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
          </div>
          <div className="flex justify-between mt-4" onClick={() => setIsBrandMenuOpen(!isBrandMenuOpen)}>
            <button>
              <h1 className="text-2xl">برند</h1>
            </button>
            <button>
            {isBrandMenuOpen ? (
      // آیکون وقتی منو باز است
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
      </svg>
      ) : (
      // آیکون وقتی منو بسته است
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>
    )}
            </button>
          </div>
          <div>
            {isBrandMenuOpen && (
              <div className="mt-4 px-2 rounded-lg">
              <ul>
                {["VSTAY", "ZARA", "AKOMOD", "BOSS"].map((brand) => (
                  <div key={brand} className="flex justify-between mb-3 items-center">
                    <li className="cursor-pointer">{brand}</li>
                    <input
                      type="checkbox"
                      className="w-6 h-6 border-4 border-gray-300 rounded-md appearance-none checked:bg-black focus:outline-none"
                      onChange={() => handleBrandChange(brand)}
                      checked={selectedBrands.includes(brand)}
                    />
                  </div>
                ))}
              </ul>
            </div>
             )}
            </div>
            <div className="flex justify-between mt-4" onClick={toggleColorMenu}>
            <button>
              <h1 className="text-2xl">رنگ</h1>
            </button>
            <button>
            { isColorMenuOpen ? (
      // آیکون وقتی منو باز است
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
      </svg>
      ) : (
      // آیکون وقتی منو بسته است
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>
    )}
            </button>
          </div>
          <div>
    {isColorMenuOpen && (
      <div className="flex justify-center">
      {["gray", "blue", "black", "yellow"].map((color) => (
        <button
        className="rounded-md"
          key={color}
          onClick={() => handleColorChange(color)}
          style={{
            backgroundColor: color,
            width: "30px",
            height: "30px",
            margin: "5px",
            border: selectedColors.includes(color) ? "4px solid black" : "none",
          }}
        ></button>
      ))}
    </div>
    )}
  </div>
  <div className="flex justify-between mt-4" onClick={togglePriceMenu}>
            <button>
              <h1 className="text-2xl">قیمت</h1>
            </button>
            <button>
            { isPriceMenuOpen ? (
      // آیکون وقتی منو باز است
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
      </svg>
      ) : (
      // آیکون وقتی منو بسته است
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>
    )}
            </button>
          </div>
          <div>
    {isPriceMenuOpen && (
      <div className="flex justify-center mt-4 p-4">
        <div className="flex flex-col items-center p-4">
      <h2 className="text-lg font-bold mb-4">بازه قیمتی</h2>
      <div className="w-full max-w-md">
        <input
          type="range"
          min="1000000"
          max="2000000"
          value={price}
          onChange={handleChange}
          className="lg:w-[250px] md:w-[230px] sm:[200px] w-[200px] h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray2"
        />
        <div className="flex justify-between text-sm mt-2">
          <span>1000000</span>
          <span>{price}</span>
          <span>2000000</span>
        </div>
      </div>
    </div>
      </div>
    )}
  </div>
  <div className="flex justify-center mt-8">
    <button onClick={resetFilters} className="p-2 bg-gray-300 rounded-md">حذف فیلتر</button>
  </div>
         </div>
        </div>
      )}
    <div className="flex justify-center mt-4">
      <div className="product-list gap-4 p-4">
      <div className="grid grid-cols-2 gap-6 mx-4 md:grid-cols-3 lg:grid-cols-4">
                 {currentProducts.map((product, index) => (
                <a key={index} className="group">
                     <Link to={`/product/${product.id}`}>
                     <div className="relative">
                    <img className="relative rounded-2xl w-full h-[380px] object-cover" src={product.image} alt={product.title} />
                    <img
                            className="absolute w-full h-[380px] object-cover inset-0 rounded-2xl opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                            src={product.image2} // فرض کنید سرور تصویر هاور را ارسال می‌کند.
                            alt={`${product.title} hover`}
                        />
                    <div className="absolute rounded-2xl bottom-0 bg-black/50 w-full py-8 text-white">
                        <h3 className="mr-4 mb-3">{product.title}</h3>
                        <div className="flex justify-between mx-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                        <h3 className="">{product.price}</h3>
                        </div>
                    </div>
                </div>
                     </Link>
                </a>
               
                 ))}        

        </div>
      </div>
    </div>
    <div className="flex justify-center mt-6">
    <button
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-5 py-2 bg-black text-white rounded-xl ${
            currentPage === 1 ? "disabled-button" : ""
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
    </button>
  {Array.from({ length: totalPages }, (_, index) => {
    const pageNumber = index + 1;

    // محاسبه اینکه کدام صفحات نمایش داده شوند
    const shouldShow =
      pageNumber === 1 || // اولین صفحه همیشه نمایش داده شود
      pageNumber === totalPages || // آخرین صفحه همیشه نمایش داده شود
      (pageNumber >= currentPage - 4 && pageNumber <= currentPage + 4); // صفحات نزدیک به صفحه فعلی

    if (shouldShow) {
      return (
        <button
          key={index}
          className={`px-4 py-2 ${
            currentPage === pageNumber
              ? "text-black underline"
              : "text-gray-600"
          } font-mono ltr text-4xl`}
          onClick={() => changePage(pageNumber)}
        >
          {pageNumber}
        </button>
      );
    }

    // نمایش نقاط "..." برای فاصله‌های بین صفحات
    if (
      (pageNumber === currentPage - 5 || pageNumber === currentPage + 5) &&
      !(pageNumber === 2 || pageNumber === totalPages - 1)
    ) {
      return (
        <span key={index} className="px-2 text-gray-400 text-3xl font-mono">
          ...
        </span>
      );
    }
    return null; // عدم نمایش بقیه صفحات
  })}
   <button
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === 1}
          className={`px-5 py-2 text-white bg-black rounded-xl ${
            currentPage === 1 ? "button-disabled" : ""
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
    </button>
</div>
<div className="hidden md:block">
<div className="my-[50px] flex mx-[50px] gap-4 items-start">
  <img className="w-full h-auto object-contain" src={lineimg} alt="" />
  <div className="text-justify">
    <h1 className="text-3xl font-bold mb-4">کت و  شلوار</h1>
    <p className="mb-4 text-lg">کت و شلوار مردانه شامل یک کت، یک شلوار و گاهی یک جلیقه است که از یک نوع پارچه دوخته‌شده‌اند. توجه کنید که یک شلوار و یک کت با پار‌چه‌ای مشابه به عنوان کت و شلوار شناخته نمی‌شود و حتماً باید در دوخت تمامی آیتم‌ها از یک پارچه استفاده شده باشد. امروزه مدل‌های کت و شلوار زیادی برای انتخاب وجود دارد، اما همه آن‌ها بر اساس سه سبک کلی طبقه‌بندی می‌شوند: آمریکایی، اروپایی/ایتالیایی و انگلیسی. اگرچه برخی از عناصر هر یک از این سبک‌ها مشابه سبک‌های دیگر هستند، اما همچنان به عنوان یک راهنمای مفید در تعیین اینکه کدام مدل برش برای تیپ بدنی شما مناسب‌تر است، در نظر گرفته می‌شوند.</p>
    <h3 className="text-lg mb-4">کت و شلوار مردانه سبک آمریکایی</h3>
    <h3 className="text-lg mb-4">کت و شلوار مردانه سبک انگلیسی</h3>
    <h3 className="text-lg mb-4">کت و شلوار مردانه سبک اروپایی/ایتالیایی</h3>
    <h3 className="text-lg mb-4">کت و شلوار مردانه سبک روسی</h3>
    <p className="text-lg">کت و شلوارهای سبک اروپایی که ممکن است کت و شلوارهای قاره‌ای یا ایتالیایی نیز نامیده شوند، معمولاً نزدیک به سایز بدن و جذب بریده می‌شوند و دارای دو دکمه و در یک ردیف هستند. این کت‌وشلوارها برای مردان لاغراندام بسیار خوب به نظر می‌رسند. در سبک اروپایی شانه‌ها اغلب پد دارند و جایگاه دکمه‌ها و قسمت برگردان یقه کت بالاتر از سبک آمریکایی و انگلیسی است. سبک اروپایی برخلاف سبک انگلیسی، به دلیل اینکه در آب‌وهوای گرم‌تری پوشیده می‌شود با پارچه‌های سبک و خنک‌ دوخته می‌شود.

کت‌وشلوارهای سبک انگلیسی که به آن کت‌وشلوارهای سبک بریتانیایی نیز گفته می‌شود، برای افراد با تیپ بدنی متوسط یا ورزشکار بسیار جذاب به نظر می‌رسند. کت و شلوارهای انگلیسی تا حدودی از یونیفرم‌های نظامی الگوبرداری شده‌اند که می‌توانند ظاهری جذاب و معتبر به پوشنده آن ببخشند. یونیفرم‌های نظامی معمولاً خطوط بدن را دنبال می‌کنند که کت و شلوارهای انگلیسی نیز همین کار را می‌کنند. مردان قدبلند در کت و شلوارهای انگلیسی ظاهری زیبایی خواهند داشت.</p>
  </div>
</div>
</div>
<div className="block md:hidden">
  <div className="flex gap-4 mx-[50px] my-[50px] items-start">
    <img className="w-full h-auto object-contain" src={lineimg2} alt="" />
    <div className="text-justify">
      <h1 className="text-2xl font mb-2">کت و  شلوار</h1>
      <p className="text-md">کت و شلوار مردانه شامل یک کت، یک شلوار و گاهی یک جلیقه است که از یک نوع پارچه دوخته‌شده‌اند. توجه کنید که یک شلوار و یک کت با پار‌چه‌ای مشابه به عنوان کت و شلوار شناخته نمی‌شود و حتماً باید در دوخت تمامی آیتم‌ها از یک پارچه استفاده شده باشد. امروزه مدل‌های کت و شلوار زیادی برای انتخاب وجود دارد، اما همه آن‌ها بر اساس سه سبک کلی طبقه‌بندی می‌شوند: آمریکایی، اروپایی/ایتالیایی و انگلیسی. اگرچه برخی از عناصر هر یک از این سبک‌ها مشابه سبک‌های دیگر هستند، اما همچنان به عنوان یک راهنمای مفید در تعیین اینکه کدام مدل برش برای تیپ بدنی شما مناسب‌تر است، در نظر گرفته می‌شوند.</p>
    </div>
  </div>
  <div className="mx-[50px] flex items-center">
    <div className="h-[5px] w-[90%] bg-gray2"></div>
    <h1 className="text-5xl text-left">SUIT</h1>
  </div>
  <div className="mx-[50px] mb-[30px] mt-[35px]">
    <h3 className="text-lg mb-2">کت و شلوار مردانه سبک آمریکایی</h3>
    <h3 className="text-lg mb-2">کت و شلوار مردانه سبک انگلیسی</h3>
    <h3 className="text-lg mb-2">کت و شلوار مردانه سبک اروپایی/ایتالیایی</h3>
    <h3 className="text-lg mb-4">کت و شلوار مردانه سبک روسی</h3>
    <p className="text-justify">کت و شلوارهای سبک اروپایی که ممکن است کت و شلوارهای قاره‌ای یا ایتالیایی نیز نامیده شوند، معمولاً نزدیک به سایز بدن و جذب بریده می‌شوند و دارای دو دکمه و در یک ردیف هستند. این کت‌وشلوارها برای مردان لاغراندام بسیار خوب به نظر می‌رسند. در سبک اروپایی شانه‌ها اغلب پد دارند و جایگاه دکمه‌ها و قسمت برگردان یقه کت بالاتر از سبک آمریکایی و انگلیسی است. سبک اروپایی برخلاف سبک انگلیسی، به دلیل اینکه در آب‌وهوای گرم‌تری پوشیده می‌شود با پارچه‌های سبک و خنک‌ دوخته می‌شود.

کت‌وشلوارهای سبک انگلیسی که به آن کت‌وشلوارهای سبک بریتانیایی نیز گفته می‌شود، برای افراد با تیپ بدنی متوسط یا ورزشکار بسیار جذاب به نظر می‌رسند. کت و شلوارهای انگلیسی تا حدودی از یونیفرم‌های نظامی الگوبرداری شده‌اند که می‌توانند ظاهری جذاب و معتبر به پوشنده آن ببخشند. یونیفرم‌های نظامی معمولاً خطوط بدن را دنبال می‌کنند که کت و شلوارهای انگلیسی نیز همین کار را می‌کنند. مردان قدبلند در کت و شلوارهای انگلیسی ظاهری زیبایی خواهند داشت.</p>
<p></p>
  </div>
</div>
     <Footer />
    </>
   )
}

export default Products;
