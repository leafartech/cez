import Button from "@/components/button";
import Header from "@/components/header";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Header
        paragraph="Você vai descobrir tudo que precisa ter acesso para se destacar em um ambiente jurídico de constante evolução."
      >
        <h1 className="text-zambo sm:text-4xl text-2xl font-thin">Conheça a primeira <strong className="font-semibold">pós-graduação no Brasil</strong> que forma <strong className="font-semibold">advogados criminalistas</strong> para a advocacia moderna.</h1>
      </Header>
      <main className="">
        <section className="sm:p-12 sm:pb-32 bot pb-0 bg-bg flex justify-center">
          <div className="w-full sm:max-w-6xl">
            <div className="relative flex sm:flex-row flex-col justify-end">
              <div className="sm:absolute sm:left-0 sm:translate-y-12 sm:max-h-96 p-4 break">
                <Image
                  width={455}
                  height={631}
                  layout="responsive"
                  src="/images/bg1.png"
                  alt="Mockup Alexandre Zamboni Pós Graduação"
                  className="max-w-full"
                />
              </div>
              <div className="w-full max-w-[840px] bg-zambo sm:py-12 sm:px-24 p-4 pb-6 sm:rounded items-start flex flex-col sm:gap-12 gap-6">
                <h2 className="sm:text-3xl text-2xl font-bold">Para quem é o evento?</h2>
                <ul className="flex flex-col gap-6 sm:text-lg">
                  <li className="flex sm:items-center items-start sm:gap-6 gap-3">
                    <Image
                      src="/images/right-arrow.png"
                      alt="Ícone de seta"
                      width={17}
                      height={20}
                      className="sm:translate-y-0 translate-y-1"
                    />
                    <span>Para advogados criminalistas que desejam se especializar em sua carreira, e construir uma prática jurídica reconhecida e respeitada;</span>
                  </li>
                  <li className="flex sm:items-center items-start sm:gap-6 gap-3">
                    <Image
                      src="/images/right-arrow.png"
                      alt="Ícone de seta"
                      width={17}
                      height={20}
                      className="sm:translate-y-0 translate-y-1"
                    />
                    <span>Para advogados criminalistas que querem usar as inteligências artificiais com o objetivo de produzir mais e melhor dentro da sua carreira;</span>
                  </li>
                  <li className="flex sm:items-center items-start sm:gap-6 gap-3">
                    <Image
                      src="/images/right-arrow.png"
                      alt="Ícone de seta"
                      width={17}
                      height={20}
                      className="sm:translate-y-0 translate-y-1"
                    />
                    <span>Para advogados criminalistas que desejam se posicionar e faturar alto através da atividade empreendedora da advocacia moderna.</span>
                  </li>
                </ul>
                <Button />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}