import "./App.css";

function App() {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="flex gap-10 border border-purple-300 rounded bg-slate-50 p-20">
        <button className="px-3 py-2 rounded bg-green-500 text-xl font-semibold text-white">
          Increment
        </button>
        <p className="text-3xl">0</p>
        <button className="px-3 py-2 rounded bg-red-500 text-xl font-semibold text-white">
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
