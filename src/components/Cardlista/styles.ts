import styled from "styled-components";
import { cores } from "../../Styles";

export const Cardes = styled.div` //quadrado branco
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  align-items: start;
  background-color: ${cores.branco_mais_claro};
  width: 980px;
  height: 708px;
`;

export const CardItem = styled.div` //retangulo vermelho
  width: 472px;
  height: 181px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  color: ${cores.vermelha};
  border: 1px solid ${cores.vermelha};
  font-size: 18px;
  font-family: "Roboto";
`;



