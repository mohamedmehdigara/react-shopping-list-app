// StyledItem.js
import styled from "styled-components";

const StyledItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  background-color: ${(props) => (props.completed ? "#ddd" : "white")};

  input[type="checkbox"] {
    margin-right: 10px;
  }

  button {
    border: none;
    background-color: transparent;
    color: #ff0000;
    cursor: pointer;
  }
`;

export default StyledItem;
