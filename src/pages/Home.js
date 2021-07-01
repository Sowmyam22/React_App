import React from "react";
import Card from "../components/card/Card";

function HomePage(props) {
  return (
    <>
      <div className="home-content">
        <h2>This is the Home Page!</h2>
        <p>Check all the items over here!</p>
      </div>

      <div className="list-items">
        {props.items.map((item, index) => {
          return (
            <Card key={index} item={item} />
          )
        })}
      </div>
    </>
  )
}

export default HomePage;