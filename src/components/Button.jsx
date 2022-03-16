import styled from "styled-components";

export default function Button({ content }) {
  return <StyledButton>{content}</StyledButton>;
}

// background: linear-gradient(to right, #14163c 0%, #03217b 79%);
const StyledButton = styled.button`
  background: linear-gradient(to right, #03217b 0%, #03217b  75%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 2rem;
  border: none;
  color: white;
  border-radius: 1rem;
  cursor: pointer;
  font-size: .9rem;
`;