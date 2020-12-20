import React from 'react';
import PropTypes from 'prop-types';
import StyledImg from './styles';

const Image = ({ use, src, alt, className, fixed }) => {
  const fallbackImage = 'https://dummyimage.com/300x300/000/ff0000.jpg&text=Broken+Image';
  return (
    <picture className={className}>
      <source srcSet={src} media="(min-width: 100px)" />
      <StyledImg fixed={fixed} use={use} src={fallbackImage} srcset={src} alt={alt} />
    </picture>
  );
};

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  use: PropTypes.oneOf(['rounded', 'square', 'circle']),
  fixed: PropTypes.oneOf(['small', 'medium', 'large', 'xLarge', 'xxLarge']),
  alt: PropTypes.string.isRequired,
};
Image.defaultProps = {
  className: null,
  use: 'square',
  fixed: null,
};

export default Image;
