import React from 'react';
import {Button} from "../Button";

interface NumbersProps {
  onClickNumber: Function;
}

const Numbers: React.FC<NumbersProps> = ({onClickNumber}) => {

  const numbers = [7,8,9,4,5,6,1,2,3,0];
  
  const renderButtons = onClickNumber => {
    return numbers.map(number => (
      <Button 
        key = {number} 
        text = {`${number}`} 
        clickHandler = {onClickNumber}
      />
    ));
  }

  return (
    <section className="numbers">
      {renderButtons(onClickNumber)}
    </section>
  );
}

export default Numbers;
