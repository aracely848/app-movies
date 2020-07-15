import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselIndicators, CarouselCaption } from 'reactstrap';
import './banner.css';

const items = [

  {
    id:1,
    imagen: 'assets/images/banners/banner-aquaman.jpg',
    title: 'Aquaman',
    description: 'Arthur Curry (Jason Momoa), the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war between the worlds of ocean and land.',
    link: 'Slide 1',
    more_information: 'more information'
  },
  {
    id:2,
    imagen: 'assets/images/banners/banner-bumblebee.jpg',
    title: 'Bumblebee',
    description: 'On the run in the year 1987, Bumblebee finds refuge in a junkyard in a small California beach town. On the cusp of turning 18 and trying to find her place in the world, Charlie Watson discovers Bumblebee, battle-scarred and broken.',
    link: 'Slide 1',
    more_information: 'more information'
  },
  {
    id:3,
    imagen: 'assets/images/banners/banner-venom.png',
    title: 'Venom',
    description: 'A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it.',
    link: 'Slide 1',
    more_information: 'more information'
  }
];

const Banner = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id} >
        <img src={item.imagen} className="d-block w-100" alt={item.title} />
        <CarouselCaption classname="movie-info" captionText={item.description} captionHeader={item.title} />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
       {slides}
    </Carousel>
  );
}

export default Banner;