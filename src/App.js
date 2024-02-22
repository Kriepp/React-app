import Header from './pages/Header.jsx';
import Footer from './pages/Footer.jsx';
import Main from './pages/Main.jsx';
import styled from 'styled-components';
import React, { useState } from 'react';
import { MASSAGE_TYPES } from './data.js';
import TabButton from './pages/TabButton.jsx';
import Carousel from './pages/Carousel.jsx';

const Div = styled.div`
  font-family: 'Roboto Mono', monospace;
  background-color: #f3eeea;
`;

const ButtonMenu = styled.menu`
  margin: 1rem 0;
  padding: 0;
  display: flex;
  gap: 0.5rem;
  list-style: none;
  justify-content: center;

  button {
    border-radius: 10px;
    background-color: white;
    border: none;
    color: black;
    text-align: center;
    font-size: 1.2rem;
    padding: 1rem;
    width: auto;
    transition: all 0.3s;
    cursor: pointer;
    margin: 1.5rem;
    box-shadow: 0 10px 20px -8px rgba(0, 0, 0, 0.7);
  }

  button {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.3s;
  }

  button:after {
    content: '»';
    position: absolute;
    opacity: 0;
    top: 14px;
    right: -20px;
    transition: 0.3s;
  }

  button:hover {
    padding-right: 24px;
    padding-left: 8px;
  }

  button:hover:after {
    opacity: 1;
    right: 10px;
  }

  button.active {
    background-color: #90a17d;
    color: black;
  }
`;

const UserInputDiv = styled.div`
  min-height: 21rem;
  position: relative;
  max-width: 65vw;
  margin: 1rem auto;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 10px 10px 25px 0px rgba(0, 0, 0, 0.75);
  padding: 1.5rem;

  h2 {
    text-align: center;
  }

  p {
    text-indent: 2rem;
    padding-top: 0.5rem;
  }

  img {
    max-width: 20%;
    display: block;
    margin: auto;
  }
`;

const SectionWrapper = styled.section`
  background-color: #c4d7b2;
  padding-bottom: 1rem;
`;

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  const selectedMassage = MASSAGE_TYPES[selectedTopic];

  function handleContent(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <Div>
      <Header />
      <Main />
      <SectionWrapper>
        <ButtonMenu>
          <TabButton
            isSelected={selectedTopic === 'Therapeutic'}
            onSelect={() => handleContent(`Therapeutic`)}
          >
            Masajul terapeutic
          </TabButton>
          <TabButton
            isSelected={selectedTopic === 'Relaxing'}
            onSelect={() => handleContent(`Relaxing`)}
          >
            Masajul de relaxare
          </TabButton>
          <TabButton
            isSelected={selectedTopic === 'Anticelulitic'}
            onSelect={() => handleContent(`Anticelulitic`)}
          >
            Masajul anticelulitic
          </TabButton>
          <TabButton
            isSelected={selectedTopic === 'Drenaj'}
            onSelect={() => handleContent(`Drenaj`)}
          >
            Drenajul limfatic
          </TabButton>
        </ButtonMenu>
        <UserInputDiv>
          {selectedMassage ? (
            <>
              {selectedMassage.image && (
                <img
                  src={selectedMassage.image}
                  alt={selectedMassage.title}
                />
              )}
              <h2>{selectedMassage.title}</h2>
              <p>{selectedMassage.description}</p>
            </>
          ) : (
            <h2>Te rog selecteaza tipul de masaj pe care il doresti.</h2>
          )}
        </UserInputDiv>
      </SectionWrapper>
      <Carousel />
      <Footer />
    </Div>
  );
}

export default App;
