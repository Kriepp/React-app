import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { CAROUSEL_DATA } from '../carouselData.js';
import arrowRight from '../images/faA/arrow-right.svg';
import arrowLeft from '../images/faA/arrow-left.svg';
import CarouselButton from './CarouselButton.jsx';

const Carouseldiv = styled.nav`
  background-color: #c4d7b2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
  margin: 3rem;
  padding: 1rem;
  gap: 1rem;
  border-radius: 15%;
  max-width: 33%;
  box-shadow: 15px 10px 15px -3px rgba(0, 0, 0, 0.58);

  img {
    max-width: 15rem;
    border-radius: 10%;
    max-height: 8rem;
  }

  p {
    max-width: 70%;
    margin: 0;
  }
`;

const CarouselSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    padding: 0.5rem;
    display: flex;
    margin: auto;
    border: none;
    border-radius: 50%;
  }

  button:hover {
    border-radius: 50%;
    background-color: #c4d7b2;
  }

  button:active {
    background: #e5e5e5;
    -webkit-box-shadow: inset 0px 0px 5px #c1c1c1;
    -moz-box-shadow: inset 0px 0px 5px #c1c1c1;
    box-shadow: inset 0px 0px 5px #c1c1c1;
    outline: none;
  }
`;

export default function Carousel() {
  const [active, setActive] = useState(0);
  const [userInput, setUserInput] = useState(false);
  const activeContent = CAROUSEL_DATA[active];

  function handlePrevious() {
    let newActive = active - 1;
    if (newActive < 0) {
      newActive = CAROUSEL_DATA.length - 1;
    }
    setActive(newActive);
    setUserInput(true);
  }

  function handleNext() {
    let newActive = active + 1;
    if (newActive >= CAROUSEL_DATA.length) {
      newActive = 0;
    }
    setActive(newActive);
    setUserInput(true);
  }

  useEffect(() => {
    let id;
    if (!userInput) {
      id = setTimeout(() => {
        handleNext();
      }, 500);
    }
    return () => clearTimeout(id);
  }, [active, userInput]);

  const handleUserInput = () => {
    setUserInput(true);
  };

  useEffect(() => {
    let resetTimeout;
    if (userInput) {
      resetTimeout = setTimeout(() => {
        setUserInput(false);
      }, 2000);
    }

    return () => clearTimeout(resetTimeout);
  }, [userInput]);

  return (
    <CarouselSection>
      <CarouselButton
        onClick={handleUserInput}
        onSelect={() => {
          handlePrevious();
        }}
      >
        <img
          src={arrowLeft}
          alt=''
        />
      </CarouselButton>
      <Carouseldiv>
        {' '}
        <img
          src={activeContent.img}
          alt={activeContent.title}
        />
        <h2>{activeContent.title}</h2>
        <p>{activeContent.description}</p>
      </Carouseldiv>
      <CarouselButton
        onClick={handleUserInput}
        onSelect={() => {
          handleNext();
        }}
      >
        <img
          src={arrowRight}
          alt=''
        />
      </CarouselButton>
    </CarouselSection>
  );
}

//TODO transitions for the slide
