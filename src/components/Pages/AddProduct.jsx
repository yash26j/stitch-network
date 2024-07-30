import { Timestamp, addDoc, collection } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { fireDB } from "../../Firebase/config";

const AddProduct = () => {
  const categoryList = [
    { name: "Select Product Category", disabled: true },
    { name: "Raw Material" },
    { name: "Tailors" },
    { name: "Designers" },
    { name: "Partners" },
  ];

  const cityList = [
    { name: "Select Product City", disabled: true },
    { name: "Jaipur" },
    { name: "Delhi" },
    { name: "Mumbai" },
    { name: "Chennai" },
    { name: "Hyderabad" },
  ];

  const navigate = useNavigate();

  // Product details
  const [product, setProduct] = useState({
    title: "",
    price: "",
    productImageUrl: "",
    owner: JSON.parse(localStorage.getItem('users')).email,
    category: "",
    description: "",
    mobile: "",
    email: "",
    city: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  // Function to set initial values for category and city on component mount
  useEffect(() => {
    setProduct(prevProduct => ({
      ...prevProduct,
      category: categoryList[0].name,
      city: cityList[0].name,
    }));
  }, []);

  // Add product function
  const addProductFunction = async () => {
    if (
      product.title === "" ||
      product.price === "" ||
      product.productImageUrl === "" ||
      product.category === "Select Product Category" ||
      product.city === "Select Product City" ||
      product.description === ""
    ) {
      return toast.error("All fields are required");
    }

    try {
      const productRef = collection(fireDB, "products");
      await addDoc(productRef, product);
      toast.success("Add product successful");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error adding product: ", error);
      toast.error("Add Product failed");
    }
  };

  return (
    <div className="py-10">
      <div className="max-w-lg mx-auto p-6  rounded-lg shadow-md bg-white ">
      <h2 className="text-2xl font-semibold mb-4">Add Product</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Product Title"
          value={product.title}
          onChange={(e) => setProduct({ ...product, title: e.target.value })}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <input
          type="number"
          placeholder="Product Price"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Product Image URL"
          value={product.productImageUrl}
          onChange={(e) => setProduct({ ...product, productImageUrl: e.target.value })}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <select
          value={product.category}
          onChange={(e) => setProduct({ ...product, category: e.target.value })}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        >
          {categoryList.map((value, index) => (
            <option key={index} value={value.name} disabled={value.disabled}>
              {value.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <select
          value={product.city}
          onChange={(e) => setProduct({ ...product, city: e.target.value })}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        >
          {cityList.map((value, index) => (
            <option key={index} value={value.name} disabled={value.disabled}>
              {value.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <textarea
          placeholder="Product Description"
          value={product.description}
          onChange={(e) => setProduct({ ...product, description: e.target.value })}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        ></textarea>
      </div>

      <div className="mb-4">
        <input
          type="number"
          placeholder="Mobile No."
          value={product.mobile}
          onChange={(e) => setProduct({ ...product, mobile: e.target.value })}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <input
          type="email"
          placeholder="Email Id"
          value={product.email}
          onChange={(e) => setProduct({ ...product, email: e.target.value })}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <button
          onClick={addProductFunction}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
        >
          Add Product
        </button>
      </div>
    </div>
    </div>
    
  );
};

export default AddProduct;

