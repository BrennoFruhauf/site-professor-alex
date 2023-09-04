import Redes from "./Redes"

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center pt-7 w-full px-9 backdrop-blur-md drop-shadow-md">
      <Redes />
      <p className=" text-sm py-7 text-center">
        © 2023 - Alex Tristão de Santana. Todos os direitos reservados.
      </p>
    </footer>
  )
}
