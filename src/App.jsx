import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./routes/home/Home";
import Projects from "./routes/projects/Projects";
import Contacts from "./routes/contacts/Contacts";
import ErrorPage from "./routes/ErrorPage";
import NoMatch from "./routes/NoMatch";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-8 p-8 col-start-2 col-end-7 min-h-screen text-white">
        <Routes>
          <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
          <Route
            path="projects"
            element={<Projects />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="contacts"
            element={<Contacts />}
            errorElement={<ErrorPage />}
          />
          <Route path="*" element={<NoMatch />} errorElement={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
