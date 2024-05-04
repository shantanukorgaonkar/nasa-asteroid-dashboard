import { Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Button from '../ui/Button'
import { useQuery } from '@tanstack/react-query'
import AsteroidService from '../network/asteroid/asteroid.service'

const Dashboard = () => {

    const today = new Date().toLocaleDateString('en-CA')
    const [startDate, setStartDate] = useState<string>(today)
    const [endDate, setEndDate] = useState<string>(today)

    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['asteroids', startDate, endDate],
        queryFn: () => new AsteroidService().findAll(startDate, endDate),
    })
    return (
        <Grid container>
            <Grid item xs={12}>
                <Grid container gap={6}>
                    <Grid item>
                        <Typography>Start Date</Typography>
                        <TextField
                            type='date'
                            fullWidth
                            required
                            id="startDate"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </Grid>
                    <Grid item>
                        <Typography>End Date</Typography>
                        <TextField type='date'
                            fullWidth
                            required
                            id="endDate"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)} />
                    </Grid>
                    <Grid item alignContent="flex-end">
                        <Button variant='contained' size='large'>Today</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>

            </Grid>
        </Grid>
    )
}

export default Dashboard