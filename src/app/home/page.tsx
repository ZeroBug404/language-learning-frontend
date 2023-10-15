import BannerCarousel from "@/components/ui/BannerCarousel";
import Navbar from "@/components/ui/Navbar";

const HomePage = () => {
  return (
    <div>
      <div style={{backgroundColor: "#41246D", height: "90vh"}}>
        <Navbar />
        <div className="w-[90%] m-auto">
            <BannerCarousel />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
