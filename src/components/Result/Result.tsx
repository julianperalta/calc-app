import React from "react";

interface ResultProps {
  value: string
}

const Result: React.FC<ResultProps> = ({value}) => (
  <div className = "result">
    {value}
  </div>
);

export default Result;