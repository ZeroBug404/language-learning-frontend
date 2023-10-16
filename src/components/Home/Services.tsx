import ServicesCarousel from "../ui/ServicesCarousel";

const Services = () => {
  return (
    <div style={{ minHeight: "90vh" }}>
      <div>
        <h3 className="text-center text-yellow-600 text-lg font-semibold">
          Find a Course
        </h3>
        <h1 className="text-center text-6xl font-bold text-white">
          Featured Courses
        </h1>
      </div>
      <div className="px-6 py-10">
        <ServicesCarousel />
      </div>
    </div>
  );
};

export default Services;
