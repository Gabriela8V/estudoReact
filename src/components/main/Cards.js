export default function Cards(props) {
  return (
    <div className="Cards">
      {props.data.map((itens, ix) => (
        <div key={ix}>
          <p>
            {itens.cardname.substring(0, 4) == "Visa" ? (
              <img src="../img/download-icon-credit+card+debit+payment+visa+icon-1320162799182509645_256.png" />
            ) : (
              <img src="../img/download-icon-credit+card+maestro+payment+icon-1320162801485039335_256.png" />
            )}
          </p>
        </div>
      ))}
    </div>
  );
}
