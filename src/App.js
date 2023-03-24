import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
//import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [textMode, setTextMode] = useState("dark");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      setTextMode("light");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      document.title = "TextUtils - Dark Mode";

      // let a = 1;
      // setInterval(() => {
      //   document.title = "TextUtils " + a
      //   a++;
      // }, 1);
      // setInterval(() => {
      //   document.title = "Install Now"
      // }, 1500);

      showAlert("Dark mode enabled.", "success");
    } else {
      setMode("light");
      setTextMode("dark");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode enabled.", "success");
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        textMode={textMode}
      />
      <div className="container my-2">
        <Alert alert={alert} />
      </div>

      <Routes>
        <Route
          exact
          path="/"
          element={
            <TextForm
              heading="Enter the text to analyze below"
              mode={mode}
              showAlert={showAlert}
            />
          }
        ></Route>
        <Route exact path="/about" element={<About mode={mode} />}></Route>
      </Routes>
    </>
  );
}

function AppM() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        {/* <li>{name}</li> */}
      </nav>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fugiat
        exercitationem debitis accusantium, neque, sequi placeat quia modi qui
        accusamus praesentium illo dignissimos eius autem? Doloremque ipsum
        iusto distinctio velit.
      </p>
      <div classNameName="blank">Lovely</div>
    </>
  );
}

export default App;
