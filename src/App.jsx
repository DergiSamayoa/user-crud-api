import Timer from "./components/Timer";
import ListUser from "./components/ListUser";
import CardUSer from "./components/CardUser";
import ActionButton from "./components/ActionButton";
import DisplayUser from "./components/DisplayUser";

function App() {
  return (
    <main className="flex flex-col w-screen  min-h-screen p-16 max-w-[1440px] text-[#0f0f2d]">
      <nav className="w-full flex justify-between">
        <h1 className="text-[50px] font-semibold">Usuarios</h1>
        <ActionButton />
      </nav>
      <CardUSer />
      <article className="mt-10  bg-cyan-700 m-auto text-center">
          <Timer />
          <ListUser />
      </article>
    </main>
  );
}

export default App;
