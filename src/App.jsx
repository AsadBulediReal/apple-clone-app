import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-white">
        <p className="flex justify-center items-center font-bold text-[200px]">
          hello world
        </p>
      </div>
    </>
  );
};

export default App;
