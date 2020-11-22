import React, { Component } from "react";

import { Link as RouterLink } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import FaceIcon from "@material-ui/icons/Face";
import DashboardIcon from "@material-ui/icons/Dashboard";
import InsertDriveFile from "@material-ui/icons/InsertDriveFile";

function ListItemLink(props) {
  return <ListItem button component={RouterLink} {...props} />;
}

export default class Sidebar extends Component {
  render() {
    return (
      <List style={{color: "aliceblue" }}>
        <ListItemLink to="/admin" >
          <ListItemIcon style={{ color: "aliceblue"}}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemLink>
        <ListItemLink to="/admin/posts">
          <ListItemIcon style={{ color: "aliceblue"}}>
            <InsertDriveFile />
          </ListItemIcon>
          <ListItemText primary="Posts" /> 
        </ListItemLink>
        <ListItemLink to="/admin/users">
          <ListItemIcon style={{ color: "aliceblue"}}>
            <FaceIcon />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItemLink>
      </List>
    );
  }
}
