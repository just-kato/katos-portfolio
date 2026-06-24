import { TopBar } from './components/TopBar/TopBar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { HowIHelp } from './components/HowIHelp/HowIHelp';
import { TrackRecord } from './components/TrackRecord/TrackRecord';
import { Work } from './components/Work/Work';
import { Testimonials } from './components/Testimonials/Testimonials';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

export default function App() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <TopBar />
      <Hero />
      <About />
      <HowIHelp />
      <TrackRecord />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
