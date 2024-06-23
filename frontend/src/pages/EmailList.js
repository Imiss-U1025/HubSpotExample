import React from 'react';
import { Grid, Paper, Container } from '@mui/material';

const useStyles = {
  paper: {
    padding: '16px',
    textAlign: 'center',
    color: 'black',
  },
};

function EmailList() {
  const classes = useStyles;

  return (
    <div className=' bg-[#f5f8fa]'>
    <Container sx={{padding:'4rem'}}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6}>
          <Paper style={classes.paper}>
          <ul>
            <li>
              11111111111111111111
            </li>
             <li>
              11111111111111111111
            </li>
            <li>
              11111111111111111111
            </li>
            <li>
              11111111111111111111
            </li>
            <li>
              11111111111111111111
            </li>
            <li>
              11111111111111111111
            </li>
            <li>
              11111111111111111111
            </li>
            <li>
              11111111111111111111
            </li>
            <li>
              11111111111111111111
            </li>
          </ul>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Paper style={classes.paper}>
          <ul>
            <li>
              11111111111111111111
            </li>
             <li>
              11111111111111111111
            </li>
            <li>
              11111111111111111111
            </li>
            <li>
              11111111111111111111
            </li>
            <li>
              11111111111111111111
            </li>
            <li>
              11111111111111111111
            </li>
            <li>
              11111111111111111111
            </li>
            <li>
              11111111111111111111
            </li>
            <li>
              11111111111111111111
            </li>
          </ul>
          </Paper>
        </Grid>
      </Grid>
    </Container>
    </div>

  );
}

export default EmailList;
