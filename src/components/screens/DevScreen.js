import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import Line from '../visualization/LineChart/Line'
import Pie from '../visualization/PieChart/Pie'
import Bar from '../visualization/BarChart/Bar'

const DevScreen = () => {
  return (
      <Container>
        <Row>
          <Col>
            <div>
              <Line/>
            </div>
          </Col>
          <Col>
            <div>
              <Pie/>
            </div>
          </Col>
          <Col>
            <div>
              <Bar/>
            </div>
          </Col>
        </Row>
      </Container>
  )
}

export default DevScreen