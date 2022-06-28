import "./styles.css";
import NavMenu from "./components/NavMenu/NavMenu";
import MainPage from "./components/MainPage/MainPage";
import Body from "./components/Body/Body";
import Video2 from "./components/MainPage/Mainvideo";
import Footer from "./components/Footer/Footer";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <NavMenu />
      <MainPage />
      <Body />
      <Video2 />
      <Footer />
    </div>
  );
}
