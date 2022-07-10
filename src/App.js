import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Component/navbar/Navbar";
import Main from "./Pages/Hero/main/Main";

function App() {
  return (
    <div className="main-container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />

        </Routes>
      </Router>



    </div>
  );
}

export default App;
