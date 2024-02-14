// StyledInput.js
import styled from "styled-components";

const StyledInput = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  input[type="text"] {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  button {
    margin-left: 10px;
    padding: 10px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export default StyledInput;
