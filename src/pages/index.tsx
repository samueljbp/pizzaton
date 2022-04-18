import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import { slogan, address, phone, whatsapp } from "../data/pizzaton.json";

const Home: NextPage = () => {
   return (
      <div>
         <Head>
            <title>Pizzaton</title>
            <link rel="ïcon" href="favicon.ico" />
         </Head>
         <div className="container">
            <Header />
            <main>
               <h2 className="slogan">{slogan}</h2>
               <div className="info">
                  <p>
                     📍<strong>Endereço: </strong>
                     {address}
                  </p>
                  <p>
                     ☎<strong>Telefone: </strong>
                     {phone}
                  </p>
                  <p>
                     📱<strong>Whatsapp: </strong>
                     {whatsapp}
                  </p>
               </div>
            </main>
         </div>
      </div>
   );
};

export default Home;
