
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Equipment from './components/Equipment';
import About from './components/About';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Partners from './components/Partners';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Equipment />
        <About />
        <Partners />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;