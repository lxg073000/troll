import React from "react";
import "./Header.css";

import TrollLogo from "./assets/icons/troll_1.png";

import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import VerifiedIcon from "@mui/icons-material/Verified";
import ClassIcon from "@mui/icons-material/Class";
import ForumIcon from "@mui/icons-material/Forum";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <header>
        <div className="header__left">
          <h1 className="logo">Troll</h1>
          <img src={TrollLogo} alt="" />
        </div>
        <div className="header__input">
          <SearchIcon />
          <input placeholder="Search Troll" />
        </div>
        <div className="header__middle">
          <div className="header__option">
            <DashboardIcon fontSize="large" />
            <p>Dashboard</p>
          </div>
          <div className="header__option">
            <CalendarTodayIcon fontSize="large" />
            <p>Calendar</p>
          </div>
          <div className="header__option">
            <VerifiedIcon fontSize="large" />
            <p>Challenges</p>
          </div>
          <div className="header__option">
            <AssignmentIndIcon fontSize="large" />
            <p>Mentor</p>
          </div>
          <div className="header__option">
            <ClassIcon fontSize="large" />
            <p>Resources</p>
          </div>
        </div>
        <div className="header__right">
          <div className="header__info">
            <Avatar src={user.photoURL} />
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
