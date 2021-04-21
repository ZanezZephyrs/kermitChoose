import React from "react";
import "./style.scss";

interface CacoProps {
  inResult: boolean;
}

const Caco = ({ inResult }: CacoProps): JSX.Element => {
  const url1 =
    "https://i.pinimg.com/originals/92/c8/5b/92c85b38a1453f8657c2d6cc137d17a6.png";
  const url2 =
    "http://www.pngmart.com/files/11/Kermit-The-Frog-Transparent-Images-PNG.png";
  return (
    <div className="Caco--wrap">
      <img src={inResult ? url2 : url1} alt="error" />
    </div>
  );
};

export default Caco;
