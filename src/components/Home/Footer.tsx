"use client";

import { Button } from "antd";
import { useState } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import ItemsContainer from "../Footer/ItemsContainer";
import SubscriptionConfirmModal from "../ui/SubscriptionConfirmModal";

type OpenModalButtonProps = {
  showModal: () => void;
};

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const OpenModalButton: React.FC<OpenModalButtonProps> = ({ showModal }) => (
    <Button type="primary" onClick={showModal} style={{
      backgroundColor: "#f24080",
      border: "none",
      borderRadius: "0.25rem",
      color: "#fff",
      height: "2.8rem",
      width: "8rem",
      fontWeight: "bold",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      letterSpacing: "0.05rem",
      textTransform: "uppercase",
      padding: "0.5rem 1rem",
      cursor: "pointer",
      transition: "all 0.2s ease-in-out",
      outline: "none",
      boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2)",
    }}>
      Subscribe
    </Button>
  );

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
          <OpenModalButton showModal={showModal} />
        </div>
        <SubscriptionConfirmModal
          isOpen={isModalOpen}
          handleOk={handleOk}
          handleCancel={handleCancel}
        />
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
            rounded-full mx-1.5 text-xl hover:text-gray-100 hover:bg-[#f24080]
            duration-300 border-2 border-gray-700"
          >
            <FaLinkedin />
          </span>
          <span
            className="p-2 cursor-pointer inline-flex items-center
            rounded-full mx-1.5 text-xl hover:text-gray-100 hover:bg-[#f24080]
            duration-300 border-2 border-gray-700"
          >
            <FaFacebookSquare />
          </span>
          <span
            className="p-2 cursor-pointer inline-flex items-center
          rounded-full mx-1.5 text-xl hover:text-gray-100 hover:bg-[#f24080]
          duration-300 border-2 border-gray-700"
          >
            <FaInstagramSquare />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
