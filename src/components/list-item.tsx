import { CheckIcon } from "@heroicons/react/16/solid";
import { ReactNode } from "react";

interface ListItemProps {
    children: ReactNode
}

export default function ListItem({children}: ListItemProps) {
    return (
        <li className="flex items-center gap-2 ">
            <span className="bg-zambo p-1 rounded"><CheckIcon className="h-5 w-5 fill-black" /></span>
            <span className="text-zambo opacity-[.84] text-lg sm:text-xl">{children}</span>
        </li>
    )
}