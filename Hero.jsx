import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero--grid">
        <img src="./dist/images/image1.png" alt="image" className="image1" />
        <img src="./dist/images/image2.png" alt="image" className="image2" />
        <img src="./dist/images/image3.png" alt="image" className="image3" />
        <img src="./dist/images/image4.png" alt="image" className="image4" />
        <img src="./dist/images/image5.png" alt="image" className="image5" />
        <img src="./dist/images/image6.png" alt="image" className="image6" />
        <img src="./dist/images/image7.png" alt="image" className="image7" />
        <img src="./dist/images/image8.png" alt="image" className="image8" />
        <img src="./dist/images/image9.png" alt="image" className="image9" />
      </div>
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
