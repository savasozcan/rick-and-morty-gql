import React from 'react';
import Panel from './Panel';

export default {
  title: 'Atoms/Panel',
  component: Panel,
};

export const Container = () => (
  <Panel use="container">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, soluta sunt? Ab, architecto, culpa cum esse et ex
    expedita facere fugit ipsam iure modi optio perspiciatis quas quod veniam vero?
  </Panel>
);
export const Card = () => (
  <Panel use="card">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, soluta sunt? Ab, architecto, culpa cum esse et ex
    expedita facere fugit ipsam iure modi optio perspiciatis quas quod veniam vero?
  </Panel>
);
