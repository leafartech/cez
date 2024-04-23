import Button from "@/components/button";
import Header from "@/components/header";
import ListItem from "@/components/list-item";
import Person from "@/components/person";
import Image from "next/image";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div>
      <div className="z-50 fixed top-0 left-0 w-full h-16 flex gap-2 justify-center items-center bg-gradient-to-tr from-[#1d2727] to-bg text-white border-b border-white">
        <CalendarDaysIcon className="h-5 w-5 -translate-y-[2px]" />
        <span>29 de Abril às 20h</span>
      </div>
      <Header
        top={true}
        paragraph=" Você vai descobrir tudo que precisa ter acesso para se destacar em um ambiente jurídico de constante evolução."
      >
        <h1 className="text-zambo sm:text-4xl text-2xl font-thin">Participe do lançamento da primeira pós-graduação no Brasil que prepara <strong className="font-semibold">advogados criminalistas</strong> para as <strong className="font-semibold">tendências do futuro</strong>.</h1>
      </Header>
      <main className="">
        <section className="pb-12 sm:pb-24 pt-12 sm:pt-24 bg-bg flex justify-center px-4">
          <div className="w-full sm:max-w-6xl flex flex-col items-center gap-12 sm:gap-16">
            <h2 className="text-zambo sm:text-4xl text-2xl font-semibold text-center">Veja alguns dos conteúdos que você terá acesso dentro da pós-graduação além da atuação prática na advocacia criminal:</h2>
            <ul className="flex flex-wrap gap-6 sm:gap-12 justify-start sm:justify-center">
              <ListItem>Gestão de escritório</ListItem>
              <ListItem>Marketing Jurídico</ListItem>
              <ListItem>Legal design</ListItem>
              <ListItem>Inteligências artificiais para aumentar sua produtividade</ListItem>
              <ListItem>Posicionamento estratégico para ser visto como autoridade</ListItem>
              <ListItem>Como prospectar excelentes clientes</ListItem>
            </ul>

            <h2 className="text-zambo sm:text-2xl text-xl font-semibold text-center">Você terá em mãos as maiores estratégias para elevar o nível da sua carreira.</h2>
            <Button color={true} />

          </div>
        </section>
        <section className="pb-12 sm:pb-24 px-4 bg-bg flex justify-center">
          <div className="w-full sm:max-w-6xl flex flex-col items-center gap-4 sm:gap-16">
            <h2 className="text-zambo sm:text-4xl text-2xl font-semibold text-center">Conheça alguns dos professores renomados da pós-graduação:</h2>
            <div className="sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:gap-12 flex flex-col">
              <Person
                imagePath="emerson"
                name="Emerson"
                bottom="Castelo Branco"
              />
              <Person
                imagePath="amanda"
                name="Amanda"
                bottom="Csi"
              />
              <Person
                imagePath="ariane"
                name="Ariane"
                bottom="Deves"
              />
              <Person
                imagePath="andre"
                name="André"
                bottom="Vartuli"
              />
              <Person
                imagePath="caio"
                name="Caio"
                bottom="Rangel"
              />
              <Person
                imagePath="florence"
                name="Florence"
                bottom="Rosa"
              />
            </div>
          </div>
        </section>
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