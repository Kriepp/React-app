import styled from 'styled-components';
import MassageCartoon from '../images/massage-cartoon.png';

const MainDescription = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 60vw;
margin: 8rem auto 4rem;
padding: 1.3rem;
background-color: #fff;
border-radius: 8px;
box-shadow: 10px 10px 25px 0px rgba(0,0,0,0.75);
text-align: justify;
}

  h1 {
    color: #C4D7B2;
    text-align: center;
  }

  p {
    line-height: 1.6;
  }`;

const Images = styled.img`
  height: auto;
  width: 10em;
`;

export default function Main() {
  return (
    <>
      <MainDescription>
        <Images
          src={MassageCartoon}
          alt='massage image'
        />
        <h1>Masajul</h1>
        <p>
          este o practică străveche cu beneficii profunde pentru sănătate și
          binele general. Prin utilizarea mișcărilor atent aplicate asupra
          țesuturilor corpului, masajul are rolul de a relaxa mușchii, de a
          îmbunătăți circulația sângelui și de a aduce o stare de liniște și
          relaxare. Există diverse tipuri de masaj, de la cel suedez, care
          folosește mișcări ritmice pentru relaxare, la masajul terapeutic, care
          se concentrează pe tratarea anumitor probleme de sănătate. Fiecare
          sesiune de masaj oferă un moment prețios de conectare cu propriul corp
          și de reducere a stresului cotidian. Prin stimularea corpului și a
          minții, masajul nu doar calmează tensiunile fizice, ci contribuie și
          la îmbunătățirea stării de spirit și a calității somnului. Este o
          modalitate eficientă de a-ți acorda un timp de calitate pentru a-ți
          îngriji corpul și a-ți revitaliza întregul ființă.
        </p>
      </MainDescription>
    </> // fragment, so cool much wow
  );
}
