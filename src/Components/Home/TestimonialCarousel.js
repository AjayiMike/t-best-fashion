import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import Testimonial from "./Testimonial";
import AliceCarousel from 'react-alice-carousel';


const handleDragStart = (e) => e.preventDefault();

const items = [
  <Testimonial image = {require('./images/testifiers images/mr john.jpg')} name = 'John Mercy' profession = '' text = 'T-Best fashion is the best in fashion designs. very talented with diverse styles in design matter.' onDragStart={handleDragStart} />,
  <Testimonial image = "https://fakeimg.pl/100x100/?text=Mike" name = 'Stanley Mike' profession = '' text = 'Just as their name implies, the best amongst fashion designers out there, delivers on time' onDragStart={handleDragStart} />,
  <Testimonial image = {require('./images/testifiers images/mr isaac.jpg')} name = 'Adeniyi Isaac' profession = '' text = 'So far, T-Best Fashion remains the best in fashion designs. i have never regret choosing them over others' onDragStart={handleDragStart} />
];
 
const testimonialCarousel = () => {
  return (
    <AliceCarousel mouseTracking autoPlay = {true} animationDuration = {500} autoPlayInterval = {3000} autoPlayStrategy = "default" disableButtonsControls = {true} infinite = {true} items={items} />
  );
}

export default testimonialCarousel;