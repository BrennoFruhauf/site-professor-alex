import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Alex | Quem Sou",
  description:
    "Saiba mais sobre Alex Tristão, candidato ao cargo de Diretor do IF Goiano Campus Catalão. Conheça a experiência, realizações e visão de Alex Tristão para liderar o campus em direção à inovação, inclusão e excelência acadêmica.",
}

export default function QuemSou() {
  return (
    <main className="flex flex-wrap items-start justify-center gap-8 mt-40 max-w-5xl px-5 mx-auto mb-14">
      <Image
        className="rounded-full select-none"
        src="/assets/images/alex-1.png"
        width="300"
        height="300"
        alt="Alex Tristão"
      />
      <div className="flex flex-col flex-1 basis-[400px] text-sm md:text-base">
        <h1 className="select-none text-primary-light dark:text-primary-dark text-2xl md:text-3xl text-center mb-5 font-bold uppercase">
          Quem sou
        </h1>
        <div className="flex flex-col gap-5 text-justify">
          <p>
            Car@s servidores, servidoras e estudantes, sou o professor Alex
            Tristão de Santana, nascido em 19/09/1984 (38 anos) na cidade de
            Catalão/Goiandira – Goiás. Sou casado há 11 anos com a professora
            Tatielle Esteves de Araújo Tristão, e temos dois filhos gêmeos
            “lindos”, Bernardo e Eduardo, de quatro (4) anos. Estudei durante
            boa parte da minha trajetória acadêmica em escolas e instituições
            públicas de ensino. Sou Licenciado (2006) e Bacharel (2008) em
            Geografia pela Universidade Federal de Goiás - Campus Avançado
            Catalão (atual UFCAT). Também fiz Mestrado em Geografia (2011) nesta
            instituição. Sou Doutor em Geografia (2017) pelo Instituto de
            Estudos Socioambientais, da Universidade Federal de Goiás, Campus
            Samambaia, (Goiânia - GO). Para complementar minha formação, também
            cursei a segunda Licenciatura em História (2021) pelo Centro
            Universitário Claretiano.
          </p>
          <p>
            Minha vida profissional no Instituto Federal Goiano – IF Goiano,
            teve início em 2013, com a atuação no Programa PRONATEC, na condição
            de Professor Bolsista. Naquele momento, compartilhava com outros(as)
            amigos(as), em particular com o Prof. Anicézio Guimarães, com o
            Prof. Eduardo Viana, com o Prof. Gabriel de Melo Neto, com a Profa.
            Aline Nascimento, com a Profa. Juliana Santos, entre outros e
            outras, o sonho de motivar a instalação de um Campus do IF Goiano em
            nossa cidade, Catalão.
          </p>
          <p>
            Por forças do destino, fui aprovado em concurso público e ingressei
            na instituição como servidor efetivo em 12/04/2016, no Campus
            Trindade, como professor de Geografia. Nesta unidade compartilhei
            experiências enriquecedoras, que contribuíram substancialmente para
            a formação da minha identidade pedagógica e institucional. No Campus
            Trindade minha primeira atuação, a nível de gestão educacional, foi
            no Núcleo de Atendimento as Pessoas com Necessidades Educacionais
            Específicas (NAPNE). Em seguida, fui convidado a liderar o início do
            curso de Pós-Graduação <i>Lato Sensu</i> em Educação e Trabalho
            Docente, momento em que tive uma rica oportunidade de fortalecer
            ações de ensino, pesquisa e produção científica no campo da formação
            de professores. A dedicação a este trabalho me rendeu o convite para
            ocupar, em 2018, o cargo de Chefe da Unidade de Pesquisa,
            Pós-Graduação e Inovação, compondo assim a equipe diretiva desta
            unidade de ensino.
          </p>
          <p>
            Em junho de 2019, por motivos familiares (falecimento do meu Pai,
            Artur Oscar de Santana Neto), pleiteei o retorno para a minha
            querida cidade de Catalão. A saída do Campus Trindade, em 2020, foi
            acompanhada de um profundo sentimento de saudade e gratidão, pois
            mantinha naquele lugar um forte sentimento de pertencimento.
            Seguíamos o lema do Diretor Júlio César Garcia, que sempre reforçava
            em seus discursos que “pode até ter um Campus igual, mas melhor,
            nunca”. Fazia referência ao envolvimento e comprometimento dos
            servidores da unidade, uma marca registrada.
          </p>
          <p>
            A minha chegada no IF Goiano Campus Catalão foi acompanhada do
            início da Pandemia de COVID-19. Momento de muitos traumas,
            incertezas e desafios, sobretudo para as instituições de ensino.
            Juntamente com @s servidores(as) Marccus Victor, Fabíola Gonçalves,
            Evelyn Cristine, Higor Heider, Nádia Gisele, Yuriel Batista, entre
            outros, integrei a Comissão de EAD do Campus Avançado Catalão, que
            teve a árdua tarefa de retomar as atividades de ensino em meio ao
            cenário de isolamento social. Era o início de um trabalho de resgate
            do contato com noss@s estudantes, por meio das plataformas digitais
            do IF Goiano. Enfrentamos as críticas e os desafios de iniciar uma
            experiência de ensino remoto e Educação a Distância no Campus, que
            permitiu minimizar os impactos e os prejuízos educacionais e
            pedagógicos em um momento marcado pela exclusão social e digital de
            parcela significativa da juventude brasileira.
          </p>
          <p>
            Ainda, em meio a Pandemia, tive a oportunidade de presidir o Núcleo
            de Atendimento as Pessoas com Necessidades Educacionais Específicas
            do Campus Catalão e contribuir com a proposta de inclusão de
            estudantes Público Alvo da Educação Especial (PAEE). As experiências
            acumuladas no Campus Trindade e as parcerias com outras
            instituições, como o Centro de Ensino e Pesquisa Aplicadas à
            Educação (CEPAE), da Universidade Federal de Goiás (o qual tive a
            oportunidade de atuar como professor substituto), me permitiu propor
            ações de inclusão escolar pautadas nos projetos de Mediação
            Pedagógica e Tutoria de Pares. Tais experiências foram promissoras
            no processo de inclusão de estudante com deficiência intelectual.
          </p>
          <p>
            A dedicação às tarefas do NAPNE e o comprometimento com o trabalho
            de gestão escolar me rendeu um novo convite, para assumir a Gerência
            de Ensino do Campus Catalão, em outubro de 2021. Tratava-se de um
            grande desafio, pois este cargo tinha, e tem, a tradição de ser um
            dos mais complexos das unidades de ensino (respeitadas as
            particularidades e as inúmeras demandas dos outros cargos e funções
            diretivas da instituição). Além disso, havia o contexto de liderar o
            retorno às atividades presenciais, em um momento de dúvidas quanto
            ao fim da Pandemia de Covid-19. Com responsabilidade, transparência,
            cuidado e muito diálogo, conseguimos iniciar o retorno gradual às
            atividades acadêmicas, oportunizando aos nossos estudantes e colegas
            de trabalho a retomada da convivência social e afetiva,
            impossibilitada por uma das mais severas crises de saúde pública dos
            últimos 100 anos.
          </p>
        </div>
      </div>
    </main>
  )
}
