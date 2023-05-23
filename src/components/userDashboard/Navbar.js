import "./navbar.css";
// import image from "./../../Assets/undraw_icons_wdp4.svg";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ArtTrackIcon from "@mui/icons-material/ArtTrack";
import logo from "../../assests/logo.png";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ChatIcon from "@mui/icons-material/Chat";
const Navbar = (props) => {
  const breadcrumbs = useBreadcrumbs();
  const [sidebar, setSidebar] = useState(true);

  function showSidebar() {
    setSidebar(!sidebar);
  }

  return (
    <div className="Main">
      <div>
        <nav className={sidebar ? "nav-menu-active1" : "nav-menu"}>
          <ul className="nav-menu-items">
            <div className="top">
              <img src={logo} alt="logo"></img>
            </div>
            <hr className="hr"></hr>
            <li className="nav-text" title="AllItems">
              <Link to={"/"}>
                <HomeIcon />
                {<span>Home</span>}
              </Link>
            </li>
            <li className="nav-text" title="Buy">
              <Link to={"/Buy"}>
                <ShoppingBasketIcon />
                {<span>Buy Requests</span>}
              </Link>
            </li>{" "}
            <li className="nav-text" title="Sell">
              <Link to={"/Chats"}>
                <ChatIcon />
                {<span>Connect</span>}
              </Link>
            </li>
            <li className="nav-text" title="Profile">
              <Link to={"/Profile"}>
                <PermIdentityIcon />
                {<span>Profile</span>}
              </Link>
            </li>
            <li className="nav-text" title="Logout">
              <Link to={"/"}>
                <LogoutIcon />
                {<span>Logout</span>}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <main className="main">
        <div className="navbarMain">
          <div className={"navbar"}>
            <div className="breadcrapms">
              {breadcrumbs.map(({ breadcrumb }) => (
                <div key={breadcrumb}>
                  {breadcrumb === "Home"}
                  <span>{breadcrumb} / &nbsp;</span>
                </div>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MenuIcon className="anc1" onClick={showSidebar} />
              <div title="Logout">
                <LogoutIcon style={{ cursor: "pointer" }} className="anc4" />
              </div>
            </div>
          </div>
        </div>

        <div className="hamza">{props.children}</div>
      </main>
    </div>
  );
};

export default Navbar;
