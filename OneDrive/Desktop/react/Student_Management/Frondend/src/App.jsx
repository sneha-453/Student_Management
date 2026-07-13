import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddStudent from "./Components/AddStudent";
import NotFound from "./Components/NotFound";
import StudentList from "./Components/StudentList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/students/edit/:id" element={<AddStudent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;