import Links from "./Links"

export default function Nav() {
    return (
        <nav className="flex h-16 gap-4 justify-around items-center font-bold">
            <h1 className="text-3xl">Victor<span className="text-indigo-800">Guimaraes</span></h1>
            <ul className="flex gap-10">
                <li>
                    <Links href="/">Início</Links>
                </li>
                <li>
                    <Links href={"/sobre"}>Sobre</Links>
                </li>
                <li>
                    <Links href={"/projetos"}>Projetos</Links>
                </li>
                <li>
                    <Links href={"/contato"}>Contato</Links>
                </li>
            </ul>
        </nav>
    )
}