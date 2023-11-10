import "./App.css";
import Landing from "./pages/Landing/Landing";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Startquiz from "./pages/Startquiz/Startquiz";
import Getresults from "./pages/Getresults/Getresults";
import Getoneresult from "./pages/Getoneresult/Getoneresult";
import Getallresults from "./pages/Getallresults/Getallresults";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/getresults" element={<Getresults />} />
          <Route path="/startquiz" element={<Startquiz />} />
          <Route path="/getoneresult" element={<Getoneresult />} />
          <Route path="/getallresults" element={<Getallresults />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
