

import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div key={item.index} className="mb-9" onClick={() => navigate(`/product-info/${item.id}`)} >
      <div className="h-[420px] w-[300px] shadow-xl hover:shadow-2xl rounded-3xl bg-white overflow-hidden cursor-pointer p-3 hover:scale-105 transition-all ">
        <img
          className="lg:h-64 h-48 w-full object-cover transition duration-300 ease-in-out transform rounded-xl "
          src={item.productImageUrl}
          alt="product"
        />
        <div className="p-4">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {item.category}
          </h2>
          <h1 className="title-font text-base md:text-lg font-medium text-gray-900 mb-2 text-ellipsis line-clamp-1">
            {item.title}
          </h1>
          <h1 className="title-font text-base md:text-lg font-medium text-gray-900 mb-2">
            ₹{item.price}
          </h1>
          <h1 className="title-font text-sm font-medium text-gray-600 mb-2">
            {item.city}
          </h1>
          
        </div>
      </div>
    </div>
  );
};

export default Card;



