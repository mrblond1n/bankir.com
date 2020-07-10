import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core';
import { FirstPage, KeyboardArrowLeft, KeyboardArrowRight, LastPage, Delete } from "@material-ui/icons";
import {
  Table, TableBody, TableCell, TableContainer, TableFooter, TablePagination, TableRow, Paper, IconButton, TableHead
} from "@material-ui/core";

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import moment from 'moment';
import { removeEvent } from '../store/actions/eventActions';

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPage /> : <FirstPage />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPage /> : <LastPage />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const useStyles2 = makeStyles({
  table: {
    minWidth: 300,
  },
});

const INITIAL_STATE = [];

export default function CustomPaginationActionsTable({ events = INITIAL_STATE }) {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const dispatch = useDispatch();
  const history = useHistory();

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, events.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const removeItem = (e, id) => {
    e.stopPropagation();
    dispatch(removeEvent(id))
  }
  const translateTo = (e, id) => {
    e.stopPropagation();
    history.push(`event/${id}`)
  }


  const columns = [
    { name: 'date', title: 'Дата' },
    { name: 'sum', title: 'Сумма' },
    { name: 'action', title: 'Действия' }
  ]

  const className = method => method === 'outcome' ? 'color-wrapper outcome' : 'color-wrapper income';

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            {columns.map(col => <TableCell key={col.name}>{col.title}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0 ? events.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : events)
            .map((row) =>
              <TableRow key={row.id} onClick={e => translateTo(e, row.id)} style={{ cursor: 'pointer' }}>
                <TableCell>
                  {row.tag} <br />
                  {moment(row.date.toDate()).format('DD.MM.YY')}
                </TableCell>
                <TableCell>
                  <span className={className(row.method)}>{row.sum}</span>

                </TableCell>
                <TableCell>
                  <Delete style={{ cursor: 'pointer' }} onClick={e => removeItem(e, row.id)} />
                </TableCell>
              </TableRow>
            )}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={events.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
