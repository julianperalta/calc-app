import React from "react";
import Button from "../Button/Button";

interface MathOperationProps {
  onClickOperation: Function;
  onClickEqual: Function;
}

const MathOperations: React.FC<MathOperationProps> = ({onClickOperation, onClickEqual}) =>  {
  const basicMathOps = ["+", "-", "*", "/"];

  const renderBasicMathOps = onClickOperation => {
    return basicMathOps.map(bMathOp => 
      <Button key = {bMathOp} text = {bMathOp} clickHandler = {onClickOperation}/>
    );
  }

  return (
    <section className = "math-operations">
      {renderBasicMathOps(onClickOperation)}
      <Button text = "=" clickHandler = {onClickEqual}/>
    </section>
  )
};

export default MathOperations;