import React from "react";
import "./homePage.css";
import Header from "../components/Header";
import Posts from "../components/Posts";
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <SideBar />
      </div>
    </>
  );
}
