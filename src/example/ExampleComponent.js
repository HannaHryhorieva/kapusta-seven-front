import {
  // AppBar,
  Button,
  Paper,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  Typography,
  Box,
} from '@mui/material';

import React from 'react';
import CustomStyledExampleComponent from './CustomStyledExampleComponent';

function ExampleComponent() {
  return (
    <div>
      {/* <AppBar position="relative">Header</AppBar> */}
      <Box marginTop="20px">
        <Button color="primary" variant="contained">
          Click
        </Button>
        <Button color="secondary">Click</Button>
        <Button color="secondary" variant="outlined">
          Click
        </Button>
        <Button color="info" variant="outlined">
          Click
        </Button>
      </Box>
      <Typography variant="h1">Home</Typography>
      <Typography variant="body1">Home</Typography>

      <CustomStyledExampleComponent />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                asd
              </TableCell>
              <TableCell align="right">asd</TableCell>
              <TableCell align="right">asdf</TableCell>
              <TableCell align="right">asd</TableCell>
              <TableCell align="right">asd</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ExampleComponent;
