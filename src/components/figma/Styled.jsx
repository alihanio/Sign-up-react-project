import styled from "styled-components";

export const RegistrationCard = styled.form`
  width: 36.375rem;
  border-radius: 0.625rem;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background: #fff;s
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display:flex;
  flex-direction: column;
  align-items: center;
  margin-top:2rem;
  margin-bottom:2rem;
`;
export const Heading = styled.h1`
  color: var(--black, #1b1c1f);
  font-family: Inter;
  font-size: 2rem;
  font-weight: 600;
  margin-top: 4.44rem;
  margin-bottom: 1.18rem;
`;
export const Inputs = styled.input`
  width: 28.125rem;
  height: 3.25rem;
  border-radius: 0.625rem;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background: rgba(217, 217, 217, 0);
  padding: 1rem;
  &:focus {
    outline: none;
    border: 3px solid blue;
  }
`;
export const InputsConteiner = styled.div`
  width: 28.125rem;
  height: 4.75rem;
  margin-top: 1.31rem;
`;
export const Paragraph = styled.p`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 1rem;
`;
export const GoogleConteiner = styled.div`
  width: 28.125rem;
  height: 3.25rem;
  border-radius: 0.625rem;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background: rgba(217, 217, 217, 0);
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.19rem;
`;
export const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
export const Text = styled.p`
  color: var(--black, #1b1c1f);
  font-family: Manrope;
  font-size: 1rem;
  font-weight: 500;
`;
export const Buttton = styled.button`
  width: 28.125rem;
  height: 3.25rem;
  border-radius: 0.625rem;
  background: ${({ $bgcolor }) => $bgcolor};
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 4.25rem;
  margin-bottom: 4.8rem;
`;
export const Labels = styled.label`
  color: var(--black, #1b1c1f);
  font-family: Inter;
  font-size: 1rem;
  font-weight: 500;
`;
export const Conteiner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-image: url(${({ $image }) => $image});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
export const Error = styled.p`
  color: red;
  font-family: Inter;
  font-size: 1rem;
`;
