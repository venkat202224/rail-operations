const PrimartBtn = (props: any) => {
  return (
    <>
      <div>
        <button onClick={props.handleClick}>
          {props.btnName} {props.btnCount}
        </button>
      </div>
      <button onClick={props.myClick}>
        {props.btnTwo} {props.btnTwoCount}
      </button>{" "}
      <br />
    </>
  );
};

export default PrimartBtn;
