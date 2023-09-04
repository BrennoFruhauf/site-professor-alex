interface SecaoTextoProps {
  titulo?: string
  principal?: boolean
}

export default function SecaoTexto({
  titulo,
  principal,
  children,
}: React.PropsWithChildren<SecaoTextoProps>) {
  return (
    <div>
      {principal && titulo ? (
        <h2 className="text-primary-light dark:text-primary-dark text-xl md:text-2xl sticky top-[86px] text-center py-2 pb-4 pt-5 bg-neutral-light dark:bg-neutral-dark font-bold uppercase z-[4]">
          {titulo}
        </h2>
      ) : titulo ? (
        <h3 className="text-primary-light dark:text-primary-dark text-lg md:text-xl sticky top-[130px] text-center py-2 pb-4 pt-5 bg-neutral-light dark:bg-neutral-dark font-semibold uppercase z-[2]">
          {titulo}
        </h3>
      ) : (
        ""
      )}

      <div>{children}</div>
    </div>
  )
}
