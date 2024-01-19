"use client";

import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import { Button } from "antd";

import { Alert, Calendar } from "antd";
import type { Dayjs } from "dayjs";

import dayjs from "dayjs";
import { useState } from "react";

type OpenModalButtonProps = {
  showModal: () => void;
};

const AppointmentPage = () => {
  const today = dayjs();
  const [value, setValue] = useState<Dayjs | undefined>(undefined);
  const [selectedValue, setSelectedValue] = useState<Dayjs | undefined>(
    undefined
  );

  const onSelect = (newValue: Dayjs) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };

  const onPanelChange = (newValue: Dayjs) => {
    setValue(newValue);
  };

  // console.log(selectedValue?.format("YYYY-MM-DD"));
  // console.log(value);

  const disabledDate = (current: Dayjs | undefined) => {
    return current ? current.isBefore(today, "day") : false;
  };

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


  return (
    <>
      <Navbar />
      <div className=" mt-[5.5rem] bg-[#ededec] w-full h-[13rem] flex justify-center items-center">
        <h1 className="text-center font-bold text-5xl text-[#301a52]">
          Booking Calendar
        </h1>
      </div>
      <div
        className="mx-auto pb-20"
        style={{ minHeight: "90vh", padding: "5rem 1rem" }}
      >
        <div className=" m-auto">
          <Alert
            message={`You selected date: ${
              selectedValue ? selectedValue.format("YYYY-MM-DD") : "None"
            }`}
          />
          <Calendar
            value={value}
            onSelect={onSelect}
            onPanelChange={onPanelChange}
            disabledDate={disabledDate} // Disable dates before today
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AppointmentPage;
