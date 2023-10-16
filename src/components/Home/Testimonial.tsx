import TestimonialCarousel from "../ui/TestimonialCarousel";

const Testimonial = () => {
  return (
    <div style={{ minHeight: "90vh", padding: "5rem 2rem" }}>
      <div>
        <h3 className="text-center text-pink-500 text-lg font-semibold">
          Testimonials
        </h3>
        <h1
          className="text-center text-6xl font-bold text-white"
          style={{
            color: "#301a52",
          }}
        >
          What Students Say
        </h1>
      </div>
      <div className="px-6 py-10">
        <TestimonialCarousel />
      </div>
    </div>
  );
};

export default Testimonial;
