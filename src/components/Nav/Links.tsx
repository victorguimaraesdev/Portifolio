import Link from "next/link";
import { ReactNode } from "react";

interface LinkProps {
    href: string;
    children: ReactNode
}

export default function Links({ href, children }: LinkProps) {
    return (
        <Link href={href} className="relative group">
            {children}
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
        </Link>
    );
}