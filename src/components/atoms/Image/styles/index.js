import styled, { css } from 'styled-components';
import variant from '../../../../utils/variant';

const base = styled.img`
  max-width: initial;
  height: auto;
  object-fit: cover;
`;

const smallFixed = css`
  width: 48px;
  height: 48px;
`;
const mediumFixed = css`
  width: 90px;
  height: 90px;
`;
const largeFixed = css`
  width: 120px;
  height: 120px;
`;
const xLargeFixed = css`
  width: 160px;
  height: 160px;
`;
const xxLargeFixed = css`
  width: 200px;

  height: 200px;
`;
const rounded = css`
  border-radius: 12px;
`;
const square = css``;
const circle = css`
  border-radius: 50%;
`;

const use = variant('use', {
  rounded,
  square,
  circle,
});
const fixed = variant('fixed', {
  small: smallFixed,
  medium: mediumFixed,
  large: largeFixed,
  xLarge: xLargeFixed,
  xxLarge: xxLargeFixed,
});

export default styled(base)(use, fixed);
