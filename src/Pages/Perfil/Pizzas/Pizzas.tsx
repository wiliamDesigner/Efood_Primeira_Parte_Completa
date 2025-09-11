import {
  Centralizandotudo,
  Criandoagrid,
  EditandoFotosdaPizza,
  Quadradosdapizza,
  TituloPizza,
  DescricaoPizza,
  Botao
} from "./styles";
import Modal from "../Modal/Modal";
import { useEffect,useState } from "react";

type Produto = {
  id: number;
  nome: string;
  descricao: string;
  foto: string;
  preco: number;
  porcao: string;
};


function Pizzas() {

  const[open,setOpen]=useState(false);
  const [produtoId, setProdutoId] = useState<number | null>(null);
  const [produtos, setProdutos] = useState<Produto[]>([]);
  
   useEffect(() => {
    fetch("https://ebac-fake-api.vercel.app/api/efood/restaurantes")
      .then((res) => res.json())
      .then((data) => {
        const restaurante = data[0];
        setProdutos(restaurante.cardapio); 
      })
      .catch((err) => console.error("Erro ao carregar cardápio", err));
  }, []);


  return (
    <>
    <Modal isOpen={open} onClose={()=>setOpen(false)}produtoId={produtoId}/>
    <Centralizandotudo>
      <Criandoagrid>
        {/* 🔹 Aqui está a mágica: o .map() cria os cards */}
          {produtos.map((pizza) => (
            <Quadradosdapizza key={pizza.id}>
              <EditandoFotosdaPizza src={pizza.foto} alt={pizza.nome} />
              <TituloPizza>{pizza.nome}</TituloPizza>
              <DescricaoPizza>{pizza.descricao}</DescricaoPizza>
              <Botao
                onClick={() => {
                  setProdutoId(pizza.id); // passa o id real
                  setOpen(true); // abre o modal
                }}
              >
                Adicionar ao Carrinho
              </Botao>
            </Quadradosdapizza>
          ))}
        </Criandoagrid>
      </Centralizandotudo>
    </>
  );
}

export default Pizzas;
