import styled from "styled-components";
import { cores } from "../../../Styles";
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Organizacao=styled.div`
display: flex;
flex-direction: row;
margin-left: 32px;
`

export const TextoeBotoes=styled.div`
display: flex;
flex-direction: column;
margin-left: 24px;

`

export const TextoTitulo=styled.h1`
color: #FFFFFF;
`

export const Textodescricao=styled.p`

color:#FFFFFF ;
`


export const Btnfechar=styled.button`
font-size: 16px;
color: ${cores.branca};
background: transparent;
border: none;
`

export const Content = styled.div`
  width: 1024px;
  height: 344px;
  padding: 20px;
  min-width: 300px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  background-color: ${cores.vermelha};
`;

export const Texto = styled.h2`
  color: ${cores.branco_mais_claro};
`;
