import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";

const styles = (theme) => ({
  toolbar: {
    margin: "0 auto"
  },
  Logo: {
    padding: "6px",
    margin: "100px",
    // height: "28px",
    // width: "28px",
    "background-color": theme.palette.secondary.main,
    "border-radius": "50%"
  },
  LogoText: {
    // "font-family": "'Ranga', cursive"
  }
});

class Logo extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.Logo}>
        <Typography variant="h6" color="inherit" className={classes.LogoText}>
          Logo
        </Typography>
      </div>
    );
  }
}
export default withStyles(styles)(Logo);
