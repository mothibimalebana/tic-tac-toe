function handleClick() {
  console.log('clicked');
}

function Square({ title }) {
  return (
    <>
      <button className="square" onClick={handleClick}>
        {title}
      </button>
    </>
  );
}
export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square title={1} />
        <Square title={2} />
        <Square title={3} />
      </div>
      <div className="board-row">
        <Square title={4} />
        <Square title={5} />
        <Square title={6} />
      </div>
      <div className="board-row">
        <Square title={7} />
        <Square title={8} />
        <Square title={9} />
      </div>
    </>
  );
}
