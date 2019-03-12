import React, { Component } from 'react';
import {connect} from 'react-redux';

import {Col, Container, Row} from "react-bootstrap";
import {Button} from "react-bootstrap";

import Timeline from "react-visjs-timeline";
import * as actions from "../actions/TimelineActions";

import './TimelineView.css';

export class TimelineView extends Component {
  constructor(props) {
    super(props);

    this.buttonClick = this.buttonClick.bind(this);
    this.getTimelineItems = this.getTimelineItems.bind(this);
  }
  buttonClick(event) {
    let textContent = event.target.textContent;

    if(textContent.search("Show") === 0) {
      event.target.textContent = event.target.textContent.replace('Show', 'Hide');
    } else {
      event.target.textContent = event.target.textContent = event.target.textContent.replace('Hide','Show');
    }
  }
  getTimelineItems() {
    return [
      {
        start: new Date(2010, 7, 15),
        end: new Date(2010, 8, 2),  // end is optional
        content: 'Trajectory A',
      }
    ];
  }
  getTimelineOptions() {
    return {
      width: '100%',
      height: '350px',
      stack: false,
      showMajorLabels: true,
      showCurrentTime: true,
      zoomMin: 1000000,
      type: 'background',
      format: {
        minorLabels: {
          minute: 'h:mma',
          hour: 'ha'
        }
      }
    };
  }
  render() {
    return (
      <div id="background">
        <Container id="page">
          <Row>
            <Col xs={12}>
              <Button onClick={this.buttonClick}>Show work</Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="button-col">
              <Button onClick={this.buttonClick}>Show education</Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="button-col">
              <Button onClick={this.buttonClick}>Show projects</Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12} id="timeline">
              <Timeline items={this.getTimelineItems()} options={this.getTimelineOptions()}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default connect(data => data.Timeline)(TimelineView);