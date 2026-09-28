import Navbar from "../components/Navbar.jsx";
import Hero from "../components/sections/Hero.jsx";
import Partners from "../components/sections/Partners.jsx";
import Courses from "../components/sections/Courses.jsx";
import Paths from "../components/sections/Paths.jsx";
import Growth from "../components/sections/Growth.jsx";
import CtaBanner from "../components/sections/CtaBanner.jsx";
import Testimonials from "../components/sections/Testimonials.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <>
      <div className="grid-bg"><Navbar /></div>
      <main>
        <Hero />
        <Partners />
        <Courses />
        <Paths />
        <Growth />
        <CtaBanner />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
