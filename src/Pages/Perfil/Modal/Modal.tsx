import { Overlay, Content, Texto, Btnfechar, Header, Organizacao, TextoeBotoes, TextoTitulo, Textodescricao } from "../Modal/Styles";
import pizzaImg from "../../../assets/imagem-da-pizza.png"

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <Content>
        <Header>
        <Btnfechar onClick={onClose}>X</Btnfechar>
        </Header>
        <Organizacao>
        <img src={pizzaImg} alt="" />
        <TextoeBotoes>
        <TextoTitulo>Texto de titulo</TextoTitulo>
        <Textodescricao>descrição</Textodescricao>
        <button>Adicionar ao carrinho</button>
        </TextoeBotoes>
        </Organizacao>
      <Texto>Olá mundo</Texto>
      </Content>
    </Overlay>
  );
};

export default Modal;
