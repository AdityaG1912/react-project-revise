import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(6);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setcharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const copyToClipBoard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101);
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*()_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);

      pass = pass + str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllow, charAllow, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllow, charAllow, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-6 text-500 bg-gray-500 justify-center text-center shadow-md">
        <h1 className="text-3xl text-center mb-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 rounded-sm"
            placeholder="password"
            readOnly
            ref={passwordRef}
          ></input>
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shirnk-0"
            onClick={copyToClipBoard}
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 justify-center">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            ></input>
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllow}
              id="numAllow"
              onChange={() => {
                setNumAllow((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id="charAllow"
              onChange={() => {
                setcharAllow((prev) => !prev);
              }}
            />
            <label>charachters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
