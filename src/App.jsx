import aboutPhotoDark from './images/image-about-dark.jpg';
import aboutPhotoLight from './images/image-about-light.jpg';
import iconAngleLeft from './images/icon-angle-left.svg';
import iconAngleRight from './images/icon-angle-right.svg';
import iconArrows from './images/icon-arrow.svg';
import Header from './components/Header';
import data from './data/data';
import './App.css';
import { useState, useEffect, useCallback } from 'react';
import { slideIn } from "./utils/gsapAnimate";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prev =useCallback(()=>{
    currentSlide>0?setCurrentSlide(currentSlide-1):setCurrentSlide(2);
  },[currentSlide])
  const next =useCallback(()=>{
    currentSlide<2?setCurrentSlide(currentSlide+1):setCurrentSlide(0);
  },[currentSlide])

  const handleArrowKeys = useCallback((e)=>{
      if(e.key==="ArrowLeft"){
        prev();
      }
      if(e.key==="ArrowRight"){
        next();
      }
      console.log(e.key);
  },[prev,next])

  useEffect(()=>{
    slideIn(".slider__image",".slider__content");
    window.addEventListener("keydown", handleArrowKeys);
    return function cleanupListener() {
      window.removeEventListener("keydown",handleArrowKeys);
    }
  },[handleArrowKeys])
  return (
    <>
    <Header />
    <main>
      <div className="slider">
        <div className="slider__image--container">
          <picture className="slider__image">
            <source srcSet={data.slide[currentSlide].images.mobileImage} media="(max-width: 600px)" />
            <img src={data.slide[currentSlide].images.heroImage} alt="Furniture Slider" />
          </picture>
          <div className="slider__controls slider__controls-mobile">
            <a href="#prev" className="previous" onClick={()=>{prev()}}> <img src={iconAngleLeft} alt="icon previous" /> </a>
            <a href="#nxt" className="next" onClick={()=>{next()}}><img src={iconAngleRight} alt="icon next" /> </a>
          </div>
        </div>
        <div className="slider__content--container">
          <div className="slider__content">
            <h1 className="slider__content-header"> {data.slide[currentSlide].title}</h1>
            <p className="slider__content-body">{data.slide[currentSlide].content}</p>
            <a href="#shop-now" className="slider__content-link">SHOP NOW <img src={iconArrows} alt="start shopping arrow" /></a>
          </div>
          <div className="slider__controls slider__controls-desktop">
            <a href="#prev" className="previous" onClick={()=>{prev()}}> <img src={iconAngleLeft} alt="icon previous" /> </a>
            <a href="#nxt" className="next" onClick={()=>{next()}}><img src={iconAngleRight} alt="icon next" /> </a>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="about__photo-1">
          <img src={aboutPhotoDark} alt="Nice sitting room black furniture " />
        </div>
        <div className="about__content">
          <h2 className="about__content-header">About our furniture</h2>
          <p className="about__content-text">  Our multifunctional collection blends design and function to suit your individual taste.
            Make each room unique, or pick a cohesive theme that best express your interests and what
            inspires you. Find the furniture pieces you need, from traditional to contemporary styles
            or anything in between. Product specialists are available to help you create your dream space.</p>
        </div>
        <div className="about__photo-2">
        <img src={aboutPhotoLight} alt="White chair" />
        </div>
      </div>
    </main>
    </>
  );
}

export default App;
