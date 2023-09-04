import { IconType } from "react-icons"

interface CardProps {
  icon?: IconType
  title: string
  description: string
  className?: string
}

export default function Card({
  icon,
  title,
  description,
  className,
}: CardProps) {
  return (
    <div
      className={
        "flex flex-col items-center justify-start gap-5 flex-1 basis-52 " +
        className
      }
    >
      <div className="flex items-center gap-3 text-primary-light dark:text-primary-dark">
        {icon && icon({ className: "w-8 md:w-10 h-auto" })}
        <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
      </div>
      <p className="text-center">{description}</p>
    </div>
  )
}
