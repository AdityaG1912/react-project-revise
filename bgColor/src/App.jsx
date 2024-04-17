import { useState } from "react";

function App() {
  const [color, setColor] = useState("lavender");
  const colors = ["Red", "Green", "Blue", "Lavender", "Black"];
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center bg-white p-3 gap-3 shadow-lg rounded-md">
          {colors.map((i) => (
            <button
              key={i}
              className="justify-center outline-none rounded-full px-4 py-2 gap-3 shadow-lg"
              style={{ backgroundColor: i }}
              onClick={() => setColor(i)}
            >
              {i}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
