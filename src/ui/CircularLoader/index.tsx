import { Grid, CircularProgress } from '@mui/material'

const CircularLoader = () => {
  return (
    <Grid container justifyContent='center' alignItems="center">
      <CircularProgress />
    </Grid>
  )
}

export default CircularLoader