import Category from "../ui/Category";
import ServicesCarousel from "../ui/ServicesCarousel";

const Services = () => {
  return (
    <div
      id="service"
      className="w-[100%] mx-auto pb-20"
      style={{ minHeight: "90vh", padding: "5rem 1rem" }}
    >
      <div className="mt-28">
        <h3 className="text-center text-yellow-600 text-lg font-semibold">
          Find a Course
        </h3>
        <h1 className="text-center text-6xl font-bold text-white">
          Featured Courses
        </h1>
      </div>
      <div className="py-4">
        <Category />
      </div>
      <div className="px-6 py-10">
        <ServicesCarousel />
      </div>
    </div>
  );
};

export default Services;
