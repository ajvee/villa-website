import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar"
import Home from "./Pages/Home"
// import Index from "./Pages/Index"
// import Show from "./Pages/Show"
// import Edit from "./Pages/Edit"
// import New from "./Pages/New"
import Error from "./Pages/Error"

function App() {
  return (
    <div className="App">
      <h1>Welcome to my personal Website</h1>
      <Router>
        <NavBar />
      </Router>
    </div>
  );
}

export default App;