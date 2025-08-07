import styled from "styled-components";
import { cores } from "../../Styles";
export const CardContainer = styled.div`
  width: 472px;
  display: flex;
  flex-direction: column;
`;

export const CardImage = styled.img`
  width: 472px;
  height: 217px;
  object-fit: cover;
`;

export const CardText = styled.div`
  color: ${cores.vermelha};
`;

export const CardImageGroup = styled.div`
   display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
`;
