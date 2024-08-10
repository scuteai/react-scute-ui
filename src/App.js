import "./App.css";
import { AuthContextProvider } from "@scute/react";
import { scuteClient } from "./scute";
import { ScuteUI } from "./ScuteUI";

function App() {
  return (
    <div className="App">
      <AuthContextProvider scuteClient={scuteClient}>
        <ScuteUI />
      </AuthContextProvider>
    </div>
  );
}

export default App;
