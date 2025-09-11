import {
  Overlay,
  Content,
  Btnfechar,
  Header,
  Organizacao,
  TextoeBotoes,
  TextoTitulo,
  Textodescricao,
  BotaoComprar,
  ImagemProduto,
} from "../Modal/Styles";
import { useEffect, useState } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  produtoId: number | null;
};

type Produto = {
  id: number;
  nome: string;
  descricao: string;
  foto: string;
  preco: number;
  porcao: string;
};

const Modal = ({ isOpen, onClose, produtoId }: ModalProps) => {
  const [produto, setproduto] = useState<Produto | null>(null);

  useEffect(() => {
    if (isOpen && produtoId !== null) {
      fetch("https://ebac-fake-api.vercel.app/api/efood/restaurantes")
        .then((res) => res.json())
        .then((data) => {
          const restaurante = data[0];
          const item = restaurante.cardapio.find(
            (p: Produto) => p.id === produtoId
          );
          console.log("Produto carregado:", item);
          setproduto(item);
        })
        .catch((err) => console.error("Erro ao carregar o produto", err));
    }
  }, [isOpen,produtoId]);

  if (!isOpen) return null;

  return (
    <Overlay>
      <Content>
        <Header>
          <Btnfechar onClick={onClose}>X</Btnfechar>
        </Header>
        <Organizacao>
          {produto ? (
            <>
              <ImagemProduto src={produto.foto} alt={produto.nome} />
              <TextoeBotoes>
                <TextoTitulo>{produto.nome}</TextoTitulo>
                <Textodescricao>{produto.descricao}</Textodescricao>
                <Textodescricao>Serve: de {produto.porcao} </Textodescricao>
                <BotaoComprar>
                  Adicionar ao carrinho -{" "}
                  {produto.preco.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </BotaoComprar>
              </TextoeBotoes>
            </>
          ) : (
            <p>Carregando...</p>
          )}
        </Organizacao>
      </Content>
    </Overlay>
  );
};

export default Modal;
