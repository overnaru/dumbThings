import React, { Component} from 'react';
import { Carousel } from 'react-bootstrap';


export default class FadeCarousel extends Component {

   render() {

     return (
      <section className = "carouselSection">
       <Carousel className = "carousel carousel-fade">
           <Carousel.Item animateIn={true} animateOut={true} >
             <Carousel.Caption>
               <h3>First slide label</h3>
               <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
             </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item animateIn={true} animateOut={true} >
             <Carousel.Caption>
               <h3>Second slide label</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
             </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item animateIn={true} animateOut={true} >
             <Carousel.Caption>
               <h3>Third slide label</h3>
               <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
             </Carousel.Caption>
           </Carousel.Item>
         </Carousel>
       </section>
     );
   }
}
