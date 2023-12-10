import { IconPlus } from "@tabler/icons-react"

const ActionButton = () => {
  return (
    <button>
      <button className="border-none flex items-center justify-center gap-2 h-[45px] w-[227px] text-white bg-[#555a88] hover:bg-[#3a3f5c]"><IconPlus />Crear nuevo usuario</button>
    </button>
  )
}
export default ActionButton