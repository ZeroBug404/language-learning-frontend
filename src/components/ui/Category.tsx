"use client";

import { languageData } from "@/constants/global";
import { setCategory } from "@/redux/features/courseSlice";
import { useAppDispatch } from "@/redux/hooks";
import React, { useState } from "react";

const Category: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const dispatch = useAppDispatch();

  const handleLanguageClick = (language: string) => {
    setSelectedLanguage(language);

    dispatch(setCategory(language));
  };

  return (
    <div className="lg:flex grid grid-cols-2 justify-center place-items-center">
      {languageData.map((language, index) => (
        <div
          key={index}
          className={`text-gray-400 hover:text-indigo-900 px-8 py-4 hover:bg-white font-semibold cursor-pointer w-[10rem] ${
            selectedLanguage === language ? "bg-white text-gray-900" : ""
          }`}
          style={{
            border: "2px solid #301a52",
          }}
          onClick={() => handleLanguageClick(language)}
        >
          <p className="flex justify-center">{language}</p>
        </div>
      ))}
    </div>
  );
};

export default Category;
