import { IconX } from "@tabler/icons-react";
import SaveUser from "./SaveUser";
import { motion } from "framer-motion";
import variants from "../utils/VariantsFM";

const variantBg = variants.modal
const variantCard = variants.cardModal



const DeleteConfirmation = ({user, setDeleteModal, setUpdateUsers}) => {

  const handleCloseModalDelete = () => {
    setDeleteModal(false)
  }

  const handleConfirmDelete = () => {
    setDeleteModal(false)
    setUpdateUsers(true)
    SaveUser("delete", user)
  }


  return (
    <>
      <motion.div variants={variantBg} initial="hidden" animate="visible" exit="exit" className="fixed inset-0 z-10 flex justify-center items-center backdrop-blur-sm bg-black/30 p-8" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <motion.div variants={variantCard} initial="hidden" animate="visible" exit="exit" transition="transition" className="relative py-10 px-16 inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 max-sm:py-4">
          <IconX onClick={handleCloseModalDelete} className="absolute w-8 h-8 top-4 right-4 cursor-pointer hover:text-[#d85d5d] hover:scale-125 active:text-[#d85d5d] transition-all duration-150"/>
            <div>
              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-gray-700 dark:text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
              </div>

              <div className="mt-2 text-center">
                <h3
                  className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white"
                  id="modal-title"
                >
                  Eliminar usuario
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Seguro que quieres eliminar este usuario?
                </p>
              </div>
            </div>
              <div className="flex w-full justify-center ">
                <button onClick={handleConfirmDelete} className="w-[90%] bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 mt-4 rounded-sm transition-all duration-150 active:scale-75">
                  Eliminar
                </button>
              </div>
          </motion.div>
      </motion.div>
      ;
    </>
  );
};
export default DeleteConfirmation;
