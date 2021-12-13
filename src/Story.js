import React from "react";
import "./Story.css";
import StoryItem from "./StoryItem.js";

function Story() {
  return (
    <div className="story">
      <StoryItem
        profilePic={
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/65/tiger-face_1f42f.png"
        }
        username={"Tommy"}
        title={"Tommy did a thing"}
        image={
          "https://randomwordgenerator.com/img/picture-generator/5fe9d045495bb10ff3d8992cc12c30771037dbf852547941762a7ed7974b_640.jpg"
        }
      />
      <StoryItem
        profilePic={
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/65/chicken_1f414.png"
        }
        username={"Tommy"}
        title={"Tommy did a thing"}
        image={
          "https://randomwordgenerator.com/img/picture-generator/54e0d6424f51a514f1dc8460962e33791c3ad6e04e5074417c2e7dd1934dc2_640.jpg"
        }
      />
      <StoryItem
        profilePic={
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/65/horse-face_1f434.png"
        }
        username={"Tommy"}
        title={"Tommy did a thing"}
        image={
          "https://randomwordgenerator.com/img/picture-generator/55e4dc4b4e55af14f1dc8460962e33791c3ad6e04e507440752f72d69e4bc4_640.jpg"
        }
      />
      <StoryItem
        profilePic={
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/65/bear-face_1f43b.png"
        }
        username={"Tommy"}
        title={"Tommy did a thing"}
        image={
          "https://randomwordgenerator.com/img/picture-generator/54e5d7404353ab14f1dc8460962e33791c3ad6e04e50744172297cdc904ac3_640.jpg"
        }
      />
    </div>
  );
}

export default Story;
