import React, { useState, useEffect } from "react";
import axios from "axios"; 

const Brand = ({ filterItems, menuItems }) => {
    return (
        <div>
            {menuItems.map((val, id) => {
                return ( 
                    <div key={id} className="mt-4 px-2 rounded-lg">
                        <ul>
                            <div className="flex justify-between items-center">
                                <li className="cursor-pointer">{val}</li>
                                <input 
                                    onClick={() => filterItems(val)}
                                    type="checkbox" 
                                    className="w-6 h-6 border-4 border-gray-300 rounded-md appearance-none checked:bg-black focus:outline-none" 
                                />
                            </div>
                        </ul>
                    </div>
                );
            })}
        </div>
    );
};

export default Brand;