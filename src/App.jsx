import Timer from "./components/Timer";
import ListUser from "./components/ListUser";
import SaveUser from "./components/SaveUser";

function App() {
  return (
    <main className="bg-black/70 min-h-screen w-[1200px] m-auto">
      <header className="flex flex-row justify-between align-middle p-4">
        <h1 className="text-center p-2 font-semibold text-2xl">
          User - <span className="font-bold">crud</span> with api
        </h1>
        <div className="flex flex-row items-center">
          <div className="border-1 rounded-2xl bg-white">
            <input 
              name="search"
              className="pl-2 outline-none rounded-2xl w-[320px]" 
              type="text" placeholder="Seach by name" />
            <button className="p-2 border-2 bg-blue-500 text-black rounded-2xl">
              Search
            </button>
          </div>
          <button onClick={SaveUser} className="p-2 border-2 bg-blue-500 text-black rounded-2xl ml-4">
            Add user
          </button>
        </div>
      </header>
      <article className="mt-10  bg-cyan-700 m-auto text-center">
          <Timer />
          <ListUser />
      </article>
    </main>
  );
}

export default App;
