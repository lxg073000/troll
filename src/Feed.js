import React from "react";
import "./Feed.css";
import Tasks from "./Tasks.js";

import Overview from "./Overview.js";

function Feed() {
  return (
    <div className="feed">
      <Tasks />
      <Overview />
    </div>
  );
}

export default Feed;
