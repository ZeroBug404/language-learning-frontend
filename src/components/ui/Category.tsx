const languageData = [
  "Chinese",
  "English",
  "French",
  "German",
  "Japanese",
  "Spanish",
];

const Category = () => {
  return (
    <div className="flex justify-center">
      {languageData.map((language, index) => (
        <div
          key={index}
          className="text-white hover:text-indigo-900 px-8 py-4 hover:bg-white font-semibold cursor-pointer"
          style={{
            border: "2px solid #200d3b",
          }}
        >
          <p>{language}</p>
        </div>
      ))}
    </div>
  );
};

export default Category;
