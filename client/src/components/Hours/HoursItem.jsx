import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const HoursItem = (props) => (
  <Grid bsClass={}>
    <Row>
      <Col xs={4} md={2} bsClass={}>
        <code>{props.day}</code>
      </Col>
      <Col xs={14} md={7} bsClass={}>
        <code>{props.hours}</code>
      </Col>
      <Col xs={6} md={3} bsClass={}>
        <code></code>
      </Col>
    </Row>
  </Grid>
  // <div>
  //   <h4>{props.day} {props.hours}</h4>
  // </div>
)

export default HoursItem;