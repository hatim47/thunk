import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Motor from "./pages/Motor";
import Servies from "./pages/Servies";
import News from "./pages/News";
import Gallery from "./pages/Gallery";
import Video from "./pages/Video";
export default function App() {
  return (
    <div className="bg-black relative flex w-full flex-col items-center justity-center mx-auto overflow-hidden"> 
      {/* <nav style={{ padding: "1rem", background: "#f4f4f4" }}>
        <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
        <Link to="/about" style={{ margin: "0 10px" }}>About</Link>
        <Link to="/contact" style={{ margin: "0 10px" }}>Contact</Link>
      </nav> */}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/motor" element={<Motor />} />
        <Route path="/service" element={<Servies />} />
         <Route path="/new" element={<News />} />
 <Route path="/gallery" element={<Gallery />} />
 <Route path="/video" element={<Video />} />
      </Routes>
    </div>
  );
}