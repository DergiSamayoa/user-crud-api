import ListUser from "./components/ListUser";

function App() {
  return (
    <main className="bg-black/70 min-h-screen w-[1200px] m-auto">
      <header className="flex flex-row justify-between align-middle p-4">
        <h1 className="text-center p-2 font-bold text-2xl">CRUD - User with api</h1>
        <div className="col-span-2">Seach by name <button className="p-2 border-2 bg-blue-500 text-black rounded-2xl ml-4">User New</button></div>
      </header>
      <article className="mt-10  bg-cyan-700 m-auto text-center">
          <ListUser />
      </article>
    </main>
  );
}

export default App;
