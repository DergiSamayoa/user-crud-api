//tareas por terminar: validacion de campos y las animaciones


import { IconX } from "@tabler/icons-react";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { motion } from "framer-motion";
import variants   from "../utils/VariantsFM";

//los inputs imagenURL y cumpleaños no son obligatorios
//el datapicker se lo usa como un componente (funciona como un input) *ya esta todo configurado

let variantForm = variants.form
let variantModal = variants.modalForm
let variantButton = variants.button


const DisplayUser = ({setShowModal}) => {
  const [value, setValue] = useState({                        // declaro los valores del datepicker (el endDate no es necesario)
    startDate: null,
    endDate: null
  })

  console.log(value.startDate)                                // para ver el valor del datepicker (esta en un objeto y se usa el startDate para acceder al dato)

  const handleValueChange = (newValue) => {         
    setValue(newValue)                                           // setea el value con el valor del la fecha seleccionada
  }



  return (
    <motion.div variants={variantModal} initial="hidden" animate="visible" exit="exit"  transition="transition" className="z-20 fixed w-full h-screen inset-0 flex items-center justify-center bg-black/30">
      <motion.form variants={variantForm} initial="hidden" animate="visible" exit="exit" className=" flex flex-col w-[420px] h-[731px] absolute bg-white p-8 justify-between max-sm:w-[340px] max-sm:h-[600px] max-sm:py-3 max-sm:px-5">
        <IconX onClick={() => setShowModal(false)} className="absolute w-8 h-8 top-4 right-4 cursor-pointer hover:text-[#d85d5d] hover:scale-125 active:text-[#d85d5d] transition-all duration-150"/>
        <h3 className="text-[32px] font-semibold max-sm:text-[24px]">Nuevo Usuario</h3>
        <div className="flex flex-col">
          <label htmlFor="first_name">Nombre</label>
          <input className="w-full h-[48px] rounded-md outline-none bg-transparent border-2 px-4 text-[#0f0f2d] placeholder:text-[#bdbdbd]" placeholder="Nombre" name="first_name" type="text" autoComplete="off"/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="last_name">Apellidos</label>
          <input className="w-full h-[48px] rounded-md outline-none bg-transparent border-2 px-4 text-[#0f0f2d] placeholder:text-[#bdbdbd]" placeholder="Apellido" name="last_name" type="text" autoComplete="off"/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Correo</label>
          <input className="w-full h-[48px] rounded-md outline-none bg-transparent border-2 px-4 text-[#0f0f2d] placeholder:text-[#bdbdbd]" placeholder="Correo Electronico" name="email" type="text" autoComplete="off"/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Contraseña</label>
          <input className="w-full h-[48px] rounded-md outline-none bg-transparent border-2 px-4 text-[#0f0f2d] placeholder:text-[#bdbdbd]" placeholder="Contraseña" name="password" type="password"/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="birthday">Cumpleaños</label>
          <Datepicker onChange={handleValueChange} primaryColor="#fff" i18n="es" popoverDirection="up" displayFormat="DD/MM/YYYY"  placeholder="Fecha de Nacimiento" useRange={false} asSingle={true} inputClassName="w-full h-[48px] rounded-md outline-none bg-transparent border-2 px-4 text-[#0f0f2d] placeholder:text-[#bdbdbd] max-sm:popoverDirection-down" name="birthday" type="date" value={value} readOnly />
        </div>
        <div className="flex flex-col">
          <label htmlFor="image_url">Imagen(url)</label>
          <input className="w-full h-[48px] rounded-md outline-none bg-transparent border-2 px-4 text-[#0f0f2d] placeholder:text-[#bdbdbd]" placeholder="URL de la Imagen" name="image_url" type="text" autoComplete="off"/>
        </div>
        <motion.button variants={variantButton} initial="rest" whileTap="tap" className="border-none flex items-center justify-center gap-2 h-[45px] w-full text-white bg-[#555a88] hover:bg-[#3a3f5c]" type="submit">Agregar nuevo usuario</motion.button>
      </motion.form>
    </motion.div>
  );
};
export default DisplayUser;
