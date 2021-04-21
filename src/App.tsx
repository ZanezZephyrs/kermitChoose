/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from "react";
import "./App.scss";
import Caco from "./components/Caco";
import Selector from "./components/Selector";
import InputOptions from "./components/InputOptions";

interface StringMap {
  [key: string]: string;
}

function App(): JSX.Element {
  const [numberOptions, setNumberOptions] = useState(2);
  const [options, SetOptions] = useState<StringMap>({});
  const [selected, SetSelected] = useState("");
  const [inResult, setInResult] = useState(false);

  useEffect(() => {
    const newArray = Array.from(
      { length: numberOptions },
      (_, i) => `options${i + 1}`
    );
    const obj = newArray.reduce((acc, key) => ({ ...acc, [key]: "" }), {});
    SetOptions(obj);
  }, [numberOptions]);
  const updateOptionsNumber = (val: number) => {
    setNumberOptions(val);
  };

  const updateOptions = (id: string, content: string) => {
    const newObj = { ...options };
    newObj[id] = content;
    SetOptions(newObj);
  };

  const generateRandomSelection = () => {
    const randomNumber = Math.round(Math.random() * (numberOptions - 1));
    return randomNumber;
  };

  const handleClick = () => {
    const result = generateRandomSelection();
    SetSelected(Object.values(options)[result]);
    setInResult(true);
  };

  const handleChooseAgain = () => {
    setInResult(false);
    SetSelected("");
    const newArray = Array.from(
      { length: numberOptions },
      (_, i) => `options${i + 1}`
    );
    const obj = newArray.reduce((acc, key) => ({ ...acc, [key]: "" }), {});
    SetOptions(obj);
  };

  return (
    <div className="App">
      <Caco inResult={inResult} />
      {!inResult && <Selector handleChange={updateOptionsNumber} />}
      {!inResult && <span className="ask--kermit">Ask Kermit </span>}
      {!inResult && (
        <InputOptions options={options} updateOptions={updateOptions} />
      )}
      {inResult && <span className="ask--kermit">Kermit Says</span>}
      {inResult && <span className="ask--kermit">{selected}</span>}
      <button onClick={() => (!inResult ? handleClick() : handleChooseAgain())}>
        {inResult ? "Ask another question" : "Ask kermit"}
      </button>
    </div>
  );
}

export default App;
