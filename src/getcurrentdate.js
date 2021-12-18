import React from "react";

export default function Time(props) {
  const current = new Date();
  const currentDate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <div className="App">
      <h1>{ props.date || currentDate }</h1>
    </div>
  );
}