import blue from "@material-ui/core/colors/blue";
import yellow from "@material-ui/core/colors/yellow";
import red from "@material-ui/core/colors/red";

const theme = {
  palette: {
    primary: { main: blue[600] },
    secondary: { main: yellow[800] },
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2
  }
};

export default theme;
