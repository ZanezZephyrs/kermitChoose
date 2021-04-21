import React from "react";
import "./style.scss";

interface SelectorProps {
  handleChange(val: number): void;
}

const Selector = ({ handleChange }: SelectorProps): JSX.Element => {
  return (
    <div className="Selector--wrap">
      <span>Choose the number of options</span>
      <input
        type="number"
        defaultValue={2}
        min={2}
        onChange={(e) => handleChange(e.target.valueAsNumber)}
      />
    </div>
  );
};

export default Selector;
