// React imports
import React from "react";
import { Link } from "react-router-dom";

// Component Imports
import { useStateValue } from "./StateProvider";

// Style Imports
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
          <Link to="/">
            <div className="header__option">
              <DashboardIcon fontSize="large" />
              <p>Dashboard</p>
            </div>
          </Link>
          <Link to="calendar">
            <div className="header__option">
              <CalendarTodayIcon fontSize="large" />
              <p>Calendar</p>
            </div>
          </Link>
          <Link to="challenges">
            <div className="header__option">
              <VerifiedIcon fontSize="large" />
              <p>Challenges</p>
            </div>
          </Link>
          <Link to="mentors">
            <div className="header__option">
              <AssignmentIndIcon fontSize="large" />
              <p>Mentor</p>
            </div>
          </Link>
          <Link to="resources">
            <div className="header__option">
              <ClassIcon fontSize="large" />
              <p>Resources</p>
            </div>
          </Link>
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
