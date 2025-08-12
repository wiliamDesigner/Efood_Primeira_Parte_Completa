import { Containerimg, Containerimgep, Headerbar, Imgapressentacao, Menu, Paragrafo, TextoLadoce, TextoSobreImagem } from "./styles";
import logoimg2 from "../../assets/logo.png"
import apressentacao from "../../assets/apressentacao.png"
import Pizzas from "./Pizzas/Pizzas";
import Footer from "./Foot/Footer";
import { Link } from "react-router-dom";
function Perfil(){

    return(
        <>
        <Headerbar>
            <Menu>
            <Paragrafo>Restaurante</Paragrafo>
            <Link to="/">
             <img src={logoimg2} alt="Logo" />
             </Link>
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