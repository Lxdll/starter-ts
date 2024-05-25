import { Button } from "antd";
import { useGlobalStore } from "./store";

function App() {
  const count = useGlobalStore((state) => state.count);
  const increase = useGlobalStore((state) => state.increase);
  const decrease = useGlobalStore((state) => state.decrease);

  return (
    <>
      <h1 text-white flex justify-center text-sm>
        hello. I am luxudong.
      </h1>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div text-white>{count}</div>
        <Button type="text" text-white onClick={() => increase()}>
          <span hover:text-white>increase</span>
        </Button>
        <Button type="text" text-white onClick={() => decrease()}>
          <span hover:text-white>decrease</span>
        </Button>
      </div>
    </>
  );
}

export default App;
