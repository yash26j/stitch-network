import React, { useContext, useEffect } from "react";
import { UserContext } from "../../Contexts/userContext";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

const HomePageCards = () => {
  const { allProduct, location, getAllProduct } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    getAllProduct();
  }, [location]);

  // Get products according to location
  const locProd = allProduct.filter((item) => item.city === location);

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <h2 className="text-2xl text-center font-bold py-2 my-2 mr-8">Trending Products</h2>
      </div>
      <div className="px-1 lg:px-[5vw] flex flex-wrap justify-center gap-6 lg:gap-10">
        {locProd.slice(0, 8).map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default HomePageCards;
