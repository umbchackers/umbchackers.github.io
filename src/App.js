import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import theme from "./Theme.js";
import NavBar from "./Components/NavBar";

const styles = (theme) => ({
  root: {
    flexGrow: 1
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: this.homePage
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={createMuiTheme(theme)}>
          <NavBar />
          <this.state.page />
        </MuiThemeProvider>
      </div>
    );
  }

  homePage = () => (
    <div>
      <div>Home Page</div>
    </div>
  );
}

export default withStyles(styles)(App);
