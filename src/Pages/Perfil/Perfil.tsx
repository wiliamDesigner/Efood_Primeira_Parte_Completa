import { Containerimg, Containerimgep, Headerbar, Imgapressentacao, Menu, Paragrafo, TextoLadoce, TextoSobreImagem } from "./styles";
import logoimg2 from "../../assets/logo.png"
import apressentacao from "../../assets/apressentacao.png"
import Pizzas from "./Pizzas/Pizzas";
import Footer from "./Foot/Footer";
function Perfil(){

    return(
        <>
        <Headerbar>
            <Menu>
            <Paragrafo>Restaurante</Paragrafo>
             <img src={logoimg2} alt="Logo" />
            <Paragrafo>0 Produto(s) no carinho</Paragrafo>
            </Menu>
        </Headerbar>
        <Containerimg>
            <Containerimgep>
            <TextoSobreImagem>italiana</TextoSobreImagem>
             <Imgapressentacao src={apressentacao} alt="imagem do macarão" />
             <TextoLadoce>La Dolce Vita Trattoria</TextoLadoce>
            </Containerimgep>
        </Containerimg>
        <Pizzas/>
        <Footer/>
        </>
    );
}

export default Perfil;