import React from "react";
import "./style.scss";

interface StringMap {
  [key: string]: string;
}

interface InputOptionsProps {
  options: StringMap;
  updateOptions(id: string, content: string): void;
}

const InputOptions = ({
  options,
  updateOptions,
}: InputOptionsProps): JSX.Element => {
  return (
    <div className="InputOptions--wrap">
      {Object.values(options).map((value, index) => {
        return (
          <div className="InputOptions--segment">
            <span>{`Option ${index + 1}`}</span>
            <input
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              type="string"
              defaultValue=""
              value={value}
              onChange={(e) =>
                updateOptions(`options${index + 1}`, e.currentTarget.value)
              }
            />
          </div>
        );
      })}
    </div>
  );
};

export default InputOptions;
