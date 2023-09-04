import { IconType } from "react-icons"

interface RedeSocialIconProps {
  icon: IconType
  url: string
  className?: string
}

export default function RedeSocialIcon({
  icon,
  url,
  className,
}: RedeSocialIconProps) {
  return (
    <a href={url} target="_blank">
      {icon({
        className:
          "h-6 w-6 drop-shadow-md transition duration-300 " + className,
      })}
    </a>
  )
}
