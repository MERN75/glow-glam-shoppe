
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturedCollections from '@/components/FeaturedCollections';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation cartCount={3} />
      <HeroSection />
      <FeaturedCollections />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
