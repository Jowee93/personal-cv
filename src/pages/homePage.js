import React from "react";
import "./homePage.scss";
import Navbar from "../components/navbar";

export default function HomePage() {
  return (
    <div className="HomePage">
      <Navbar></Navbar>
      <h1>Main Page !</h1>
    </div>
  );
}
