import About from "@/components/layout/About";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
import Projects from "@/components/layout/Projects";
import Services from "@/components/layout/Services";
import WhyUs from "@/components/layout/WhyUs";

export default function Home() {
  return (
    <main className="flex max-w-[1440px] flex-col items-center min-h-screen px-[6.7rem] ">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <WhyUs />
      <Footer />
    </main>
  );
}
