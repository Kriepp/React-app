import styled from 'styled-components';
import logo from '../images/logo.webp';

const Div = styled.div`
  display: inline flex;
  width: 100%;
  background-color: #c4d7b2;

  h1 {
    justify-content: center;
    margin: auto;
    color: black;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    margin-top: 0.6rem;
    display: grid;
    justify-content: center;
    padding: 0.5vw;
  }

  a {
    text-decoration: none;
    box-shadow: inset 0 0 0 0 black;
    color: #222831;
    margin: 0 -0.25rem;
    padding: 0 0.25rem;
    transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }
  a:hover {
    box-shadow: inset 100px 0 0 0 black;
    color: white;
  }
`;

const LogoImage = styled.img`
    margin: auto;
    margin-right: 1rem;
    margin-left: 0.2rem;
    border-radius: 25%;
    height: 8vh;
    max-width: auto;
    padding-top: 0.1rem;
  }
`;

export default function Header() {
  return (
    <Div>
      <LogoImage
        src={logo}
        alt='Logo'
      />
      <h1>Rezervă-ți Relaxarea: Asigură-ți Experiența de Masaj Acum</h1>
      <ul>
        <li>
          <a href=''>Rezervare</a>
        </li>
      </ul>
    </Div>
  );
}
