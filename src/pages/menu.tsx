import Head from "next/head";
import Header from "../components/Header";
import { pizzas } from "../data/menu.json";
import Link from "next/link";
import Image from "next/image";

export default function Menu() {
   return (
      <div className="container">
         <Head>
            <title>Pizzaton - Menu</title>
         </Head>
         <Header />
         <main>
            <h1>Menu</h1>
            {pizzas.map(({ name, price, slug, photo }) => (
               <div key={slug}>
                  <Link href={`/pizzas/${slug}`}>
                     <a>
                        <Image
                           src={photo}
                           alt={`Foto da pizza ${name}`}
                           width={300}
                           height={160}
                        />
                        <p>
                           {name} ({price})
                        </p>
                     </a>
                  </Link>
               </div>
            ))}
         </main>
      </div>
   );
}
