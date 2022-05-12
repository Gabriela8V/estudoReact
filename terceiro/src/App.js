import { useState } from "react";
function App() {
  const [numero, setNumero] = useState(1);

  return (
    <div>
      <p>O número atual é {numero}</p>
      <button title="Clique" onClick={() => setNumero(numero + 1)}>
        {" "}
        Clique aqui{" "}
      </button>
    </div>
  );
}

export default App;
