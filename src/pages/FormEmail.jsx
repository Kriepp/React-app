import styled from 'styled-components';

const StyledForm = styled.form`
  grid-area: main;
  display: grid;
  gap: 0.2rem;
  margin-left: 15rem;
  align-content: center;
  justify-content: center;

  label {
    font-size: 1.5rem;
    padding-bottom: 1rem;
    text-transform: capitalize;
    font-weight: 700;
    letter-spacing: 0.2rem;
    word-spacing: 0.4rem;
    font-style: italic;
  }

  input {
    display: flex;
    width: auto;
    height: 2rem;
  }

  button {
    display: inline-flex;
    justify-content: space-evenly;
    height: auto;
    margin: 0.25rem 6rem;
  }
`;

export default function FormEmail() {
  return (
    <StyledForm action=''>
      <label htmlFor=''>Introduceti emailul pentru notificari:</label>
      <input
        type='email'
        name=''
        id=''
      />
      <button type='submit'>Submit</button>
    </StyledForm>
  );
}
