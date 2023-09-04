import MenuButton from "./MenuButton"

interface MenuProps {
  className?: string
  id?: string
  onItemClicked: () => void
}

export default function Menu({ className, id, onItemClicked }: MenuProps) {
  return (
    <nav id={id} className={"flex gap-3 font-semibold " + className}>
      <MenuButton onClick={onItemClicked} href="/">
        Início
      </MenuButton>
      <MenuButton onClick={onItemClicked} href="/carta-de-compromisso">
        Carta de Compromisso
      </MenuButton>
      <MenuButton onClick={onItemClicked} href="/proposta">
        Proposta
      </MenuButton>
      <MenuButton onClick={onItemClicked} href="/fotos-e-videos">
        Fotos e Videos
      </MenuButton>
      <MenuButton onClick={onItemClicked} href="/quem-sou">
        Quem sou
      </MenuButton>
    </nav>
  )
}
