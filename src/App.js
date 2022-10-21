import "./App.css";
import SideBar from "./Components/SideBar";
import Container from "./Components/Container";
import AfricanFood from "./Components/AfricanFood";
import ChineseFood from "./Components/ChineseFood";
import ItalianFood from "./Components/ItalianFood";
import DesertFood from "./Components/DesertFood";
import Help from "./Components/Help";
import Profile from "./Components/Profile";
import ComingSoon from "./Components/ComingSoon";
import Chat from "./Components/Chat";
import Modal from "./Components/Modal";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">

        <Router>
          <SideBar />
          {/* <Container /> */}
          <Routes>
            <Route path="/" element={<Container />} />
            <Route path="/african" element={<AfricanFood />} />
            <Route path="/chinese" element={<ChineseFood />} />
            <Route path="/italian" element={<ItalianFood />} />
            <Route path="/desert" element={<DesertFood />} />
            <Route path="/help" element={<Help />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/comingsoon" element={<ComingSoon />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/modal" element={<Modal />} />
            <Route path="/update/:id" element={<Modal />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
