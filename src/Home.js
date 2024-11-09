import React from "react";
import "./Home.css";

function Home({ formImage }) {
  let formBackgroundStyle = {
    backgroundImage: `url(${formImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }

  return (
    <div className="home">
      <div className="home-content">
        <div className="car-form-background" style={formImage ? formBackgroundStyle : {}}>
          <h2 className="home-tagline">Find fun cars</h2>
          <form className="home-filter-form">
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home;