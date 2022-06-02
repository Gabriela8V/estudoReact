export default function Balance(props) {
  return (
    <div className="Balance">
      <p>{props.data.cardname}</p>
      <p>{props.data.usebalance}</p>
      <p>{props.data.cardlimit}</p>
      <div
        style={{
          border: "1px solid #ccc",
          width: "100%",
          height: "30px",
        }}
      ></div>
    </div>
  );
}
