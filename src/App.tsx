import { useGlobalStore } from "./store";

function App() {
  const count = useGlobalStore((state) => state.count);
  const increase = useGlobalStore((state) => state.increase);
  const decrease = useGlobalStore((state) => state.decrease);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="text-4xl font-semibold text-white">{count}</div>
      <button onClick={() => increase()}>
        <span className="border text-white">increase</span>
      </button>
      <button onClick={() => decrease()}>
        <span className="border text-white">decrease</span>
      </button>
    </div>
  );
}

export default App;
