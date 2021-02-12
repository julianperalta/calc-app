import React from "react";
import Button from "../Button/Button";

interface FunctionsProps {
  onClear: Function;
  onDelete: Function;
}

const Functions: React.FC<FunctionsProps> = ({onClear, onDelete}) => (
  <section className="functions">
    <Button text = "🠔" clickHandler = {onDelete}/>
    <Button text = "CLEAR" clickHandler = {onClear}/>
  </section>
);

export default Functions;