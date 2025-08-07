import React from "react";
import Header from "../../components/Header";
import Cardlist from "../../components/Cardlista";
import { Globalcss } from "../../../src/Styles";
import Footer from "../../components/footer";
import Perfil from "../Perfil/Perfil";


function Home() {
  return (
    <>
      <Globalcss />
      <div>
        <Header/>
      </div>
      <Footer/>
    </>
  );
}

export default Home;
