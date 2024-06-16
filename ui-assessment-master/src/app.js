import { useContext } from "react";
import "./app.css";
import AccountOverview from "./screens/AccountOverview";
import { AppContext } from "./context/AppContext";

function App() {
  const { state } = useContext(AppContext);

  return (
    <div className="App">
      <AccountOverview data={state} />
    </div>
  );
}

export default App;
