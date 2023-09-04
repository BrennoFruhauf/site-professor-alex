"use client"
import Image from "next/image"

interface CardFotoProps {
  url: string
  alt: string
}

export default function CardFoto({ url, alt }: CardFotoProps) {
  return (
    <>
      <Image
        className="rounded-xl drop-shadow-lg"
        src={url}
        alt={alt}
        height={250}
        width={250}
      />
    </>
  )
}
