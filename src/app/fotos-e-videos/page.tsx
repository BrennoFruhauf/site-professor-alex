import CardFoto from "@/components/basicos/CardFoto"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Alex Tristão | Fotos e Videos",
  description:
    "Fotos e Videos de Alex Tristão, candidato ao cargo de Diretor do IF Goiano Campus Catalão. Saiba mais sobre a experiência, realizações e visão de Alex Tristão para liderar o campus em direção à inovação, inclusão e excelência acadêmica.",
}

export default function FotosEVideos() {
  return (
    <div className="mt-40 max-w-5xl px-5 mx-auto mb-14 flex justify-center items-center flex-wrap gap-5 ">
      <CardFoto
        url="/assets/images/fotos/DSC01276.jpg"
        alt="Professor Alex de terno sorrindo"
      />
      <CardFoto
        url="/assets/images/fotos/DSC01279.jpg"
        alt="Professor Alex de terno sério"
      />
      <CardFoto
        url="/assets/images/fotos/DSC01283.jpg"
        alt="Professor Alex de terno feliz"
      />
      <CardFoto
        url="/assets/images/fotos/DSC01291.jpg"
        alt="Professor Alex de terno em pose séria"
      />
      <CardFoto
        url="/assets/images/fotos/DSC01293.jpg"
        alt="Professor Alex de terno em pose séria sorrindo"
      />
      <CardFoto
        url="/assets/images/fotos/DSC01301.jpg"
        alt="Professor Alex de blusa azul sorrindo cruzando os braços"
      />
      <CardFoto
        url="/assets/images/fotos/DSC01309.jpg"
        alt="Professor Alex de blusa azul sentado e sorrindo"
      />
      <CardFoto
        url="/assets/images/fotos/DSC01312.jpg"
        alt="Professor Alex de blusa azul sentado mostrando os polegares"
      />
      <CardFoto
        url="/assets/images/fotos/DSC01313.jpg"
        alt="Professor Alex de blusa verde com a mão no peito"
      />
      <CardFoto
        url="/assets/images/fotos/DSC01321.jpg"
        alt="Professor Alex de blusa verde fazendo um 'V' com a mão"
      />
      <CardFoto
        url="/assets/images/fotos/DSC01325.jpg"
        alt="Professor Alex de blusa verde sentado em um banco"
      />
    </div>
  )
}
