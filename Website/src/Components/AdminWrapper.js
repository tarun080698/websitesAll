import React, { Component } from "react";
import "../assets/css/admin.css";
import Sidebar from "../Components/CommonComp/Sidebar";

import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

// app bar imports
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

// drawer imports
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import AdminIcon from "@material-ui/icons/SupervisorAccountTwoTone";
// import { Link } from "react-router-dom";
// import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const drawerWidth = "220";

const styles = (theme) => ({
  root: {
    display: "flex",
    backgroundColor: "black",
    color: "aliceblue",
  },
  toolbar: {
    paddingRight: 24,
    backgroundColor: "black",
    color: "aliceblue",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    color: "aliceblue",
  },
  appBarShift: {
    marginLeft: drawerWidth,
    color: "aliceblue",
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarSpace: theme.mixins.toolbar,
  drawerPaper: {
    position: "relative",
    whiteSpace: "noWrap",
    width: drawerWidth,
    backgroundColor: "black",
    color: "aliceblue",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    width: theme.spacing(7),
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    color: "aliceblue",
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 10px",
    ...theme.mixins.toolbar,
    color: "aliceblue",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    height: "100vh",
    overflow: "auto",
  },
});

class AdminWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleDrawerClose = (e) => {
    this.setState({ open: false });
  };

  handleDrawerOpen = (e) => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;
    return (
      <div id="admin-page" className={classes.root}>
        <AppBar
          className={classNames(
            classes.appBar,
            this.state.open && classes.appBarShift
          )}
          style={{ borderRight: "1px solid aliceblue" }}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              onClick={this.handleDrawerOpen}
              style={{ color: "aliceblue" }}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap>
              Admin's site
              <AdminIcon style={{'marginLeft':" 10px"}}/>
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          classes={{
            paper: classNames(
              classes.drawerPaper,
              !this.state.open && classes.drawerPaperClose
            ),
          }}
          variant="permanent"
          open={true}
          style={{ borderRight: "1px solid aliceblue" }}
        >
          <div className={classes.toolbarIcon}>
            <IconButton
              onClick={this.handleDrawerClose}
              style={{ color: "aliceblue" }}
            >
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <Sidebar />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpace} />
          {this.props.children}
        </main>
      </div>
    );
  }
}
export default withStyles(styles)(AdminWrapper);
