import { Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Button from '../ui/Button'
import { useQuery } from '@tanstack/react-query'
import AsteroidService from '../network/asteroid/asteroid.service'
import CircularLoader from '../ui/CircularLoader'
import SpreadSheet from './Spreadsheet'
import { Asteroid } from '../models/Asteroid'
import Chart from './BarChart'
import ErrorSnackbar from '../ui/ErrorSnackbar'

const Dashboard = () => {

    const today = new Date().toLocaleDateString('en-CA')
    const [startDate, setStartDate] = useState<string>(today)
    const [endDate, setEndDate] = useState<string>(today)
    const [error, setError] = useState<Error>()

    const handleOnClick = () => {
        setStartDate(today)
        setEndDate(today)
    }
    const { isLoading, data } = useQuery({
        queryKey: ['asteroids', startDate, endDate],
        queryFn: () => new AsteroidService().findAll(startDate, endDate).then((res) => {
            const data = Object.values(res.near_earth_objects as any[][])

            const asteroids: Asteroid[] = []
            for (let arr of data) {
                arr.forEach((val) => {
                    const asteroid = new Asteroid()
                    asteroid.id = val.id
                    asteroid.name = val.name
                    asteroid.time = val.close_approach_data[0].close_approach_date_full
                    asteroid.potentialHazard = val.is_potentially_hazardous_asteroid
                    asteroid.estimatedDiameter = Math.round(val.estimated_diameter.meters.estimated_diameter_max)
                    asteroid.missDistance = Math.round(val.close_approach_data[0].miss_distance.kilometers)
                    asteroid.velocity = Math.round(val.close_approach_data[0].relative_velocity.kilometers_per_hour)
                    if (localStorage.getItem(val.id)) {
                        asteroid.note = localStorage.getItem(val.id)
                    }
                    asteroids.push(asteroid)
                })
            }
            return asteroids
        }).catch((error)=>{
            setError(error)
        }),
    })
    return (
        <Grid container gap={4}>
            <Grid item xs={12}>
                <Grid container gap={4}>
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
                        <Button variant='contained' size='large' onClick={() => handleOnClick()}>Today</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                {isLoading ?
                    <CircularLoader /> :
                    <SpreadSheet data={data ? data : []} />}
            </Grid>
            <Grid item xs={12} sx={{ backgroundColor: '#FFFFFF', margin: 1 }}>
                {!isLoading && <Chart data={data ? data : []} />}
            </Grid>
            <ErrorSnackbar error={error} setError={setError} />
        </Grid>
    )
}

export default Dashboard