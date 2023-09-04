import RedeSocialIcon from "./RedeSocialIcon"
import { FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa6"

interface RedesProps {
  className?: string
}

export default function Redes({ className }: RedesProps) {
  return (
    <div className={"flex gap-5 " + className}>
      <RedeSocialIcon
        className="hover:text-redes-instagram"
        icon={FaInstagram}
        url="https://www.instagram.com/alexdiretor2023/"
      />
      <RedeSocialIcon
        className="hover:text-redes-whatsapp "
        icon={FaWhatsapp}
        url="https://wa.me/556481233059"
      />
      <RedeSocialIcon
        className="hover:text-redes-email"
        icon={FaEnvelope}
        url="mailto:alex.santana@ifgoiano.edu.br"
      />
    </div>
  )
}
