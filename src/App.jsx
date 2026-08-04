import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import FeaturedProjects from './sections/FeaturedProjects';
import Process from './sections/Process';
// import CreativeGallery from './sections/CreativeGallery';
import About from './sections/About';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services /> 
      <FeaturedProjects />
      <Process />
      {/* <CreativeGallery /> */}
      <About />
      <Testimonials />
      <Contact />
      <Footer /> 
    </>
  );
}

export default App;