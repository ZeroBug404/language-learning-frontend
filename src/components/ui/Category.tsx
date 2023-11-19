import { setCategory } from "@/redux/features/courseSlice";
import { useAppDispatch } from "@/redux/hooks";
import React, { useState } from "react";

const languageData: string[] = [
  "Chinese",
  "English",
  "French",
  "German",
  "Japanese",
  "Spanish",
];

const Category: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const dispatch = useAppDispatch();

  const handleLanguageClick = (language: string) => {
    setSelectedLanguage(language);

    dispatch(setCategory(language));
  };

  return (
    <div className="flex justify-center">
      {languageData.map((language, index) => (
        <div
          key={index}
          className={`text-gray-400 hover:text-indigo-900 px-8 py-4 hover:bg-white font-semibold cursor-pointer ${
            selectedLanguage === language ? "bg-white text-gray-900" : ""
          }`}
          style={{
            border: "2px solid #301a52",
          }}
          onClick={() => handleLanguageClick(language)}
        >
          <p>{language}</p>
        </div>
      ))}
    </div>
  );
};

export default Category;
