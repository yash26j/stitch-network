import { useNavigate } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex w-full bg-slate-900 justify-between">
        <footer className="bg-slate-900 text-white flex-col gap-4 lg:gap-10 justify-between p-2 md:p-3 lg:p-5 px-16 lg:px-24 md:px-36 lg:py-16 mb-0  ">
          {/* First div */}
          <div className="w-1/3 pb-10">
            <h1 className="font-bold  text-lg lg:text-3xl">StitchNetwork</h1>
          </div>
          {/* Second div */}
          <div className="flex flex-col gap-5 text-xs md:text-sm lg:text-base">
            <div>
              <p className="font-bold">Get to Know Us</p>
              <p
                className="cursor-pointer hover:underline"
                onClick={() => navigate("/about")}
              >
                About Us
              </p>
            </div>
            <div>
              <p className="font-bold">Connect With Us</p>
              <p
                className="cursor-pointer hover:underline "
                onClick={() => navigate("/team")}
              >
                Our Team
              </p>
            </div>
          </div>
        </footer>
        <footer className="py-6 hidden lg:flex bg-slate-900 text-white flex-col gap-4 pt-16 mr-40">
          <div className="flex gap-4">
            <p>Yash Joshi</p>
            <a href="https://www.linkedin.com/in/yash-joshi-a63137219">
              <FaLinkedin size={20}/>
            </a>
          </div>
          <div className="flex gap-4">
            <p>Divyansh Kumar Singh</p>
            <a href="https://www.linkedin.com/in/divyansh-singh-672658221">
            <FaLinkedin size={20}/>
            </a>
          </div>
          <div className="flex gap-4">
            <p>Rahul Sharma</p>
            <a href="https://in.linkedin.com/in/rahul-sharma-6b7299228">
            <FaLinkedin size={20}/>
            </a>
          </div>
          <div className="flex gap-4">
            <p>Ashish Sharma</p>
            <a href="https://www.linkedin.com/in/ashish-sharma-847a33221">
            <FaLinkedin size={20}/>
            </a>
          </div>
        </footer>
      </div>

      <p className="bg-black text-white text-xs md:text-sm lg:text-base text-center">
        © 2024, StitchNetwork.in, Inc. or its affiliates
      </p>
    </>
  );
};

export default Footer;
