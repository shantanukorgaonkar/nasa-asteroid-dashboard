import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { Asteroid } from '../models/Asteroid';
interface Props {
    data: Asteroid[]
}
const Chart = ({ data }: Props) => {
    const asteroidNames = data.map((val) => {
        return val.name
    })
    const asteroidVelocity = data.map((val) => {
        return val.velocity
    })
    return (
        <BarChart
            xAxis={[{ scaleType: 'band', data: asteroidNames }]}
            series={[{ data: asteroidVelocity }]}
            height={400}
        />
    )
}

export default Chart