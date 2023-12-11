import Timer from "./components/Timer";
import ListUser from "./components/ListUser";
import ActionButton from "./components/ActionButton";
import DisplayUser from "./components/DisplayUser";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

function App() {
  const [showModal, setShowModal] = useState(false)     // para mostrar el modal de creacion (componentes que lo usan: ActionButton, DisplayUser)

  return (
    <main className="flex flex-col w-screen  min-h-screen px-16 p-0 max-w-[1440px] text-[#0f0f2d] max-lg:px-10 max-sm:px-2">
      <nav className="sticky top-0 w-full p-3 flex justify-between items-center max-sm:flex-col max-sm:gap-3 z-10 bg-white/90 shadow-md  ">
        <h1 className="text-[50px] font-semibold max-sm:text-[30px]">Usuarios</h1>
        <ActionButton setShowModal={setShowModal}/>
      </nav>
      <article className="mt-10 m-auto text-center">
          <Timer />
          <ListUser />
      </article>
      <AnimatePresence>
      {showModal ? <DisplayUser setShowModal={setShowModal}/> : null}
      </AnimatePresence>
    </main>
  );
}

export default App;
