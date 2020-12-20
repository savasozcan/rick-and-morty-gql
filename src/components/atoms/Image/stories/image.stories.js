import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Col, Row } from 'styled-bootstrap-grid';
import Image from '../Image';
import Panel from '../../Panel/Panel';

export default {
  title: 'Atoms/Image',
  component: Image,
  decorators: [withKnobs],
};
const imgSource = 'https://dummyimage.com/300x300/000/fff.jpg';

const noAspectRatioSource = 'https://dummyimage.com/600x400/000/fff';

export const Standard = () => (
  <Panel use="container">
    <Row>
      <Col sm="6">
        <Image use="rounded" alt="image" src={imgSource} />
      </Col>
      <Col sm="6">
        <Image use="square" alt="image" src={imgSource} />
      </Col>
      <Col sm="6">
        <Image use="circle" alt="image" src={imgSource} />
      </Col>
      <Col sm="6">
        <Image use="circle" alt="image" src="wrong image" />
      </Col>
    </Row>
  </Panel>
);

export const Fixed = () => (
  <>
    <Panel use="container">
      <Row>
        <Col sm="2" md="2" lg="2" xl="1">
          <Image use="circle" fixed="small" alt="image" src={noAspectRatioSource} />
        </Col>
        <Col sm="4" md="3" lg="3" xl="2">
          <Image use="circle" fixed="medium" alt="image" src={noAspectRatioSource} />
        </Col>
        <Col sm="6" md="4" lg="4" xl="3">
          <Image use="circle" fixed="large" alt="image" src={noAspectRatioSource} />
        </Col>
        <Col sm="8" md="5" lg="5" xl="4">
          <Image use="circle" fixed="xLarge" alt="image" src={noAspectRatioSource} />
        </Col>
        <Col sm="6" md="6" lg="6" xl="5">
          <Image use="circle" fixed="xxLarge" alt="image" src={noAspectRatioSource} />
        </Col>
      </Row>
    </Panel>
    <br />
    <Panel use="container">
      <Row>
        <Col sm="2" md="2" lg="2" xl="1">
          <Image use="rounded" fixed="small" alt="image" src={noAspectRatioSource} />
        </Col>
        <Col sm="4" md="3" lg="3" xl="2">
          <Image use="rounded" fixed="medium" alt="image" src={noAspectRatioSource} />
        </Col>
        <Col sm="6" md="4" lg="4" xl="3">
          <Image use="rounded" fixed="large" alt="image" src={noAspectRatioSource} />
        </Col>
        <Col sm="8" md="5" lg="5" xl="4">
          <Image use="rounded" fixed="xLarge" alt="image" src={noAspectRatioSource} />
        </Col>
        <Col sm="6" md="6" lg="6" xl="5">
          <Image use="rounded" fixed="xxLarge" alt="image" src={noAspectRatioSource} />
        </Col>
      </Row>
    </Panel>
  </>
);
