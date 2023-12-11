//tareas por terminar: validacion de campos y las animaciones


import { IconX } from "@tabler/icons-react";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";


//los inputs imagenURL y cumpleaños no son obligatorios
//el datapicker se lo usa como un componente (funciona como un input) *ya esta todo configurado

const DisplayUser = ({setShowModal}) => {
  const [value, setValue] = useState({                        // declaro los valores del datepicker (el endDate no es necesario)
    startDate: null,
    endDate: null
  })

  console.log(value.startDate) 
  console.log(value.endDate)                               // para ver el valor del datepicker (esta en un objeto y se usa el startDate para acceder al dato)

  const handleValueChange = (newValue) => {         
    setValue(newValue)                                           // setea el value con el valor del la fecha seleccionada
  }


  return (
    <div className="z-20 absolute w-full h-screen inset-0 flex items-center justify-center bg-black/30">
      <form className="flex flex-col w-[420px] h-[731px] absolute bg-white p-8 justify-between">
        <IconX onClick={() => setShowModal(false)} className="absolute top-4 right-4 cursor-pointer hover:text-[#d85d5d] hover:scale-125" />
        <h3 className="text-[32px] font-semibold">Nuevo Usuario</h3>
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
          <label htmlFor="birthday">Cumpleaños</label>
          <Datepicker onChange={handleValueChange} primaryColor="#fff" i18n="es" popoverDirection="up" displayFormat="DD/MM/YYYY"  placeholder="Fecha de Nacimiento" useRange={false} asSingle={true} inputClassName="w-full h-[48px] rounded-md outline-none bg-transparent border-2 px-4 text-[#0f0f2d] placeholder:text-[#bdbdbd]" name="birthday" type="date" value={value} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Contraseña</label>
          <input className="w-full h-[48px] rounded-md outline-none bg-transparent border-2 px-4 text-[#0f0f2d] placeholder:text-[#bdbdbd]" placeholder="Contraseña" name="password" type="password" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="image_url">Imagen(url)</label>
          <input className="w-full h-[48px] rounded-md outline-none bg-transparent border-2 px-4 text-[#0f0f2d] placeholder:text-[#bdbdbd]" placeholder="URL de la Imagen" name="image_url" type="text" autoComplete="off"/>
        </div>
        <button className="border-none flex items-center justify-center gap-2 h-[45px] w-full text-white bg-[#555a88] hover:bg-[#3a3f5c]" type="submit">Agregar nuevo usuario</button>
      </form>
    </div>
  );
};
export default DisplayUser;
