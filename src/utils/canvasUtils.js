function backdrop(context, background="#f5fffb"){
    context.fillStyle = background
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)
}

function getRandomColor(){
    return "#" + Math.floor(Math.random()*16777215).toString(16)
}

function drawLine(context,start, end, stroke){
    context.beginPath();
    context.moveTo(start.x, start.y);
    context.lineTo(end.x, end.y);
    context.strokeStyle = stroke.color;
    context.lineWidth = stroke.width;
    context.stroke();
}

function drawPoint(context, point, stroke){
    context.beginPath();
    context.arc(point.x, point.y, 2, 0, 2 * Math.PI);
    context.stroke();
}

function drawArc(context, point, radius, start_angle, end_angle){
    context.beginPath();
    context.moveTo(point.x, point.y)
    context.arc(point.x, point.y, radius, start_angle, end_angle);
    context.closePath()
    context.fillStyle = getRandomColor()
    context.fill();
}

function drawBar(context, point, width, height, stroke){
    context.beginPath();
    context.fillStyle = getRandomColor();
    context.fillRect(point.x, context.canvas.height-height, width, height);
}

function mapValue(value, inputMin, inputMax, outputMin, outputMax) {
    const normalizedValue = (value - inputMin) / (inputMax - inputMin);
    const mappedValue = normalizedValue * (outputMax - outputMin) + outputMin;
    return Math.round(mappedValue,2);
}

function dataTransformLineChart(context, data_points){
    let total_data_point = data_points.length
    let increment = Math.floor(context.canvas.width/total_data_point)-5

    let input_min = Math.min(...data_points)
    let input_max = Math.max(...data_points)
    let output_min = 10
    let output_max = context.canvas.height-10

    let transformed_data = []
    data_points.map((elem, index)=>{
        transformed_data.push(
            {
                x: index*increment+5,
                y: mapValue(
                    elem,
                    input_min,
                    input_max,
                    output_min,
                    output_max
                )
            }
        )
    })
    return transformed_data
}

function dataTransformPieChart(context, data_points){
    let total = 0
    data_points.map((elem)=>{total+=elem})
    let angles = []
    for(let i=0;i<data_points.length;i++){
        let angle = Math.round((data_points[i]*360/total),2)
        angles.push(angle)
    }
    return angles
}

function dataTransformBarChart(context, data_points){
    let width = Math.floor(context.canvas.width/data_points.length)

    let input_min = Math.min(...data_points)
    let input_max = Math.max(...data_points)
    let output_min = 10
    let output_max = context.canvas.height-10

    let transformed_data = []
    data_points.map((elem, index)=>{
        transformed_data.push(
            {
                x: index*width+5,
                y: mapValue(
                    elem,
                    input_min,
                    input_max,
                    output_min,
                    output_max
                )
            }
        )
    })
    return transformed_data
}

function drawLineChart(context, data_points, stroke){
    let transformed_data = dataTransformLineChart(context, data_points)
    for(let i=0;i<transformed_data.length-1;i++){
        let inverted_y1 = context.canvas.height-transformed_data[i].y
        let inverted_y2 = context.canvas.height-transformed_data[i+1].y
        let start={x:transformed_data[i].x, y: inverted_y1}
        let end = {x:transformed_data[i+1].x, y: inverted_y2}
        drawLine(context, start, end, stroke)
        drawPoint(context, {x: transformed_data[i].x, y: inverted_y1})
    }
}

function drawPieChart(context, data_points){

    let angles = dataTransformPieChart(context, data_points)
    let start_angle = 0
    for(let i=0;i<angles.length;i++)
    {
        let point={x: context.canvas.width/2 ,y: context.canvas.height/2}
        let radius = Math.floor(0.2*context.canvas.width)
        let end_angle = start_angle+angles[i]
        drawArc(context, point, radius, start_angle*Math.PI/180, end_angle*Math.PI/180)
        start_angle = end_angle
    }    
}

function drawBarChart(context, data_points, stroke){
    let transformed_data = dataTransformBarChart(context, data_points)
    console.log(transformed_data)
    for(let i=0;i<data_points.length;i++){
        let bar_width = Math.floor(context.canvas.width/transformed_data.length)-5
        drawBar(context,
            transformed_data[i],
            bar_width,
            context.canvas.height - transformed_data[i].y,
            stroke)
    }
}

export {
    backdrop,
    drawLineChart,
    drawPieChart,
    drawBarChart
}