"use client"
import Image from "next/image"
import { useState } from "react"
import ImageModal from "./ImageModal"

interface CardFotoProps {
  url: string
  alt: string
  urlFull: string
}

export default function CardFoto({ url, alt, urlFull }: CardFotoProps) {
  const [showModal, setShowModal] = useState(false)
  const [selectedImage, setSelectedImage] = useState("")

  const openModal = (imageUrl: string) => {
    document.body.style.overflow = "hidden"
    setSelectedImage(imageUrl)
    setShowModal(true)
  }

  const closeModal = () => {
    document.body.style.overflow = "scroll"
    setSelectedImage("")
    setShowModal(false)
  }

  return (
    <>
      <Image
        className="rounded-xl drop-shadow-lg"
        src={url}
        alt={alt}
        height={250}
        width={250}
        onClick={() => openModal(urlFull)}
      />
      {showModal && (
        <ImageModal imageUrl={selectedImage} onClose={closeModal} />
      )}
    </>
  )
}
