import React from "react";
import "./Header.css";

import SearchIcon from "@mui/icons-material/Search";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import GroupIcon from "@mui/icons-material/Group";
import VerifiedIcon from "@mui/icons-material/Verified";
import FestivalIcon from "@mui/icons-material/Festival";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <h1>Troll</h1>
      </div>
      <div className="header__input">
        <SearchIcon />
        <input placeHolder="Search Troll" />
      </div>
      <div className="header__middle">
        <div className="header__option">
          <TurnedInIcon />
          <p>Moments</p>
        </div>
        <div className="header__option">
          <BookmarksIcon />
          <p>Milestones</p>
        </div>
        <div className="header__option">
          <GroupIcon />
          <p>Mentors</p>
        </div>
        <div className="header__option">
          <VerifiedIcon />
          <p>Challenges</p>
        </div>
        <div className="header__option">
          <FestivalIcon />
          <p>Events</p>
        </div>
        <div className="header__option">
          <CollectionsBookmarkIcon />
          <p>Resources</p>
        </div>
      </div>
      <div className="header__right"></div>
    </div>
  );
}

export default Header;
