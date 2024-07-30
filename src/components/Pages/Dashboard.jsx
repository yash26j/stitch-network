import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("users"));

  return (
    <div className="min-h-screen ">
       <div
        className="py-1 lg:py-10 relative h-[200px] bg-cover bg-center lg:bg-[url('https://i.pinimg.com/originals/6b/53/c5/6b53c5098818114fda53eb334ab5d632.jpg')] bg-no-repeat"
        // style={{
        //   backgroundImage: `url(https://i.pinimg.com/originals/6b/53/c5/6b53c5098818114fda53eb334ab5d632.jpg)`,
        //   backgroundPosition: "center",
        //   backgroundSize: "cover",
        //   //filter: "blur(2px)", // Add blur effect to background image
        // }}
      >
        <div className="h-max pt-[60px] ">
          <div className="w-full">
            <h3 className="w-full text-center font-bold text-lg lg:text-2xl text-red-800">
              Dashboard
            </h3>
          </div>
          <div className=" my-1 lg:my-2 flex flex-col">
            <img
              className="w-[8%] mx-auto rounded-full"
              src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
              alt="profile-image"
            />
            <p className="text-center text-lg">
              <span className="font-bold">Name : </span>
              {user.name}
            </p>
            <p className="text-center text-lg">
              <span className="font-bold">Email : </span>
              {user.email}
            </p>
          </div>
          <div className="w-full flex justify-center ">
            <Link to="/add-product">
              <button className="bg-red-800 text-white hover:bg-red-900 hover:cursor-pointer my-2 px-2 text-sm md:text-lg  lg:px-4 py-1 rounded-full">
                Sell Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <ProductDetails />
    </div>
  );
};
export default Dashboard;
