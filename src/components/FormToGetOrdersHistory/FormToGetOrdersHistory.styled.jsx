import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  border: 1px solid;
  width: 800px;
  padding: 60px 20px 60px 20px;
  gap: 30px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 28px;
`;

export const Input = styled.input`
  margin: 0;
  padding: 0;
  width: 300px;
  height: 50px;
  padding-left: 10px;
  border: none;
  border-radius: 10px;
  font-size: 28px;
`;

export const Button = styled.button`
  margin: 0;
  padding: 0;
  width: 300px;
  height: 50px;
  border: none;
  border-radius: 10px;
  font-size: 28px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #aa90f5;
  }

  transition: background-color 0.2s linear;
`;
