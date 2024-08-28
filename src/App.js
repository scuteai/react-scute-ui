import "./App.css";
import { AuthContextProvider } from "@scute/react";
import { scuteClient } from "./scute";
import { ScuteUI } from "./ScuteUI";

function App() {
  return (
    <div
      className="App"
      style={{
        boxSizing: "border-box",
        padding: 16,
        margin: "o auto",
      }}
    >
      <AuthContextProvider scuteClient={scuteClient}>
        <ScuteUI />
      </AuthContextProvider>
    </div>
  );
}

export default App;
