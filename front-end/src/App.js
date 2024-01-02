import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hello from "./Hello";
// import './App.css'
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
      <h1 className="text-6xl text-red-500 bg-purple-200">Welcome to my Personal Website</h1>
      <Hello></Hello>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;