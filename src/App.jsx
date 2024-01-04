import "./App.css";
import { MainPage } from "./pages/mainPage";
import { Navbar } from "./compontents/navbar";
import { CharacterCard } from "./compontents/characterCard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
    </div>
  );
}

export default App;
