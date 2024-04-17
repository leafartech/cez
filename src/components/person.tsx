import Image from "next/image"

interface PersonProps {
    imagePath: string
    name: string
    bottom: string
}

export default function Person({ bottom, imagePath, name }: PersonProps) {
    return (
        <div className="flex gap-6 items-center xl:w-[498px]">
            <Image
                width={192}
                height={216}
                src={`/images/team/${imagePath}.png`}
                alt="Foto de professor renomado da pós graduação"
            />
            <div className="flex flex-col">
                <h4 className="text-zambo font-semibold sm:text-3xl xl:text-4xl text-xl">{name}</h4>
                <h4 className="text-zambo font-semibold sm:text-3xl xl:text-4xl text-xl">{bottom}</h4>
            </div>
        </div>
    )
}