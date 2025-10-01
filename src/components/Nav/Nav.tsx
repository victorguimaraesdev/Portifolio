import Link from "next/link"

export default function Nav() {
    return (
        <nav className="flex h-16 gap-4 justify-around items-center font-bold">
            <h1 className="text-3xl">Victor<span className="text-indigo-800">Guimaraes</span></h1>
            <ul className="flex gap-10">
                <li>
                    <Link href={"/"}>Inicio</Link>
                </li>
                <li>
                    <Link href={"/sobre"}>Sobre</Link>
                </li>
                <li>
                    <Link href={"/projetos"}>Projetos</Link>
                </li>
                <li>
                    <Link href={"/contato"}>Contato</Link>
                </li>
            </ul>
        </nav>
    )
}