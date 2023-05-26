import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  gap: 30px;
  margin-top: 50px;
  margin-bottom: 50px;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 20px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 28px;
`;

export const Input = styled.input`
  padding: 0;
  margin: 0;
  padding-left: 20px;
  border: none;
  width: 400px;
  height: 80px;
  border-radius: 10px;
  font-size: 28px;

  &:focus {
    outline: 2px solid #aa90f5;
  }
`;

export const Button = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  width: 400px;
  height: 80px;
  border-radius: 20px;
  font-size: 28px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #aa90f5;
  }

  transition: background-color 0.2s linear;
`;
