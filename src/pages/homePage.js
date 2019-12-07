import React from "react";
import "./homePage.scss";
import Navbar from "../components/navbar";
import MainBody from "../components/mainBody";

export default function HomePage() {
  return (
    <div className="HomePage">
      <Navbar></Navbar>
      <MainBody></MainBody>
    </div>
  );
}
