import React, { useState , useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import {  FaSearch, FaShoppingCart ,FaUser} from "react-icons/fa"; // Importing Font Awesome icon from react-icons
import { UserContext } from "../../Contexts/userContext";
import toast from "react-hot-toast";
import logo from '../../../public/assets/logo.png'
import { HiUserCircle } from "react-icons/hi";
import CityPopup from "../body/CityPopup";

const Header = () => {

  const [isCityPopupOpen , setIsCityPopupOpen] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn, location , setLocation } = useContext(UserContext);  
  const [search, setSearch] = useState("");

  // LogOut handler
  const logOutHandler = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate('./')
    toast.success("Logged Out Successfully");
  };

  // Cart click Handler
  const cartClick = () => {
    isLoggedIn ? navigate("/cart") : navigate("/login");
  };

  // Handling the location thing
  const locationHandler = () => {
    setIsCityPopupOpen(true);
  };
  useEffect(() => {
    if (location) {
        localStorage.setItem('selectedCity', location);
        setIsCityPopupOpen(false);
    }
}, [location]);
  
  // Handling search click
  const handleSearchClick = ()=>{
    if(!search){
      toast.error("Empty input");
    }else{
      navigate(`/search/${search}`);
    }

  } 
  

   return (
    <div style={{   maxWidth: '100vw'}} className="fixed top-0 left-0 right-0 z-40 shadow-xl max-w-full ">
      {isCityPopupOpen && <CityPopup setCity={setLocation} />}
      <div className="bg-white  w-full flex flex-col md:flex-row justify-center items-center lg:justify-between lg:h-18 ">
        <div className="h-10 lg:h-16 w-full md:w-[30%] flex  justify-between items-center px-5">
          <div onClick={() => navigate("/")} className="h-full hover:cursor-pointer p-2 flex justify-center items-center">
            <h1 className="text-[#BE9278]  font-extrabold text-2xl lg:text-3xl">StitchNetwork</h1>
          </div>
          <div onClick={locationHandler} className="h-3/4 flex justify-start items-center gap-2 hover:cursor-pointer">
            <p className=" text-black text-xs lg:text-[16px]  font-bold  rounded-sm lg:rounded-xl hover:text-[#BE9278] px-2 lg:px-5 py-1 transition-all hover:scale-105   ">
              {location}
            </p>
          </div>
        </div>
        <div className="h-10 lg:h-[70px] w-full md:w-[73%] flex justify-between items-center px-5">
          <div className="  w-3/5 lg:w-2/6 m-2 lg:m-4  bg-gray-100 text-[#A3A3A3] rounded-full  flex items-center  ">
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search here"
              className="h-4/5 lg:h-full w-4/6 lg:w-5/6 p-1 md:px-3 lg:px-5 outline-none text-xs lg:text-lg md:text-sm py-2 bg-transparent placeholder:text-[#A3A3A3] mx-3"
            />
           <FaSearch color="" className="text-xl text-[#A3A3A3] lg:text-xl cursor-pointer hover:text-[#BE9278]" onClick={handleSearchClick} />
          </div>
          <div className="h-16 flex justify-around items-center w-2/5">
          <Link to="/">
                <p className=" text-black text-xs lg:text-[16px]  font-bold  rounded-sm lg:rounded-xl hover:text-[#BE9278] px-2 lg:px-5 py-1 transition-all hover:scale-105 hidden lg:flex  ">                
                  Home
                 </p> 
            </Link>
            {isLoggedIn ? (
              <>
                <Link to="/dashboard">
                <p className=" text-black text-xs lg:text-[16px]  font-bold  rounded-sm lg:rounded-xl hover:text-[#BE9278] px-2 lg:px-5 py-1 transition-all hover:scale-105   ">                
                  Profile
                 </p> 
                </Link>
                <button
                  className=" text-black text-xs lg:text-[16px]  font-bold  rounded-sm lg:rounded-xl hover:text-[#BE9278] px-2 lg:px-5 py-1 transition-all hover:scale-105   "
                  onClick={logOutHandler}
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login">
                <button className=" text-black text-xs lg:text-[16px]  font-bold  rounded-sm lg:rounded-xl hover:text-[#BE9278] px-2 lg:px-5 py-1 transition-all hover:scale-105   ">
                  Login
                </button>
              </Link>
            )}
            <p className=" text-black text-xs lg:text-[16px]  font-bold  rounded-sm lg:rounded-xl hover:text-[#BE9278] px-2 lg:px-5 py-1 transition-all hover:scale-105 cursor-pointer" onClick={cartClick}>                
                  Cart
            </p> 
            {/* <Link to="/team">
                <p className=" text-black text-xs lg:text-[16px]  font-bold  rounded-sm lg:rounded-xl hover:text-[#BE9278] px-2 lg:px-5 py-1 transition-all hover:scale-105 hidden lg:flex  ">                
                  Contact
                 </p> 
            </Link> */}
          </div>
          <div className="bg-[#BE9278] h-full px-5  items-center hidden lg:flex">
          <p className=" text-white text-xs lg:text-[16px]  font-bold  rounded-sm lg:rounded-xl px-2 lg:px-5 py-1 transition-all hover:scale-105  cursor-pointer " onClick={()=>navigate('/about')}>                
                  About
                 </p> 
          </div>
        </div>
      </div>
    </div>
  );
  
};
export default Header;
