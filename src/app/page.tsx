import BlockSection from "@/components/basicos/BlockSection"
import Card from "@/components/basicos/Card"
import { Metadata } from "next"
import { FaHandshakeAngle, FaLightbulb, FaPuzzlePiece } from "react-icons/fa6"

export const metadata: Metadata = {
  title: "Alex | Início",
  description:
    "Inovação, inclusão e parceria para o crescimento e expansão do IF Goiano Campus Catalão",
}

export default function Home() {
  return (
    <>
      <div
        className={`
          relative bg-bg-home bg-cover h-[1100px] md:h-[700px] pt-4 
          overflow-hidden
        `}
      >
        <div className="relative max-w-7xl px-5 mx-auto h-full">
          <div className="absolute top-32 left-5 right-5 flex gap-4 justify-between flex-col md:flex-row items-center md:items-start">
            <div className="text-neutral-light flex flex-col gap-4 pt-6">
              <h1 className="text-3xl md:text-4xl uppercase font-bold">
                Bem-vindo(a)
              </h1>
              <p className="text-xl md:text-2xl font-semibold">
                Vamos juntos construir um futuro promissor para o
                <br />
                <span className="text-primary-campus">
                  IF Goiano Campus Catalão
                </span>
                !
              </p>
              <p className="text-lg md:text-xl font-normal text-justify">
                Site oficial da candidatura de Prof. Alex ao cargo de Diretor do
                IF Goiano Campus Avançado Catalão. Estamos entusiasmados em
                compartilhar nossa visão de inovação, inclusão e parceria para o{" "}
                <span className="text-primary-light dark:text-primary-dark font-semibold">
                  crescimento
                </span>{" "}
                e{" "}
                <span className="text-primary-light dark:text-primary-dark font-semibold">
                  expansão
                </span>{" "}
                do IF Goiano Campus Catalão.
              </p>
            </div>
            <img
              className="drop-shadow-[10px_3px_8px_#00000069]"
              width={360}
              height={600}
              src="/assets/images/alex.png"
              alt="Alex Tristão - Candidato a Diretor do IF Goiano Campus Avançado Catalão"
            />
          </div>
        </div>
        <svg
          className="absolute bottom-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 95"
        >
          <path
            className="fill-neutral-light dark:fill-neutral-dark"
            fillOpacity="1"
            d="M0,0L60,6.7C120,13,240,27,360,38.3C480,50,600,60,720,65C840,70,960,70,1080,63.3C1200,57,1320,43,1440,43.3C1560,43,1680,57,1800,53.3C1920,50,2040,30,2160,30C2280,30,2400,50,2520,50C2640,50,2760,30,2880,23.3C3000,17,3120,23,3240,23.3C3360,23,3480,17,3600,16.7C3720,17,3840,23,3960,31.7C4080,40,4200,50,4320,60C4440,70,4560,80,4680,85C4800,90,4920,90,5040,90C5160,90,5280,90,5400,90C5520,90,5640,90,5760,81.7C5880,73,6000,57,6120,45C6240,33,6360,27,6480,25C6600,23,6720,27,6840,36.7C6960,47,7080,63,7200,61.7C7320,60,7440,40,7560,31.7C7680,23,7800,27,7920,33.3C8040,40,8160,50,8280,56.7C8400,63,8520,67,8580,68.3L8640,70L8640,100L8580,100C8520,100,8400,100,8280,100C8160,100,8040,100,7920,100C7800,100,7680,100,7560,100C7440,100,7320,100,7200,100C7080,100,6960,100,6840,100C6720,100,6600,100,6480,100C6360,100,6240,100,6120,100C6000,100,5880,100,5760,100C5640,100,5520,100,5400,100C5280,100,5160,100,5040,100C4920,100,4800,100,4680,100C4560,100,4440,100,4320,100C4200,100,4080,100,3960,100C3840,100,3720,100,3600,100C3480,100,3360,100,3240,100C3120,100,3000,100,2880,100C2760,100,2640,100,2520,100C2400,100,2280,100,2160,100C2040,100,1920,100,1800,100C1680,100,1560,100,1440,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
          ></path>
        </svg>
      </div>
      <BlockSection className="flex flex-wrap justify-around gap-10">
        <Card
          icon={FaLightbulb}
          title="Inovação"
          description="Consideramos que a inovação é a chave para impulsionar o progresso educacional e institucional. Buscamos implementar soluções criativas e tecnológicas que aprimorem a qualidade dos serviços prestados e do ensino e aprendizagem no campus."
        />
        <Card
          icon={FaPuzzlePiece}
          title="Inclusão"
          description="Valorizamos a diversidade e a inclusão como princípios fundamentais. Pretendemos criar um ambiente acolhedor e inclusivo para todos os membros da nossa comunidade acadêmica, promovendo oportunidades iguais para o sucesso."
        />
        <Card
          icon={FaHandshakeAngle}
          title="Parceria"
          description="Reconhecemos a importância de parcerias sólidas entre a instituição, a comunidade local e outras entidades educacionais. Nosso compromisso com a parceria visa fortalecer nossa influência positiva na região e ampliar nossos horizontes."
        />
      </BlockSection>
      <BlockSection classBackground="bg-primary-light/10 dark:bg-neutral-light/5">
        <div className="flex flex-col items-center justify-center gap-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-primary-light dark:text-primary-dark">
            Construção Coletiva do Plano de Trabalho
          </h2>
          <p className="text-justify">
            A sua opinião é fundamental! Estamos comprometidos em construir um
            Plano de Trabalho que atenda às expectativas e necessidades de nossa
            comunidade acadêmica. Queremos ouvir suas sugestões e críticas para
            que juntos possamos moldar o futuro do IF Goiano Campus Catalão.
          </p>
          <a
            className="text-lg md:text-xl text-white bg-primary-light dark:bg-primary-dark py-3 px-5 hover:bg-secondary-light dark:hover:bg-secondary-light rounded-lg"
            href="https://forms.gle/kJGy6r5q6i1caphu6"
            target="_blank"
          >
            Envie suas Sugestões
          </a>
        </div>
      </BlockSection>
    </>
  )
}
