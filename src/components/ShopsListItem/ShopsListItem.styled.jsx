import styled from "@emotion/styled";

export const Btn = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  width: 300px;
  height: 60px;
  border-radius: 20px;
  font-size: 28px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#aa90f5" : "#6B6B6B")};
  &:hover,
  &:focus {
    background-color: #aa90f5;
  }

  transition: background-color 0.2s linear;
`;

export const SelectedBtn = styled(Btn)`
  background-color: #aa90f5;
`;
