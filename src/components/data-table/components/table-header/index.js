import React from 'react';

import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Checkbox,
} from '@material-ui/core';

const headCells = [
  {
    id: 'description', numeric: false, disablePadding: false, label: 'Descrição',
  },
  {
    id: 'value', numeric: true, disablePadding: false, label: 'Valor',
  },
  {
    id: '', numeric: true, disablePadding: false, label: '',
  },
];

export default function TableHeader(props) {
  const {
    classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            color="primary"
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
