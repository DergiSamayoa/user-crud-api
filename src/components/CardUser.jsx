import { IconTrash } from "@tabler/icons-react";
import { IconPencil } from "@tabler/icons-react";
import { IconGift } from "@tabler/icons-react";
import SaveUser from "./SaveUser";
import { motion } from "framer-motion";
import variants from "../utils/VariantsFM";

let variantCard = variants.card
let variantButton = variants.button

const CardUSer = ({ currentUser: user, setUpdateUsers, editMode }) => {
  //const { currentUser: user } = currentUser


  const handleDelete = (user) => {
    SaveUser("delete", user)
    setUpdateUsers(true)
  }

  const handleEdit = (user) => {
    SaveUser("edit", user)
    editMode(user)

  }

  return (
    <motion.article layoutId={user.id} variants={variantCard} initial="hidden" animate="visible" exit="exit" className="relative w-[380px] h-[275px] bg-white text-[#0f0f2d] flex flex-col p-5 gap-3 border-[1px] rounded-md border-[#e1e1e1] max-sm:w-[350px] max-sm:h-[245px] max-sm:p-3 shadow-[2px_2px_2px_0_rgba(0,0,0,0.1)] overflow-hidden">
      <h3 className="text-[25px] font-medium">{user.first_name} {user.last_name}</h3>
      <div className="w-full flex flex-col items-start">
        <h4 className="font-[#d3d3d3] opacity-50">CORREO</h4>
        <p className="font-medium">{user.email}</p>
      </div>
      <div className="w-full flex flex-col items-start">
        <h4 className="font-[#d3d3d3] opacity-50">CUMPLEAÑOS</h4>
        <p className="font-medium flex gap-2"><IconGift />{user?.birthday}</p>
      </div>
      <div className="absolute bottom-4 right-4 flex gap-4">
        <motion.button 
            variants={variantButton}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            onClick={() => handleDelete(user)}
            className="w-[43px] h-[43px] bg-[#d85d5d] text-white rounded-md flex items-center justify-center">
          <IconTrash />
        </motion.button>
        <motion.button
            variants={variantButton}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            onClick={() => handleEdit(user)}
            className="w-[43px] h-[43px] border-[1px] border-[#b7b7b7] rounded-md text-[#b7b7b7] flex items-center justify-center">
          <IconPencil />
        </motion.button>
      </div>
    </motion.article>
  )
}
export default CardUSer