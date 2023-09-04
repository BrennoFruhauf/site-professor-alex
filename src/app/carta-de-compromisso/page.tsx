import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Alex | Carta de Compromisso",
  description:
    "Carta de Compromisso de Alex Tristão para o Cargo de Diretor do IF Goiano Campus Catalão. Saiba mais sobre a visão de Alex Tristão para o campus e seu compromisso com a inovação, inclusão e parceria para o crescimento e expansão do IF Goiano Campus Catalão.",
}

export default function CartaDeCompromisso() {
  return (
    <div className="mt-40 max-w-5xl px-5 mx-auto mb-14 flex gap-5 ">
      <div>
        <h1 className="text-primary-light dark:text-primary-dark text-2xl md:text-3xl text-center mb-5 font-bold uppercase select-none">
          Carta de Compromisso
        </h1>

        <div className="flex flex-col gap-3 text-justify text-sm md:text-base">
          <p>
            Desde o início do meu curso de Licenciatura (2003) já se passaram,
            praticamente, 20 anos de envolvimento e dedicação à educação. Minha
            formação, com relevante influência e aprendizados do movimento
            estudantil, sindical, movimentos sociais e ativismo político, me faz
            compreender a educação em sua potencialidade de transformação
            social. Ao mesmo tempo, pelo entendimento de que é preciso
            oportunizar à juventude e aos trabalhadores(as) a atualização quanto
            às mudanças técnicas e produtivas do mundo do trabalho, tenho plena
            convicção na necessidade de fortalecimento e expansão da educação
            profissional, científica e tecnológica.
          </p>
          <p>
            Neste aspecto, compactuamos que, em especial,{" "}
            <strong>
              o IF Goiano Campus Catalão precisa, com urgência, superar as
              barreiras que impedem seu pleno processo de expansão e crescimento
            </strong>
            . Sendo que, o principal obstáculo é a tão sonhada mudança de
            tipologia para o modelo 40/26, que possibilitará ao campus ampliar
            suas matrículas de 400 para 800 estudantes, beneficiando diretamente
            a juventude, @s trabalhadores(as) e as famílias de Catalão e região.
            Esta mudança é uma condição para que nossa instituição acompanhe a
            pujança e o dinamismo econômico, demográfico e cultural de nossa
            cidade, que ocupa a posição de 5ª economia do estado de Goiás, com
            destaque para a o peso da indústria de transformação mineral,
            indústria metal mecânica, construção civil, e setores da
            agropecuária, comércio e serviços.
          </p>
          <p>
            <strong>
              Lutar pelo crescimento e expansão do IF Goiano Campus Catalão
              significa se somar aos esforços de diferentes agentes públicos e
              privados que trabalham para a consolidação e fortalecimento de um
              dos mais importantes polos educacionais de Goiás e do interior
              brasileiro
            </strong>
            . Também significa somar esforços para a edificação de um Polo de
            Inovação Científica e Tecnológica no Sudeste Goiano, com
            potencialidade de produzir soluções tecnológicas nas áreas de
            mineração, química, nanociência, inteligência artificial, automação,
            produção de alimentos, sustentabilidade socioambiental, entre
            outras.{" "}
            <strong>
              Tratam-se de vantagens comparativas que impactam diretamente na
              atração de investimentos, de empresas e empregos de qualidade
            </strong>
            . É preciso que nossa comunidade, a classe política e a sociedade
            civil organizada se conscientizem das oportunidade que o IF Goiano
            Campus Catalão, em parceria com outras instituições de ensino, pode
            oferecer para o desenvolvimento local e regional.{" "}
            <strong>
              É função do cargo de Direção trabalhar, com determinação, para que
              tais potencialidades transitem do plano das ideias para se
              tornarem realidade
            </strong>
            . Não há dúvidas dos benefícios que tais ações podem trazer para
            nossa população, em especial para os jovens, população migrante que
            chega em nossa cidade, grupos sociais vulneráveis alvo das políticas
            de ações afirmativas e, sobretudo, aqueles que precisam e dependem
            de uma educação pública, gratuita e de qualidade, socialmente
            referenciada.
          </p>
          <p>
            Compartilho da ideia de que a educação é um meio de diminuir as
            desigualdades sociais, de transformar vidas, não apenas daqueles que
            aqui estudam, mas como também de todos os familiares. Defendo uma
            educação democrática, pública, gratuita, inclusiva e de qualidade,
            sem discriminação de raça, credo, gênero, cor, opções políticas ou
            partidárias e principalmente de condição financeira. Entendo a
            escola como espaço da pluralidade, de crescimento e aprendizagem de
            todos os atores envolvidos, servidores, estudantes, familiares e
            comunidade em geral.
          </p>
          <p>
            Estou ciente dos desafios a serem enfrentados, conheço as
            particularidades de nossa instituição, que convivem com limitações
            de orçamento e de força de trabalho. Por outro lado, também
            compartilho o otimismo e a esperança de um momento promissor para as
            instituições federais de ensino, que sinaliza para a possibilidade
            real de recomposição de recursos, financeiros e humanos.{" "}
            <strong>
              Nossa consciência, sabedoria e unidade podem forjar a energia
              necessária para a construção de objetivos em comum, contribuindo
              assim para o tão almejado salto de qualidade que nosso querido
              Campus Catalão necessita
            </strong>
            . Não tenho dúvidas de que a ampliação do quadro de servidores, a
            conclusão da sede própria do Campus Catalão e a expansão da oferta
            dos nossos cursos técnicos integrados ao ensino médio, com as novas
            possibilidades de verticalização, poderão transformar nossa
            instituição, potencializar seu impacto sociocultural e{" "}
            <strong>
              nos colocar no patamar de uma das unidade de ensino mais
              promissoras do IF Goiano e do estado de Goiás
            </strong>
            . Capaz de contribuir com a formação de quadros técnicos altamente
            capacitados, com notória potencialidade de produção científica e
            cultural.
          </p>
        </div>
      </div>

      <Image
        src="/assets/images/alex-2.png"
        width={300}
        height={300}
        alt="Alex"
        className="hidden md:flex -scale-x-100 self-start mascarado"
      />
    </div>
  )
}
