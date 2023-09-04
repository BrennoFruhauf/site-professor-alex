interface BlockSectionProps {
  children: React.ReactNode
  className?: string
  classBackground?: string
}

export default function BlockSection({
  className,
  classBackground,
  children,
}: BlockSectionProps) {
  return (
    <section className={"py-24 " + classBackground}>
      <div className={"max-w-7xl mx-auto px-8 " + className}>{children}</div>
    </section>
  )
}
