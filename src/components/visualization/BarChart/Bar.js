import React, { useRef, useEffect } from 'react'
import { backdrop, drawBarChart } from '../../../utils/canvasUtils'
import Title from '../../utils/Title/Title'
import Legend from '../../utils/Legend/Legend'

const Line = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        backdrop(context)

        let data_points = [32, 232, 21, 43, 463, 144, 13, 56, 74, 24, 11]

        drawBarChart(context, data_points, { color: "red", width: 2 })

    }, [])

    return (
        <div className='elevation-1 m-1'>
            <Title title={"Bar chart"} />
            <div className='center'>
                <canvas
                    width={450}
                    height={225}
                    ref={canvasRef}
                ></canvas>
            </div>
            <Legend />
        </div>
    )
}

export default Line