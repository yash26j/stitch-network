import React from "react"; 
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
 
function App() {
  return (
    <div className="bg-[#F1F2F4] h-full w-full">
      <Header />
      <div className="mt-10 lg:mt-16 min-h-screen">
      <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}
export default App;