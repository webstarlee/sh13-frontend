import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const useStyles = () => {
  const theme = useTheme();
  return ({
    paper: {
      margin: ' 25px 0px',
      position: 'relative',
      borderLeft: `1px solid ${theme.palette.secondary.main}`,
    },
    table: {
      width: '100%',
      minWidth: '0',
    },
    tableHead: {
      marginRight: '0px',
      overflow: 'hidden',
      cursor: 'pointer',
    },
    tableRow: {
      bsTableBg: 'transparent',
      bsTableHoverColor: theme.palette.secondary.bold,
      bsTableHoverBg: theme.palette.secondary.hover,
      width: '100%',
      marginBottom: '1rem',
      color: theme.palette.secondary.bold,
      verticalAlign: 'top',
    },
    tableCell: {
      borderTop: `1px solid ${theme.palette.secondary.main}`,
      borderRight: `1px solid ${theme.palette.secondary.main}`,
      backgroundColor: 'transparent',
      borderBottom: `3px solid ${theme.palette.secondary.bold}`,
      fontWeight: 'bold',
      color: theme.palette.secondary.bold,
      padding: theme.spacing(1.5),
      lineHeight: "normal",
      fontFamily: "chakra_bold",
      "&:last-child": {
        textAlign: "center",
      }
    },
    tablebodyCell: {
      color: theme.palette.secondary.bold,
      borderColor: 'inherit',
      borderRight: `1px solid ${theme.palette.secondary.main}`,
      padding: theme.spacing(1.5),
      verticalAlign: "middle",
      "&:last-child": {
        padding: theme.spacing(1),
        textAlign: "center",
      }
    },
    cardArrow: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    cardArrowTopLeft: {
      width: "10px",
      height: "10px",
      position: "absolute",
      top: 0,
      left: 0,
      "&::before": {
        content: '""',
        position: "absolute",
        width: "2px",
        height: "8px",
        background: theme.palette.common.white,
        opacity: ".75",
        top: "2px"
      },
      "&::after": {
        content: '""',
        position: "absolute",
        width: "10px",
        height: "2px",
        background: theme.palette.common.white,
        opacity: ".75",
      }
    },
    cardArrowTopRight: {
      width: "10px",
      height: "10px",
      position: "absolute",
      top: 0,
      right: 0,
      "&::before": {
        content: '""',
        position: "absolute",
        width: "2px",
        height: "8px",
        background: theme.palette.common.white,
        opacity: ".75",
        top: "2px",
        right: 0,
      },
      "&::after": {
        content: '""',
        position: "absolute",
        width: "10px",
        height: "2px",
        background: theme.palette.common.white,
        opacity: ".75",
      }
    },
    cardArrowBottomRight: {
      width: "10px",
      height: "10px",
      position: "absolute",
      bottom: 0,
      right: 0,
      "&::before": {
        content: '""',
        position: "absolute",
        width: "2px",
        height: "8px",
        background: theme.palette.common.white,
        opacity: ".75",
        bottom: "2px",
        right: 0,
      },
      "&::after": {
        content: '""',
        position: "absolute",
        width: "10px",
        height: "2px",
        background: theme.palette.common.white,
        opacity: ".75",
        bottom: 0,
      }
    },
    cardArrowBottomLeft: {
      width: "10px",
      height: "10px",
      position: "absolute",
      bottom: 0,
      left: 0,
      "&::before": {
        content: '""',
        position: "absolute",
        width: "2px",
        height: "8px",
        background: theme.palette.common.white,
        opacity: ".75",
        bottom: "2px",
        left: 0,
      },
      "&::after": {
        content: '""',
        position: "absolute",
        width: "10px",
        height: "2px",
        background: theme.palette.common.white,
        opacity: ".75",
        bottom: 0,
      }
    },
  })
};

export default function SHTable(props) {

  const classes = useStyles();
  const { THeadData, TBodyData, stickyHeader = false } = props;

  return (
    <Table stickyHeader={stickyHeader} sx={classes.paper} aria-label="sticky table" >
      <TableHead sx={classes.tableHead}>
        <TableRow sx={classes.tableRow}>
          {THeadData.map((column, index) => (
            <TableCell
              sx={classes.tableCell}
              key={index}
              align={column.align}
              style={{ minWidth: column.minWidth }}
            >
              {column.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {TBodyData.length > 0?
          TBodyData.map((row, val) => {
            return (
              <TableRow hover role="checkbox" tabIndex={-1} key={val} sx={classes.tableRow}>
                {THeadData.map((column, index) => {
                  const value = row[index];
                  return (
                    <TableCell key={index} align={column.align} sx={classes.tablebodyCell}>
                      {column.format && typeof value === 'number'
                        ? column.format(value)
                        : value}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })
          :
          <TableRow hover tabIndex={-1} sx={classes.tableRow}>
            <TableCell colSpan={6} align='center' sx={classes.tablebodyCell}>
              Empty Database
            </TableCell>
          </TableRow>
        }
      </TableBody>
    </Table>
  );
}
