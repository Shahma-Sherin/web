import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";

interface ImageModalProps {
  src: string;
  alt?: string;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  src,
  alt,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-[#B2A4D4] bg-opacity-70 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="relative p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 bg-white hover:bg-[#ffffff] rounded-full p-3 text-[#B2A4D4]"
          onClick={onClose}
        >
          <CloseIcon />
        </button>
        <Image
          src={src}
          alt={alt || "Image"}
          width={800}
          height={600}
          className="rounded-lg w-[80vw] sm:w-[30vw] h-auto border-8 border-[#d3cce6]"
          priority
        />
      </motion.div>
    </div>
  );
};

export default ImageModal;
