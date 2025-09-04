import {
  Centralizandotudo,
  Criandoagrid,
  EditandoFotosdaPizza,
  Quadradosdapizza,
  TituloPizza,
  DescricaoPizza,
  Botao
} from "./styles";
import Pizzasfoto from "../../../assets/Pizza.png";
import Modal from "../Modal/Modal";
import { useState } from "react";

function Pizzas() {

  const[open,setOpen]=useState(false);

  return (
    <>
    <Modal isOpen={open} onClose={()=>setOpen(false)}/>
    <Centralizandotudo>
      <Criandoagrid>
        <Quadradosdapizza>
          <EditandoFotosdaPizza src={Pizzasfoto} alt="Pizza Margherita" />
          <TituloPizza>Pizza Margherita</TituloPizza>
          <DescricaoPizza>
            A clássica Margherita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!
          </DescricaoPizza>
          <Botao onClick={()=>setOpen(true)}>Adicionar ao Carrinho</Botao>
          
          

        </Quadradosdapizza>

        <Quadradosdapizza>
          <EditandoFotosdaPizza src={Pizzasfoto} alt="Pizza Margherita" />
          <TituloPizza>Pizza Margherita</TituloPizza>
          <DescricaoPizza>
            A clássica Margherita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!
          </DescricaoPizza>
          <Botao>Adicionar ao Carrinho</Botao>
        </Quadradosdapizza>

        <Quadradosdapizza>
          <EditandoFotosdaPizza src={Pizzasfoto} alt="Pizza Margherita" />
          <TituloPizza>Pizza Margherita</TituloPizza>
          <DescricaoPizza>
            A clássica Margherita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!
          </DescricaoPizza>
          <Botao>Adicionar ao Carrinho</Botao>
        </Quadradosdapizza>
        <Quadradosdapizza>
          <EditandoFotosdaPizza src={Pizzasfoto} alt="Pizza Margherita" />
          <TituloPizza>Pizza Margherita</TituloPizza>
          <DescricaoPizza>
            A clássica Margherita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!
          </DescricaoPizza>
          <Botao>Adicionar ao Carrinho</Botao>
        </Quadradosdapizza>

        <Quadradosdapizza>
          <EditandoFotosdaPizza src={Pizzasfoto} alt="Pizza Margherita" />
          <TituloPizza>Pizza Margherita</TituloPizza>
          <DescricaoPizza>
            A clássica Margherita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!
          </DescricaoPizza>
          <Botao>Adicionar ao Carrinho</Botao>
        </Quadradosdapizza>

        <Quadradosdapizza>
          <EditandoFotosdaPizza src={Pizzasfoto} alt="Pizza Margherita" />
          <TituloPizza>Pizza Margherita</TituloPizza>
          <DescricaoPizza>
            A clássica Margherita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!
          </DescricaoPizza>
          <Botao>Adicionar ao Carrinho</Botao>
        </Quadradosdapizza>
      </Criandoagrid>
    </Centralizandotudo>
    </>
  );
}

export default Pizzas;
