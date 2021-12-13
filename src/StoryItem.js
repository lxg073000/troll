import { Avatar } from "@mui/material";
import React from "react";
import "./StoryItem.css";

function StoryItem({ profilePic, username, image }) {
  return (
    <div className="storyItem" style={{ backgroundImage: `url(${image})` }}>
      <div className="storyItem__details">
        <Avatar className="storyItem__details__avatar" src={profilePic} />
        <p>{username}</p>
      </div>
    </div>
  );
}

export default StoryItem;
