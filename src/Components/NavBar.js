import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "./Logo";
import { withStyles } from "@material-ui/core";

const styles = (theme) => ({
  toolbar: {
    margin: "0 auto"
  },
  Logo: {
    padding: "6px",
    // height: "28px",
    // width: "28px",
    "background-color": "#fff",
    "border-radius": "50%"
  },
  LogoText: {
    "font-family": "'Comfortaa', cursive"
  }
});

class NavBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolbar}>
          <Logo />
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(NavBar);
