import styled from "styled-components";
export default function Input({ type, placeholder, onChange }) {
  return <StyledInput type={type} placeholder={placeholder} onChange={onChange} />;
}

const StyledInput = styled.input`
  margin-bottom: 1.5rem;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 1px 3px 3px 1px rgba(31, 38, 13, 0.2);
  width: 90%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: .9rem;
  font-weight: 400;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.07rem #03217b;
    backdrop-filter: blur(12rem);
    border-radius: 3px;
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }
`;