import React from "react";
import { collections } from "./assets/icons/collections/collections.js";

import "./Widget.css";

function Widget({ type, data }) {
  const total = data.length;
  const complete = data.filter((ele) => ele.complete === true).length;
  const progress = Math.round((complete / total) * 100);
  return (
    <div className="widget card">
      <img src={collections[type]} alt={collections.type} />
      <div className="widget__info">
        <h1>
          {complete} <em>/</em> <span>{total}</span>
          <span> {type}</span>
        </h1>
        <span>You've completed </span>
        <em>{`${progress}%`}</em>
        <p>{`of your total ${type}!`}</p>
      </div>
    </div>
  );
}

export default Widget;
