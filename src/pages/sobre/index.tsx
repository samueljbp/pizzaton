import Head from "next/head";
import Header from "../../components/Header";

export default function Sobre() {
   return (
      <div className="container">
         <Head>
            <title>Pizzaton - Sobre</title>
         </Head>
         <Header />
         <main>
            <h1>Sobre a pizzaria</h1>

            <p>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit.
               Accusantium non, ipsa deserunt minima voluptas unde nulla eos
               delectus in, eius vel adipisci? Eligendi facilis, quos quaerat
               aliquid iure at eum.
            </p>
         </main>
      </div>
   );
}
