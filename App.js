import { Routes , Route , Navigate } from "react-router-dom";


// Components
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} /> */}
        <Route path="/redirect" element={<Navigate to="/about" />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
