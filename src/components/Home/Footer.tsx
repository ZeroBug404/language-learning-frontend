import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import ItemsContainer from "../Footer/ItemsContainer";

const Footer = () => {
  return (
    <footer className="bg-[#2f115c] text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#2f115c] py-7 w-10/12 m-auto">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          Subscribe to the School’s Newsletter!
        </h1>
        <div>
          <input
            type="text"
            placeholder="Enter Your email"
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button
            className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full"
          >
            Subscribe
          </button>
        </div>
      </div>
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2020 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>

        <div>
          <span
            className="p-2 cursor-pointer inline-flex items-center
          rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
          duration-300 "
          >
            <FaLinkedin />
          </span>
          <span
            className="p-2 cursor-pointer inline-flex items-center
          rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
          duration-300 "
          >
            <FaFacebookSquare />
          </span>
          <span
            className="p-2 cursor-pointer inline-flex items-center
          rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
          duration-300 "
          >
            <FaInstagramSquare />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
