'use client'
import Image from "next/image";
import { ReactNode, useEffect } from "react";

interface HeaderProps {
    children: ReactNode
    paragraph: string
}

export default function Header({ paragraph, children }: HeaderProps) {
    let cont = 0
    useEffect(() => {
        if (cont === 0) {
            const script = document.createElement('script');
            script.src = 'https://alexandrezamboni.activehosted.com/f/embed.php?id=19';
            script.type = 'text/javascript';
            script.charset = 'utf-8';
            script.async = true;
            document.body.appendChild(script);
            cont++;
        }
    }, []);

    return (
        <header className="relative px-4 radial sm:h-screen w-full flex flex-col-reverse justify-center items-center sm:pt-20">
            <div className="max-w-6xl w-full z-10">
                <div className="flex flex-col sm:text-left text-center sm:gap-10 gap-4 w-full max-w-[800px] sm:p-0 p-4" id="forms">
                    {children}
                    <p className="text-zambo opacity-[.84] sm:text-xl text-base font-thin">{paragraph}</p>
                    <div className="_form_19" id="_form_19"></div>
                </div>
            </div>
            <div className="sm:absolute right-12 bottom-0 sm:block">
                <Image
                    src="/images/bg.png"
                    alt="Professor Alexandre Zamboni"
                    width={806}
                    height={725}
                    layout="responsive"
                />
            </div>
        </header>
    )
}