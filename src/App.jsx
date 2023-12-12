import Timer from "./components/Timer";
import ListUser from "./components/ListUser";
import ActionButton from "./components/ActionButton";
import DisplayUser from "./components/DisplayUser";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalDeleteConfirmation from "./components/ModalDeleteConfirmation";

function App() {
  const [showModal, setShowModal] = useState(false)     // para mostrar el modal de creacion (componentes que lo usan: ActionButton, DisplayUser)
  const [updateUsers, setUpdateUsers] = useState(false) // para actualizar la lista de usuarios
  const { register, handleSubmit, setValue, reset, control } = useForm();
  const [editUserMode, setEditUserMode] = useState(false)
  const [idUser, setIdUser] = useState(null)


  const editMode = (user) => {
    setEditUserMode(true)
    setShowModal(true)
    console.log(user.id)
    setValue("first_name", user.first_name)
    setValue("last_name", user.last_name)
    setValue("email", user.email)
    setValue("password", user.password)
    //setValue("birthday", user.birthday)
    setIdUser(user)
  }


  const handleCloseModal = () => {
    setShowModal(false)
    setEditUserMode(false)
    reset()
  }

  useEffect(() => {
    if (showModal === false) {
      reset()
    }
  }, [showModal])

  

  return (
    <main className="flex flex-col w-screen px-16 p-0 max-w-[1440px] text-[#0f0f2d] max-lg:px-10 max-sm:px-2">
      <ToastContainer />
      <nav className="sticky top-0 w-full py-2 flex justify-between items-center max-sm:flex-col max-sm:gap-3 z-10 bg-white/90 border-b-[1px] shadow-md shadow-neutral-200">
        <h1 className="text-[50px] font-semibold max-sm:text-[30px]">Usuarios</h1>
        <ActionButton setShowModal={setShowModal}/>
      </nav>
      <article className="mt-10 m-auto text-center">
          <Timer />
      </article>
        <ListUser updateUsers={updateUsers} setUpdateUsers={setUpdateUsers} editMode={editMode}/>
      <AnimatePresence> 
        {showModal ? <DisplayUser setUpdateUsers={setUpdateUsers} register={register} handleSubmit={handleSubmit} editUserMode={editUserMode} handleCloseModal={handleCloseModal} idUser={idUser} control={control}/> : null}
      </AnimatePresence>
      <ModalDeleteConfirmation />
    </main>
  );
}

export default App;
