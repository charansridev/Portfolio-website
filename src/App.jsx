import CanvasBackground from './components/CanvasBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import Specs from './components/Specs';
import Releases from './components/Releases';
import Telemetry from './components/Telemetry';
import Footer from './components/Footer';

function App() {
  return (
    <div className="text-on-background font-body-md selection:bg-secondary-container selection:text-white relative">
      {/* Interactive Dot Matrix Canvas Background */}
      <CanvasBackground />

      {/* Navigation Header */}
      <Header />

      {/* Main Sections */}
      <main className="pt-16 relative z-10">
        <Hero />
        <Specs />
        <Releases />
        <Telemetry />
      </main>

      {/* Footer */}
      <Footer />

      {/* Decorative Overlay */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-[60]"></div>
    </div>
  );
}

export default App;
