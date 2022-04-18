import Head from "next/head";
import Header from "../../components/Header";
import { pizzas } from "../../data/menu.json";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";

interface PizzasProps {
   flavor: string;
}

export default function Flavor(props: PizzasProps) {
   const pizza: any | undefined = pizzas.find((p) => p.slug === props.flavor);

   return (
      <div className="container">
         <Head>
            <title>Pizzaton - Menu</title>
         </Head>
         <Header />
         <main>
            <h1>{pizza.name}</h1>
            <h2>{pizza.price}</h2>
            <Image
               src={pizza.photo}
               alt={`Foto da pizza ${pizza.name}`}
               width={400}
               height={200}
            />
         </main>
      </div>
   );
}

export const getStaticProps: GetStaticProps = async (context) => {
   return { props: { ...context.params } };
};

export const getStaticPaths: GetStaticPaths = async () => {
   return {
      //paths: ["/pizzas/a", "/pizzas/b"],
      paths: pizzas.map(({ slug }) => `/pizzas/${slug}`),
      fallback: false,
   };
};
