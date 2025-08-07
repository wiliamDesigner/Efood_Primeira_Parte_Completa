import styled from "styled-components";
import backgroundimg from "../../assets/fundo.png";
import { cores } from "../../Styles";



export const Headerbar = styled.header`
  background-image: url(${backgroundimg});
  max-width: 1366px;
  margin: 0px auto;
  width: 100%;
  padding: 16px 8px;
  display: flex;
  flex-direction: row;
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
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  line-height: 100%;
`;

export const Menu =styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
gap: 218px;

`
export const Containerimg=styled.div`
display: flex;
align-items: center;
justify-content: center;
`

export const Imgapressentacao=styled.img`
 max-width: 1366px;
 margin: 0 auto;
  width: 100%;
  filter: brightness(0.5);
`

export const Containerimgep = styled.div`
  position: relative; 
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const TextoSobreImagem = styled.p`
  position: absolute;
  top: 2%;
  left: 10%;
  color: ${cores.branca};
  font-size: 32px;
  z-index: 2;
  opacity: 50%;
  font-family: "Roboto", sans-serif;
  font-weight: thin;

`

export const TextoLadoce=styled.p`
 position: absolute;
  top: 60%;
  left: 10%;
  color: ${cores.branca};
  font-size: 32px;
  font-weight: bold;
  z-index: 2;
  font-family: "Roboto", sans-serif;

`