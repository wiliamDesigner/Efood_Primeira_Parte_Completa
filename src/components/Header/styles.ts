import styled from "styled-components";
import backgroundimg from "../../assets/fundo.png";
import { cores } from "../../Styles";


export const Headerbar = styled.header`
  background-image: url(${backgroundimg});
  width: auto;
  height: auto;
  padding: 16px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 140px;
`;

export const Logo = styled.img`

  width: 125px;
  height: 57.5px;
`;

export const Paragrafo = styled.p`
  max-width: 500px;
  color: ${cores.vermelha};
  text-align: center;
  font-size: 36px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  line-height: 100%;
`;
