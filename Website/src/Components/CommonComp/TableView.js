import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

class TableView extends Component {
  render() {
    const { rows } = this.props;

    const { columns } = this.props;
    return (
      <Paper elevation={3}>
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
                  return columns.map((column, i) => {
                    return (
                      <TableCell key={i} component="th" scope="row">
                        {row[column.name]}
                      </TableCell>
                    );
                  });
                })
              : null}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
export default TableView;
