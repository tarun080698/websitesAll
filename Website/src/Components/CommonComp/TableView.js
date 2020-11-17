import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const styles = (theme) => ({
  headpaper: {
    margin: "20px 40px",
    width: "auto",
    padding: "0px 20px",
    fontSize: "large",
  }
});

class TableView extends Component {
  render() {
    const {classes } = this.props;
    const { rows } = this.props;

    const { columns } = this.props;
    return (
      <Paper elevation={3} className={classes.headpaper}>
        <Table>
          <TableHead>
            <TableRow>
              {columns
                ? columns.map((column, i) => {
                    return <TableCell key={i}>{column.label}</TableCell>;
                  })
                : null}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              ? rows.map((row) => {
                return <TableRow>
                  {
                    columns.map((column, i) => {
                    return (
                      <TableCell key={i} component="th" scope="row">
                        {row[column.name]}
                      </TableCell>
                    );
                    })
                  }
                </TableRow>
                })
              : null}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
export default (withStyles(styles)(TableView));
