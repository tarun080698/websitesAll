import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

const styles = (theme) => ({
  headpaper: {
    margin: "20px 40px",
    width: "auto",
    padding: "0px 20px",
    fontSize: "large",
    backgroundColor: "black",
    // color: "aliceblue"
  },
  row: {},

  cell: {
    fontSize: "large",
    width: "auto",
    height: "auto",
    display: "table-cell",
    color: "aliceblue"
  },
  caption: {
    color: "red",
    padding: "10px",
    fontSize: "1.5rem",
    textAlign: "right",
    captionSide: "top",
  },
  head: {
    fontSize: "x-large",
    fontWeight: "bolder",
    lineHeight: "0.5rem",
    backgroundColor: "black",
    color: "aliceblue"
  },
});

class TableView extends Component {
  render() {
    
    const { classes } = this.props;
    const { rows } = this.props;

    const { columns } = this.props;
    return (
      <Paper elevation={3} className={classes.headpaper}>
        <Table>
        <caption className={classes.caption}>A basic table example with a caption</caption>
          <TableHead>
            <TableRow>
              {columns
                ? columns.map((column, i) => {
                    return (
                      <TableCell className={classes.head} key={i}>
                        {column.label}
                      </TableCell>
                    );
                  })
                : null}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              ? rows.map((row, i) => {
                  return (
                    <TableRow key={i} className={classes.trow}>
                      {columns.map((column, i) => {
                        const id = column.name === 'id' ? column.name : ''
                        return (
                          <TableCell
                            className={classes.cell}
                            key={i}
                            component="th"
                            scope="row"
                          >
                            
                            {
                              column.name === "title" ? (
                              <Link
                                to={`/admin/posts/edit/${id}`}
                                component={RouterLink}
                              >
                                <u>{row[column.name]}</u>
                              </Link>
                            ) : (
                              row[column.name]
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })
              : null}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
export default withStyles(styles)(TableView);
