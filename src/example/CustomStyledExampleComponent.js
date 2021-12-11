import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
  Grid,
} from '@mui/material';

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  marginTop: 20,
  marginBottom: 20,
  bgcolor: '#ccc',
};

function CustomStyledExampleComponent() {
  return (
    <>
      <Grid item mobile={12} tablet={6} desktop={3}>
        <Card sx={cardStyle}>
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="h6">Name</Typography>
            <Typography variant="body1">111-111-1111</Typography>
          </CardContent>

          <CardActions disableSpacing>
            <IconButton></IconButton>
            <IconButton aria-label="Delete contact"></IconButton>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}

export default CustomStyledExampleComponent;
