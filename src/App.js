import { Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import HomePage from "./components/pages/home";
import EditPage from "./components/pages/edit";

function App() {
  return (
    <div className="App">
    <h1>Meme Generator</h1>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/edit" element={<EditPage/>}></Route>

    </Routes>
    </div>
  );
}

export default App;
