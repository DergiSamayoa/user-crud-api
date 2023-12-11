import { IconTrash } from "@tabler/icons-react";
import { IconPencil } from "@tabler/icons-react";
import { IconGift } from "@tabler/icons-react";
import SaveUser from "./SaveUser";

const CardUSer = (currentUser) => {
  return (
    <article className="relative w-[380px] h-[275px] bg-white text-[#0f0f2d] flex flex-col p-5 gap-3 border-[1px] rounded-md border-[#e1e1e1]">
      <h3 className="text-[25px] font-medium">{currentUser.first_name} {currentUser.last_name}</h3>
      <div className="w-full flex flex-col items-start">
        <h4 className="font-[#d3d3d3] opacity-50">CORREO</h4>
        <p className="font-medium">{currentUser.email}a</p>
      </div>
      <div className="w-full flex flex-col items-start">
        <h4 className="font-[#d3d3d3] opacity-50">CUMPLEAÑOS</h4>
        <p className="font-medium flex gap-2"><IconGift />{currentUser?.bithday}</p>
      </div>
      <div className="absolute bottom-4 right-4 flex gap-4">
        <button 
            onClick={() => SaveUser("delete", currentUser)}
            className="w-[43px] h-[43px] bg-[#d85d5d] text-white rounded-md flex items-center justify-center">
          <IconTrash />
        </button>
        <button 
            onClick={() => SaveUser("update", currentUser)}
            className="w-[43px] h-[43px] border-[1px] border-[#b7b7b7] rounded-md text-[#b7b7b7] flex items-center justify-center">
          <IconPencil />
        </button>
      </div>
    </article>
  )
}
export default CardUSer