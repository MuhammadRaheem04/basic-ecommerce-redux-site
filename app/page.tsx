import BestSelling from "@/components/bestSelling";
import Catagory from "@/components/catagory";
import FeaturedProducts from "@/components/featuredProducts";
import Hero from "@/components/hero";
import Promotion from "@/components/promotion";
import Services from "@/components/services";



export default function Home() {
  return (
    <div>
    <Hero/>
    <FeaturedProducts/>
    <Services/>
    <Promotion/>
    <Catagory/>
    <BestSelling/>
    </div>
  );
}
