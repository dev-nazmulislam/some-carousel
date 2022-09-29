import "./App.css";
import BootstrapMultiCarousel from "./Component/BootstrapMultiCarousel";
import CarouselWithCustomPagination from "./Component/CarouselWithCustomPagination";
import MultiCustomCarousel from "./Component/MultiCustomCarousel";
import MultiItemCarousel from "./Component/MultiItemCarousel";
import MultiTestimonial from "./Component/MultiTestimonial";
import SingleTestimonial from "./Component/SingleTestimonial";

function App() {
  return (
    <div>
      <CarouselWithCustomPagination />
      <MultiItemCarousel />
      <MultiCustomCarousel />
      <MultiTestimonial />
      <SingleTestimonial />
      <BootstrapMultiCarousel />
    </div>
  );
}

export default App;
