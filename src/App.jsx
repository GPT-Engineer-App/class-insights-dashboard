import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import TeacherHomePage from "./pages/TeacherHomePage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/teacher-home" element={<TeacherHomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
