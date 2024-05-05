import { Grid, CircularProgress } from '@mui/material'

import React from 'react'

const CircularLoader = () => {
  return (
    <Grid container justifyContent='center' alignItems="center">
      <CircularProgress />
    </Grid>
  )
}

export default CircularLoader