import React from "react";
import "./Header.css";

import TrollLogo from "./assets/icons/troll_1.png";

import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import GroupIcon from "@mui/icons-material/Group";
import VerifiedIcon from "@mui/icons-material/Verified";
import CampaignIcon from "@mui/icons-material/Campaign";
import ClassIcon from "@mui/icons-material/Class";
import ForumIcon from "@mui/icons-material/Forum";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Header() {
  return (
    <div className="header">
      <header>
        <div className="header__left">
          <h1>Troll</h1>
          <img src={TrollLogo} alt="" />
        </div>
        <div className="header__input">
          <SearchIcon />
          <input placeHolder="Search Troll" />
        </div>
        <div className="header__middle">
          <div className="header__option">
            <TurnedInIcon fontSize="large" />
            <p>Tasks</p>
          </div>
          <div className="header__option">
            <BookmarksIcon fontSize="large" />
            <p>Goals</p>
          </div>
          <div className="header__option">
            <VerifiedIcon fontSize="large" />
            <p>Challenges</p>
          </div>
          <div className="header__option">
            <CampaignIcon fontSize="large" />
            <p>Events</p>
          </div>
          <div className="header__option">
            <ClassIcon fontSize="large" />
            <p>Resources</p>
          </div>
        </div>
        <div className="header__right">
          <div className="header__info">
            <Avatar />
            <IconButton>
              <GroupIcon />
            </IconButton>
            <IconButton>
              <ForumIcon />
            </IconButton>
            <IconButton>
              <KeyboardArrowDownIcon />
            </IconButton>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
