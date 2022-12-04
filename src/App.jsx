import heroImage1 from './images/desktop-image-hero-1.jpg';
import mobileHeroImage1 from './images/mobile-image-hero-1.jpg';
import aboutPhotoDark from './images/image-about-dark.jpg';
import aboutPhotoLight from './images/image-about-light.jpg';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <>
    <Header />
    <main>
      <div className="slider">
        <div className="slider__image--container">
          <picture className="slider__image">
            <source srcSet={mobileHeroImage1} media="(max-width: 600px)" />
            <img src={heroImage1} alt="MDN" />
          </picture>
          <div className="slider__controls slider__controls-mobile">
            <a href="#prev" className="previous">previous</a>
            <a href="#nxt" className="next">next</a>
          </div>
        </div>
        <div className="slider__content--container">
          <div className="slider__content">
            <h1 className="slider__content-header"> Discover innovative ways to decorate</h1>
            <p className="slider__content-body">We provide unmatched quality, comfort, and style for property owners across the country. 
              Our experts combine form and function in bringing your vision to life. Create a room in your 
              own style with our collection and make your property a reflection of you and what you love.</p>
            <a href="" className="slider__content-link">SHOP NOW</a>
          </div>
          <div className="slider__controls slider__controls-desktop">
            <a href="#prev" className="previous">previous</a>
            <a href="#nxt" className="next">next</a>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="about__photo-1">
          <img src={aboutPhotoDark} alt="" />
        </div>
        <div className="about__content">
          <h2 className="about__content-header">About our furniture</h2>
          <p className="about__content-text">  Our multifunctional collection blends design and function to suit your individual taste.
            Make each room unique, or pick a cohesive theme that best express your interests and what
            inspires you. Find the furniture pieces you need, from traditional to contemporary styles
            or anything in between. Product specialists are available to help you create your dream space.</p>
        </div>
        <div className="about__photo-2">
        <img src={aboutPhotoLight} alt="" />
        </div>
      </div>
    </main>
    </>
  );
}

export default App;
