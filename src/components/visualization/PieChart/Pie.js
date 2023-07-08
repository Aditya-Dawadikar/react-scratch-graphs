import React, { useRef, useEffect } from 'react'
import { backdrop, drawPieChart } from '../../../utils/canvasUtils'
import Title from '../../utils/Title/Title'
import Legend from '../../utils/Legend/Legend'

const Pie = () => {

  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    backdrop(context)

    let data_points = [25, 65, 52, 12,44]

    drawPieChart(context, data_points)

  }, [])

  return (
    <div className='elevation-1 m-1'>
      <Title title={"Pie Chart"} />
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

export default Pie