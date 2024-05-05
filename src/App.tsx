import { Grid, Typography } from '@mui/material';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <Grid container justifyContent="center" gap={4} >
      <Grid item xs={12} >
        <Typography variant='h2' textAlign="center">Asteroid Dashboard</Typography>
      </Grid>
      <Grid item xs={10} sx={{ backgroundColor: '#FFFFFF', padding: 4 }}>
        <Dashboard />
      </Grid>
    </Grid>
  );
}

export default App;
