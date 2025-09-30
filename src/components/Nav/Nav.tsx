import Link from "next/link"

export default function Nav() {
    return(
        <main>
            <nav className="flex">
                <ul>
                    <li>
                       <Link href={"/"}>Inicio</Link> 
                    </li>
                    <li>
                        <Link href={"/sobre"}>Sobre</Link>
                    </li>
                    <li>
                        <Link href={"/contato"}>Contato</Link>
                    </li>
                </ul>
            </nav>
        </main>
    )
}