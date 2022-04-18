import Link from "next/link";

export default function Header() {
   return (
      <>
         <Link href="/">
            <a>
               <h2>Pizz🍕ton!</h2>
            </a>
         </Link>
         <nav>
            <Link href="/">
               <a>Home</a>
            </Link>
            <Link href="/sobre">
               <a>Sobre</a>
            </Link>
            <Link href="/menu">
               <a>Menu</a>
            </Link>
         </nav>
      </>
   );
}
