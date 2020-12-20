import React from 'react';
import StyledPanel from './styled';
import PropTypes from 'prop-types';

const Panel = ({ use, children, className }) => (
  <StyledPanel className={className} use={use}>
    {children}
  </StyledPanel>
);

Panel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,

  use: PropTypes.oneOf(['container', 'card', 'standard']),
};
Panel.defaultProps = {};

export default Panel;
