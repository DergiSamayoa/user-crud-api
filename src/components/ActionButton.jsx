import { IconPlus } from "@tabler/icons-react"
import variants from "../utils/VariantsFM"
import { motion } from "framer-motion"

let variantButton = variants.button


const ActionButton = ({setShowModal}) => {
  const handleClick = () => {
    setShowModal(true)
  }


  return (
    <>
      <motion.button 
          variants={variantButton} initial="rest" whileHover="hover" whileTap="tap" 
          onClick={handleClick} 
          className="border-none flex items-center justify-center gap-2 h-[45px] w-[227px] text-white bg-[#555a88] hover:bg-[#3a3f5c]"><IconPlus />Crear nuevo usuario</motion.button>
    </>
  )
}
export default ActionButton