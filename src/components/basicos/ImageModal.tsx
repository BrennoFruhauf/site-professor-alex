import { FaXmark } from "react-icons/fa6"

interface ImageModalProps {
  imageUrl: string
  onClose: () => void
}

const ImageModal = ({ imageUrl, onClose }: ImageModalProps) => {
  return (
    <div className="z-30 fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex justify-center items-center p-5">
      <div className="flex relative items-start gap-5">
        <img
          className="max-w-full max-h-[80vh] rounded-2xl"
          src={imageUrl}
          alt="Imagem em tela grande"
        />
        <button
          className="absolute right-5 top-5 text-neutral-light bg-secondary-dark/70 text-3xl p-1 rounded-full"
          onClick={onClose}
        >
          <FaXmark />
        </button>
      </div>
    </div>
  )
}

export default ImageModal
