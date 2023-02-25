import "./App.css";
import { ExamContextProvider } from "./Context/ExamContext";
import Routess from "./Routess";

function App() {
  return (
    <div className="App">
      <ExamContextProvider>
        <Routess />
      </ExamContextProvider>
    </div>
  );
}

export default App;
