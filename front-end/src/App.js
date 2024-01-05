import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NavBar from "./Components/NavBar"
import Home from "./Pages/Home"

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </main>
        {/* <NavBar /> */}
      </Router>
    </div>
  );
}

export default App;