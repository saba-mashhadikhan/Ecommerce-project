import React, { useState } from "react"
import axios from "axios";
import { useEffect } from "react";

const Pdp = () => {
    const [data, setData] = useState([])
    useEffect (() => {
        axios.get('http://localhost:4000/product')
        .then(res => setData(res.data))
        .catch(err => console.log(err) )
    },[])


    return(
            <div className="flex gap-6 mx-4">
                 {data.map((product, index) => (
                <a key={index} className="group" href="">
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
                </a>
               
                 ))}        

        </div>
    )
}

export default Pdp;