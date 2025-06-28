// app/page.js
import HeroSection from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Sponsors from '@/components/Sponsors';
import Highlights from '@/components/Highlights';
import Speakers from '@/components/Speakers';
import Agenda from '@/components/Agenda';
import Testimonials from '@/components/Testimonials';
import Registration from '@/components/Registration';
import Pricing from '@/components/Pricing';
import Faq from '@/components/Faq';

export default function HomePage() {
  return (
    <>
      {/* You would typically have a Header/Navbar component here 
      */}
      <main className="main-wrapper">
        <HeroSection />
        <AboutUs />
        <Highlights />
        <Registration />
        <Pricing />
        <br />
      </main>
      {/* You would typically have a Footer component here 
      */}
    </>
  );
}