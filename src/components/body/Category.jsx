
import React from "react";
import { useNavigate } from "react-router-dom";
import designer from '../../../public/assets/fashion.jpg'
import partner from '../../../public/assets/partner.jpeg'
import tailor from '../../../public/assets/tailor.jpg'
import raw from '../../../public/assets/raw-material.jpg'

const Category = () => {
  const navigate = useNavigate();

  const categories = [
    {
      img: raw ,
      name: "Raw Material",
    },
    {
      img: tailor ,
      name: "Tailors",
    },
    {
      img: designer,
      name: "Designers",
    },
    {
      img: partner,
      name: "Partners",
    },
  ];

  return (
    <div className="max-w-full flex flex-col mx-4 my-4">
      <div className="py-2">
        <h2 className="text-2xl text-center font-bold  py-2 my-2  ">Categories</h2>
      </div>
      <div className="flex flex-wrap gap-6 md:gap-8 lg:gap-14 justify-center items-center">
        {categories.map((item, index) => (
          <div
            key={index} onClick={() => navigate(`/category/${index}`)}
            className="w-[250px] h-[200px]  rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:cursor-pointer hover:scale-105 transition-all mr-[16px]"
          >
            <div className="w-full h-[80%]">
              <img src={item.img} className="w-full h-full" />
            </div>
            <div className="w-full h-[20%] flex items-center justify-center text-lg">
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
