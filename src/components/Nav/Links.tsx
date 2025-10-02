import Link from "next/link";
import { ReactNode } from "react";

interface LinkProps {
    href: string;
    children: ReactNode
}

export default function Links({ href, children }: LinkProps) {
    return (
        <Link href={href} className="border-b-2 border-transparent hover:border-white transition duration-1000">{children}</Link>
    );
}