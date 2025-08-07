import { createGlobalStyle } from "styled-components";
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
export const cores = {
  branca: "#eee",
  preta: "#111",
  vermelha: "#E66767",
  branco_mais_claro: "#FFF8F2",
  fundo_footer:"#FFEBD9"
};

export const Globalcss = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

body{
    background-color: ${cores.preta};
    color: ${cores.branca};
}
`;
