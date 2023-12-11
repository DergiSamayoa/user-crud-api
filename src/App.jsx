import Timer from "./components/Timer";
import ListUser from "./components/ListUser";
import ActionButton from "./components/ActionButton";
import DisplayUser from "./components/DisplayUser";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false)     // para mostrar el modal de creacion (componentes que lo usan: ActionButton, DisplayUser)

  return (
    <main className="flex flex-col w-screen  min-h-screen p-16 max-w-[1440px] text-[#0f0f2d]">
      <nav className="w-full flex justify-between items-center">
        <h1 className="text-[50px] font-semibold">Usuarios</h1>
        <ActionButton setShowModal={setShowModal}/>
      </nav>
      <article className="mt-10 m-auto text-center bg-cyan-800">
          <Timer />
          <ListUser />
      </article>
      {showModal ? <DisplayUser setShowModal={setShowModal}/> : null}
    </main>
  );
}

export default App;
