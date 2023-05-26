import styled from "@emotion/styled";

export const Conteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 500px;
  flex-direction: column;
  border: 1px solid;
  border-radius: 20px;
`;

export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

export const Img = styled.div`
  width: 200px;
  height: 200px;
  background-color: orange;
`;

export const Name = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;

  font-size: 24px;
`;

export const Price = styled.p`
  margin: 0;
  padding: 0;
  font-size: 24px;
`;

export const Input = styled.input`
  width: 200px;
  height: 60px;
  border-radius: 10px;
  margin: 0;
  padding: 0;
  border: none;
  padding-left: 10px;
  font-size: 24px;
`;
