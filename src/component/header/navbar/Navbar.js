import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";

import {useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../store/auth-slice";

import {initialStateHandler} from '../../../store/initialStateHandler';
import {Link} from 'react-router-dom';

import "./Navbar.css";

const Navbar = () => {

  const history = useHistory();
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const username = useSelector((state) => state.auth.username);
  const credit = useSelector((state) => state.credit.credit)

  const toggleMenuBarHandler = () => {
    setShowMobileNavbar(!showMobileNavbar);
  };

  const loginHandler = (event) => {
    console.log("Login clicked");
    dispatch(authActions.setOpenDailogBox(true));
  };

  const logoutHandler = (event) => {
    localStorage.clear();
    sessionStorage.clear();
    dispatch(authActions.setIsAuthenticated(false));
    dispatch(initialStateHandler());
    history.replace('/');
  }

  const showMyBooking = (event) => {
    history.replace('/mybooking');
  }

  const adminPanelHandler = (event) => {
    history.replace('/adminpanel');
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            {/* <img src="" alt="Voyage Logo"/> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{textDecoration: 'none', color: 'black' }}>Voyage</Link>
            </Typography>
            <div className="navbar-button">
              {isAuthenticated ? (
                <>
                  <Button variant="contained" disabled>
                    Credit : Rs. {credit}
                  </Button>
                  <Button color="primary" variant="text" onClick={showMyBooking}>
                    My Booking
                  </Button>
                  {sessionStorage.getItem('isAdmin') && <Button variant="text" onClick={adminPanelHandler}>Admin Panel</Button>}
                  <Button color="primary" variant="text">
                    {username}
                  </Button>
                  <Button color="primary" variant="text" onClick={logoutHandler}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button color="primary" size="small" onClick={loginHandler}>
                    Login
                  </Button>
                  <Button color="primary">Register</Button>
                </>
              )}
            </div>
            {isAuthenticated && <Button className="nav-mobile-button" variant="contained" disabled sx={{marginRight: '20px !important'}}>
                    Credit:{credit}
                  </Button>}
            <IconButton
              onClick={toggleMenuBarHandler}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              className="menu-icon"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
          {isAuthenticated ? (
            <>
              <ul
                className={
                  showMobileNavbar ? "nav-mobile-button" : "hide-mobile-button"
                }
              >
                <li>
                  <Button color="primary" onClick={showMyBooking}>My Booking</Button>
                </li>
                <li>
                  <Button color="primary">{username}</Button>
                </li>
                <li>
                  <Button color="primary" onClick={logoutHandler}>
                    Logout
                  </Button>
                </li>
              </ul>
            </>
          ) : (
            <>
              <ul
                className={
                  showMobileNavbar ? "nav-mobile-button" : "hide-mobile-button"
                }
              >
                <li>
                  <Button color="primary" onClick={loginHandler}>
                    Login
                  </Button>
                </li>
                <li>
                  <Button color="primary">Register</Button>
                </li>
              </ul>
            </>
          )}
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
