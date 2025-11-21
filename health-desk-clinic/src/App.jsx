import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SectionHeading from './components/SectionHeading';
import CategoryCard from './components/CategoryCard';
import CategorySlider from './components/CategorySlider';
import ProductCard from './components/ProductCard';
import TrustSection from './components/TrustSection';
import FeatureSection from './components/FeatureSection';
import CharitySection from './components/CharitySection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import product1 from './assets/images/product1.png';
import product2 from './assets/images/product2.png';
import product3 from './assets/images/product3.png';
import product4 from './assets/images/product4.png';
import product5 from './assets/images/product5.png';
import naturalImage from './assets/images/natural-image.jpg';
import researchImage from './assets/images/research-image.jpg';
import ecoImage from './assets/images/eco-image.jpg';

function App() {
  const categories = [
    {
      title: 'Weight Loss',
      description: 'Shop trusted weight loss products that help boost metabolism and support your journey to a healthier you',
      icon: '⚖️'
    },
    {
      title: 'Nerve Pain',
      description: 'Find relief with nerve pain products formulated to soothe discomfort and support healthy nerve function',
      icon: '⚡'
    },
    {
      title: 'Skin Care',
      description: 'Explore premium skincare products that nourish, protect, and enhance your natural glow',
      icon: '✨'
    },
    {
      title: 'Men’s Health',
      description: 'Discover men’s health products designed to boost energy, strength, and overall well-being.',
      icon: '💪'
    },
    {
      title: 'Women’s Health',
      description: 'Explore women’s health products to support hormonal balance and overall wellness',
      icon: '👩'
    }
  ];

  const bestSellers = [
    { name: 'Dent Pure', rating: 5, image: product1 },
    { name: 'True Fem', rating: 5, image: product2 },
    { name: 'Vita Renew', rating: 5, image: product3 },
    { name: 'ProstaZen', rating: 5, image: product4 },
    { name: 'Nerve Freedom', rating: 5, image: product5 }
  ];

  return (
    <div className="app">
      <Header />
      <Hero />

      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          <SectionHeading
            title={["Nutrition Solutions", "for Your Complete Well-Being"]}
          />
          <CategorySlider categories={categories} />
        </div>
      </section>

      <section className="section" style={{ padding: '80px 0', backgroundColor: '#fff' }}>
        <div className="container">
          <SectionHeading
            title="Our Best Sellers"
            align="left"
          />
          <p style={{ marginBottom: '40px', color: '#4b5563' }}>
            Formulated with science-backed all-natural ingredients, our unique supplements support holistic health, healing & wellness.
          </p>
          <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
            {['Results-Driven', 'All-Natural', 'Non-GMO', 'Cruelty-Free'].map((tag, i) => (
              <span key={i} style={{ fontWeight: '600', paddingRight: '20px', borderRight: i < 3 ? '1px solid #ccc' : 'none' }}>{tag}</span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {bestSellers.map((product, index) => (
              <div key={index} style={{ flex: '1 1 200px', maxWidth: '220px' }}>
                <ProductCard
                  name={product.name}
                  rating={product.rating}
                  image={<img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustSection />

      <div style={{ padding: '40px 0' }}>
        <div className="container" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <SectionHeading
            title={["Health Care Desk", "The Future Of Smart Health"]}
          />
          <p style={{ maxWidth: '800px', margin: '0 auto', color: '#4b5563' }}>
            At Health Care Desk, we are committed to producing supplements that harness the power of all-natural superfoods. Our products help support the body's natural processes, improving our customers' quality of life.
          </p>
        </div>

        <FeatureSection
          title="100% Natural Components"
          subtitle="Nature-Powered Wellness You Can Trust"
          description="We harness the goodness of nature to create supplements enriched with premium, research-backed superfood extracts. Each formula is carefully crafted to promote overall vitality and deliver proven health benefits. At Health Desk Care, we uphold the highest standards of quality, safety, and regulatory compliance, ensuring every product you choose is both effective and trustworthy."
          imageLeft={true}
          image={<img src={naturalImage} alt="Natural Components" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />}
        />

        <FeatureSection
          title="Research-Backed Formulations"
          subtitle="Formulated with Clinically Tested Ingredients"
          description="We combine the expertise of our physicians with the latest health data and medical research, ensuring every supplement is thoughtfully formulated for maximum benefit."
          imageLeft={false}
          image={<img src={researchImage} alt="Research Backed" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />}
        />

        <FeatureSection
          title="Eco-Conscious Manufacturing"
          subtitle="Sustainable from Source to Shelf"
          description="Our supplements are crafted in certified facilities that meet and exceed industry standards — ensuring exceptional quality while minimizing environmental impact. Through eco-friendly processes and a commitment to reducing our carbon footprint, we create wellness solutions that are as good for the planet as they are for you."
          imageLeft={true}
          image={<img src={ecoImage} alt="Eco Conscious" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />}
        />
      </div>

      <CharitySection />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
