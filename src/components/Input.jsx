import styled from "styled-components";
export default function Input({ type, placeholder }) {
  return <StyledInput type={type} placeholder={placeholder} />;
}

const StyledInput = styled.input`
  margin-bottom: 1rem;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 1px 3px 3px 1px rgba(31, 38, 13, 0.2);
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 0 8px 0 8px;
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }
`;