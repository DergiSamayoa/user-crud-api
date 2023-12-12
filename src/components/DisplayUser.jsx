//tareas por terminar: validacion de campos y las animaciones
//datepicker desactivado por problemas al editar (no se puede editar el valor del datepicker)

import { IconX } from "@tabler/icons-react";
import { motion } from "framer-motion";
import variants   from "../utils/VariantsFM";
import SaveUser from "./SaveUser";
import Datepicker from "react-tailwindcss-datepicker";
import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";

let variantForm = variants.form
let variantModal = variants.modalForm
let variantButton = variants.button


const DisplayUser = ({setUpdateUsers, register, handleSubmit, editUserMode, handleCloseModal, idUser, control, errors}) => {

  const [value, setValue] = useState({                        // declaro los valores del datepicker (el endDate no es necesario)
    startDate: null,
    endDate: null
  })


  const handleSubmitAll = (data) => {
    handleCloseModal()
    if(editUserMode) {
      let dataUser = {
        ...data,
        id: idUser.id
      }
      SaveUser("update", dataUser)
    }
    else {
      SaveUser("create", data)
    }
    setUpdateUsers(true)
  }




useEffect(() => {
  if(editUserMode){
    setValue({
      startDate: idUser.birthday,
      endDate: idUser.birthday
    })
  }
}, [idUser])



  return (
    <motion.div variants={variantModal} initial="hidden" animate="visible" exit="exit"  transition="transition" className="z-20 fixed w-full h-screen inset-0 flex items-center justify-center bg-black/30">
      <motion.form onSubmit={handleSubmit(handleSubmitAll)} variants={variantForm} initial="hidden" animate="visible" exit="exit" className=" flex flex-col w-[400px] h-[650px] absolute bg-white px-8 py-3 justify-between max-sm:w-[340px] max-sm:h-[600px] max-sm:py-3 max-sm:px-5">
        <IconX onClick={handleCloseModal} className="absolute w-8 h-8 top-4 right-4 cursor-pointer hover:text-[#d85d5d] hover:scale-125 active:text-[#d85d5d] transition-all duration-150"/>
        <h3 className="text-[30px] font-semibold max-sm:text-[24px]">{editUserMode ? "Editar Usuario" : "Nuevo Usuario"}</h3>
        <div className="relative flex flex-col m-0">
          <label htmlFor="first_name">Nombre<span className="text-[#d85d5d]">*</span></label>
          <input className="w-full h-[46px] rounded-md outline-none bg-transparent border-2 px-4 text-[#0f0f2d] placeholder:text-[#bdbdbd]" placeholder="Nombre" {...register("first_name", {pattern: {value: /^[A-Za-z\s]*$/, message: "El nombre solo debe contener letras"}})} type="text" autoComplete="off"/>
          {errors.first_name ? <p className="text-[#d85d5d] w-full absolute -bottom-4 text-[12px]">{errors.first_name.message}</p> : null}
        </div>
        <div className="relative flex flex-col m-0">
          <label htmlFor="last_name">Apellido<span className="text-[#d85d5d]">*</span></label>
          <input className="w-full h-[46px] rounded-md outline-none bg-transparent border-2 px-4 text-[#0f0f2d] placeholder:text-[#bdbdbd]" placeholder="Apellido" {...register("last_name", {pattern: {value: /^[A-Za-z\s]*$/, message: "El apellido solo debe contener letras"}})} type="text" autoComplete="off"/>
          {errors.last_name ? <p className="text-[#d85d5d] w-full absolute -bottom-4 text-[12px]">{errors.last_name.message}</p> : null}
        </div>
        <div className="relative flex flex-col m-0">
          <label htmlFor="email">Correo<span className="text-[#d85d5d]">*</span></label>
          <input className="w-full h-[46px] rounded-md outline-none bg-transparent border-2 px-4 text-[#0f0f2d] placeholder:text-[#bdbdbd]" placeholder="Correo Electrónico" {...register("email", {pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Ingresa un correo válido"}})} type="email" autoComplete="off"/>
          {errors.email ? <p className="text-[#d85d5d] w-full absolute -bottom-4 text-[12px]">{errors.email.message}</p> : null}
        </div>
        <div className="relative flex flex-col m-0">
          <label htmlFor="password">Contraseña<span className="text-[#d85d5d]">*</span></label>
          <input className="w-full h-[46px] rounded-md outline-none bg-transparent border-2 px-4 text-[#0f0f2d] placeholder:text-[#bdbdbd]" placeholder="Contraseña" {...register("password", {minLength: {value: 8, message: "La contraseña debe tener al menos 8 caracteres"}})} type="text"/>
          {errors.password ? <p className="text-[#d85d5d] w-full absolute -bottom-4 text-[12px]">{errors.password.message}</p> : null}
        </div>
        <div className="relative flex flex-col m-0">
          <label htmlFor="birthday">Cumpleaños</label>
          <Controller 
            control={control}
            name="birthday"
            render={({field}) => (
              <Datepicker
                onChange={(data) => {
                  field.onChange(data.startDate),
                  setValue(data)
                }}
                i18n="es"
                popoverDirection="up"
                displayFormat="DD/MM/YYYY"
                placeholder="Fecha de Nacimiento"
                useRange={false}
                asSingle={true}
                inputClassName="w-full h-[46px] rounded-md outline-none bg-transparent border-2 px-4 text-[#0f0f2d] placeholder:text-[#bdbdbd] max-sm:popoverDirection-down"
                type="date"
                value={value}
                readOnly
              />
            )}
          />
        </div>
        <div className="relative flex flex-col m-0">
          <label htmlFor="image_url">Imagen(url)</label>
          <input className="w-full h-[46px] rounded-md outline-none bg-transparent border-2 px-4 text-[#0f0f2d] placeholder:text-[#bdbdbd]" placeholder="URL de la Imagen" {...register("image_url")} type="text" autoComplete="off"/>
        </div>
        <motion.button variants={variantButton} initial="rest" whileTap="tap" className="border-none flex items-center justify-center gap-2 h-[45px] w-full text-white bg-[#555a88] hover:bg-[#3a3f5c]" type="submit">{editUserMode ? "Guardar cambios" : "Agregar nuevo usuario"}</motion.button>
      </motion.form>
    </motion.div>
  );
};

export default DisplayUser;
