import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Offer from "@/components/Offer";
import About from "@/components/About";
import Decoration from "@/components/ui/Decoration";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Offer />
      <About />
      <Decoration /> 
      <Gallery /> 
      <Testimonials />
      <WhyUs />  
      <CallToAction />
      <Footer /> 
    </>
  );
}
