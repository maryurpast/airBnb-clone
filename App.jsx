import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import data from "./data";
// import "./style.css";

export default function App() {
  const cards = data.map((dataItem) => {
    return <Card key={dataItem.id} {...dataItem} />;
  });
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
