import "./components/common.css";
import { Menu } from "./components/Menu";
import { Questions } from "./components/Questions";
import "./App.css";
import { BookWriting } from "./components/BookWriting";

function App() {
  return (
    <div>
      <h1 className="head" style={{ textAlign: "center" }}>
        Notes Management Application 📑📑📑
      </h1>
      <h2 className="head1" style={{ textAlign: "center", color: "red" }}>
        Created by PC Prajapat
      </h2>

      <BookWriting />
    </div>
  );
}

export default App;
