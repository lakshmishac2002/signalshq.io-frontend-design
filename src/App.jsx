import './App.css';
import { FloatingPaths } from './components/ui/background-paths';
import FloatingShapes3D from './components/ui/FloatingShapes3D';
import { handleTiltMove, handleTiltLeave } from './hooks/useTilt3D';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoMarquee from './components/LogoMarquee';
import VideoSection from './components/VideoSection';
import PainPoints from './components/PainPoints';
import Features from './components/Features';
import UseCase from './components/UseCase';
import Testimonials from './components/Testimonials';
import Security from './components/Security';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';

const tilt = { maxTilt: 4, scale: 1.01, speed: 500 };
const onMove = (e) => handleTiltMove(e, tilt);
const onLeave = (e) => handleTiltLeave(e, tilt);

function App() {
  return (
    <div className="page-content">
      <Navbar />
      <div className="hero-wrapper" style={{ zIndex: 1 }}>
        <div className="hero-bg-effects">
          <FloatingPaths position={1} />
          <FloatingPaths position={-1} />
        </div>
        <FloatingShapes3D />
        <div className="tilt-inner" onMouseMove={onMove} onMouseLeave={onLeave}>
          <Hero />
        </div>
      </div>
      <div className="stack-section" style={{ zIndex: 2 }}>
        <LogoMarquee />
      </div>
      <div className="stack-section" style={{ zIndex: 3 }}>
        <div className="tilt-inner" onMouseMove={onMove} onMouseLeave={onLeave}>
          <VideoSection />
        </div>
      </div>
      <div className="stack-section" style={{ zIndex: 4 }}>
        <div className="tilt-inner" onMouseMove={onMove} onMouseLeave={onLeave}>
          <PainPoints />
        </div>
      </div>
      <div className="features-section" style={{ zIndex: 5 }}>
        <Features />
      </div>
      <div className="stack-section" style={{ zIndex: 6 }}>
        <div className="tilt-inner" onMouseMove={onMove} onMouseLeave={onLeave}>
          <UseCase />
        </div>
      </div>
      <div className="stack-section" style={{ zIndex: 7 }}>
        <div className="tilt-inner" onMouseMove={onMove} onMouseLeave={onLeave}>
          <Testimonials />
        </div>
      </div>
      <div className="stack-section" style={{ zIndex: 8 }}>
        <div className="tilt-inner" onMouseMove={onMove} onMouseLeave={onLeave}>
          <Security />
        </div>
      </div>
      <div className="stack-section" style={{ zIndex: 9 }}>
        <div className="tilt-inner" onMouseMove={onMove} onMouseLeave={onLeave}>
          <CTABanner />
        </div>
      </div>
      <div className="stack-section" style={{ zIndex: 10 }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
