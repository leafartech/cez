'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
    const [steps, setSteps] = useState(0)
    let time = 0
    const router = useRouter()

    useEffect(() => {
        const interval = setInterval(() => {
            time++;
            if (time >= 10) {
                clearInterval(interval);
            }
        }, 500);

        const animationInterval = setInterval(() => {
            setSteps((prevState) => {
                if (prevState < 100) {
                    return prevState + 1;
                }
                clearInterval(animationInterval);
                return prevState;
            });
        }, 50);

        return () => {
            clearInterval(interval);
            clearInterval(animationInterval);
        };
    }, []);

    const barStyle = {
        width: `${steps}%`,
        transition: "width 0.5s ease-in-out" // Adicionando a animação ease-in-out
    };

    if (barStyle.width === '100%') {
        setTimeout(() => {
            router.push('https://chat.whatsapp.com/LZ8M5BlIYEg88keiROnf93')
        }, 500)
    }

    return (
        <div className="radial w-full min-h-screen flex items-center justify-center">
            <div className="w-full max-w-6xl flex flex-col items-center justify-center sm:gap-12 sm:py-12">
                <div className="sm:h-20 h-16 sm:w-20 w-16">
                    <Image
                        src="/images/logo.png"
                        alt="Logo Zamboni"
                        height={228}
                        width={228}
                        layout="responsive"
                    />
                </div>
                <div className="flex flex-col items-center sm:gap-12 gap-6 p-4">
                    <h1 className="grad uppercase text-zambo sm:text-3xl text-xl text-center font-semibold sm:py-3 py-2 sm:px-12 px-4">Não saia dessa página até concluir sua inscrição</h1>
                    <div className="sm:w-[624px] w-full">
                        <div className="relative flex justify-center items-center rounded w-full h-6 mt-4 bg-[#2c393c] overflow-hidden">
                            <div className={`absolute left-0 h-full bg-zambo`} style={barStyle}></div>
                            {barStyle.width === '100%' && (
                                <svg className="spin-svg animate-spin -ml-1 mr-3 h-5 w-5 text-[#2c393c]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            )}
                        </div>
                    </div>
                    <div className="text-zambo flex flex-col items-center gap-4 w-full text-center">
                        <h4 className="sm:text-4xl text-3xl font-semibold">Só falta um passo:</h4>
                        <p className="opacity-[.84] text-lg">Estou te redirecionando para um canal rápido de comunicação. </p>
                        {/* <a href="" className="block uppercase bg-[#0daa4f] sm:w-[542px] text-center sm:text-base text-sm w-full py-3 rounded">Toque aqui para entrar no grupo</a> */}
                    </div>
                    <p className="text-zambo sm:text-lg text-base text-center max-w-2xl opacity-[.84]">Por isso, criei um grupo oficial no WhatsApp para você não perder nada importante. <strong>Não se preocupe, não é um grupo de conversas.</strong></p>
                </div>
            </div>
        </div>
    )
}