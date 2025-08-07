import { Headerbar, Logo, Paragrafo } from "./styles";
import Logoimg from "../../assets/logo.png";
import Lista from "../lista";
const Header = () => (
  <Headerbar>
    <Logo src={Logoimg} alt={Logo}></Logo>
    <Paragrafo>
      Viva experiências gastronômicas no conforto da sua casa 
    </Paragrafo>
    <Lista />
    

  </Headerbar>
);

export default Header;
