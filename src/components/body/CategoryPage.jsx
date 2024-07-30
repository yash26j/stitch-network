import { useContext } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
import { UserContext } from "../../Contexts/userContext";

const CategoryPage = () => {
  const categoryList = [
    {
      name: "Raw Material",
    },
    {
      name: "Tailors",
    },
    {
      name: "Designers",
    },
    {
      name: "Partners",
    },
  ];
  
  const { categoryNo } = useParams();
  const category = categoryList[categoryNo].name;
  const { allProduct, location } = useContext(UserContext);
  
  // Filter Location
  const filteredByLocation = allProduct.filter((item) => item.city === location);
  // Filter Category
  const filteredProducts = filteredByLocation.filter((item) => item.category === category);

  return (
    <div className="min-h-screen px-4 py-8">
      {filteredProducts.length === 0 ? (
        <div className="text-center">
          <h2 className="mt-4 mb-4 text-lg md:text-2xl font-bold">No product available</h2>
        </div>
      ) : (
        <>
          <div className="text-center">
            <h2 className="mt-4 mb-4 text-lg md:text-2xl font-bold">{category}</h2>
          </div>
          <div className="container mx-auto flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {filteredProducts.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CategoryPage;
