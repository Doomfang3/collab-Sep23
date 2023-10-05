import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <h1>THe base of my project</h1>
      <Routes>
        <Route path="/" element={<h1>HomePage</h1>} />
        <Route path="/dogs" element={<h2>All dog page!</h2>} />
        <Route path="*" element={<h1>404 Page</h1>} />
      </Routes>
    </>
  );
}

export default App;
