import { useState } from 'react';

function Square({ value, onSqaureClick }) {
  return (
    <>
      <button className="square" onClick={onSqaureClick}>
        {value}
      </button>
    </>
  );
}
export default function Board() {
  const [sqaures, setSqaures] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSqaures = sqaures.slice();
    nextSqaures[i] = 'X';
    setSqaures(nextSqaures);
  }
  return (
    <>
      <div className="board-row">
        <Square value={sqaures[0]} onSqaureClick={() => handleClick(0)} />
        <Square value={sqaures[1]} onSqaureClick={() => handleClick(1)} />
        <Square value={sqaures[2]} onSqaureClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={sqaures[3]} onSqaureClick={() => handleClick(3)} />
        <Square value={sqaures[4]} onSqaureClick={() => handleClick(4)} />
        <Square value={sqaures[5]} onSqaureClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={sqaures[6]} onSqaureClick={() => handleClick(6)} />
        <Square value={sqaures[7]} onSqaureClick={() => handleClick(7)} />
        <Square value={sqaures[8]} onSqaureClick={() => handleClick(8)} />
      </div>
    </>
  );
}
