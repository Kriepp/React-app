import styled from 'styled-components';
import logo from '../images/logo.webp';
import faFacebook from '../images/facebook.svg';
import faInstagram from '../images/instagram.svg';
import faGitHub from '../images/github.svg';
import FormEmail from './FormEmail';

const StyledParagraph = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const FooterSection = styled.section`
  display: grid;
  grid-template-columns: auto 200px;
  grid-template-rows: 63px minmax(160px, auto) auto;
  grid-template-areas:
    'header  header'
    'main  rightbar'
    'footer  footer';
  column-gap: auto;
  row-gap: auto;
  background-color: #c4d7b2;
`;

const FooterDivHeader = styled.header`
  grid-area: header;
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  h2 {
    display: inline-flex;
    font-size: auto;
    margin: auto;
  }
`;

const FooterDivRight = styled.aside`
  grid-area: rightbar;

  ul {
    list-style-type: none;
    display: grid;
    justify-content: space-evenly;
    justify-items: center;
  }

  li {
    margin-top: 2.5rem;
  }

  a {
    position: relative;
    color: black;
    text-decoration: none;
  }

  a::before {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #000;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  a:hover::before {
    transform: scaleX(1);
  }
`;

const FooterDivFooter = styled.footer`
  grid-area: footer;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  ul {
    display: inline-flex;
    list-style: none;
    gap: 0.75rem;
    padding-left: 2rem;
  }

  li {
    padding-right: 2rem;
  }
`;

const FooterLogo = styled.img`
  grid-area: main;
  display: inline-block;
  border-radius: 45% 10%;
  margin-left: 0.5rem;
  margin-top: 1rem;
`;

export default function Footer() {
  return (
    <>
      <FooterSection>
        <FooterDivHeader>
          <h2>Rezervă chiar acum o experiență de neuitat!</h2>
        </FooterDivHeader>
        <FooterLogo
          src={logo}
          alt='logo'
        />
        <FormEmail></FormEmail>
        <FooterDivRight>
          <ul>
            <li>
              <a href=''>Contact</a>
            </li>
            <li>
              <a href=''>Despre mine</a>
            </li>
            <li>
              <a href=''>Rezervare</a>
            </li>
          </ul>
        </FooterDivRight>
        <FooterDivFooter>
          <h3>Follow me</h3>
          <ul>
            <li>
              <a href='https://m.facebook.com/satmarclaudiu/'>
                <img
                  src={faFacebook}
                  alt=''
                />
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/satmarclaudiu/'>
                {' '}
                <img
                  src={faInstagram}
                  alt='Instagram'
                />
              </a>
            </li>
            <li>
              <a href='https://github.com/Kriepp'>
                <img
                  src={faGitHub}
                  alt='GitHub'
                />
              </a>
            </li>
          </ul>
        </FooterDivFooter>
      </FooterSection>
      <StyledParagraph>Created by Satmar Claudiu</StyledParagraph>
    </>
  );
}
