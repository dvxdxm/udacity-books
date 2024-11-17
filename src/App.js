import "./App.css";
import AppRoutes from "./AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
