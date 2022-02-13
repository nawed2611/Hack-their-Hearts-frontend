import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Chat from "./Pages/Chat";
import Datemaker from "./Pages/Datemaker";
import ExternalLinksPage from "./Pages/ExternalLinks";
import SelectChatRoom from "./SelectChatRooms";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/datemaker" element={<Datemaker />} />
          <Route path="/select" element={<SelectChatRoom />} />
          <Route path="/links" element={<ExternalLinksPage />} />
        </Routes>
      </div>
    </Router>
  );
}
