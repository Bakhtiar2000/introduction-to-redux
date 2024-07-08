import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/CounterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="flex gap-10 border border-purple-300 rounded bg-slate-50 p-20">
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-2 rounded bg-green-500 text-xl font-semibold text-white"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(incrementByValue(8))}
          className="px-3 py-2 rounded bg-green-500 text-xl font-semibold text-white"
        >
          Increment By Value
        </button>
        <p className="text-3xl">{count}</p>
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-2 rounded bg-red-500 text-xl font-semibold text-white"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
