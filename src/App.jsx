import Timer from "./components/Timer";
import ListUser from "./components/ListUser";
import ActionButton from "./components/ActionButton";
import DisplayUser from "./components/DisplayUser";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false)     // para mostrar el modal de creacion (componentes que lo usan: ActionButton, DisplayUser)

  return (
    <main className="flex flex-col w-screen  min-h-screen p-16 max-w-[1440px] text-[#0f0f2d] max-lg:p-10 max-sm:p-2">
      <nav className="w-full flex justify-between items-center max-sm:flex-col max-sm:gap-3">
        <h1 className="text-[50px] font-semibold max-sm:text-[30px]">Usuarios</h1>
        <ActionButton setShowModal={setShowModal}/>
      </nav>
      <article className="mt-10 m-auto text-center">
          <Timer />
          <ListUser />
      </article>
      {showModal ? <DisplayUser setShowModal={setShowModal}/> : null}
    </main>
  );
}

export default App;
