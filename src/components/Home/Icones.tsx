
interface Props {
    children: React.ReactNode
}

export function Icones({children}: Props) {
    return (
        <div className="w-24 h-24 flex items-center justify-center rounded-full bg-indigo-700 opacity-20">
            {children}
        </div>
    )
}