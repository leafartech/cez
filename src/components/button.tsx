interface ButtonProps {
    color?: boolean
}

export default function Button({ color }: ButtonProps) {
    return (
        <a href="#forms" className={`${color ? 'bg-zambo text-bg font-semibold' : 'bg-bg text-zambo font-thin'} py-2 sm:px-20 sm:w-[490px] w-full text-center rounded uppercase sm:text-lg text-sm `}>
            <span className="opacity-[.84]">Eu quero participar do evento</span>
        </a>
    )
}