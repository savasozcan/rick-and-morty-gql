import styled, { css } from 'styled-components';
import variant from '../../../utils/variant';

const base = styled.section`
  border-radius: 12px;
  padding: 16px;
  color: #23252c;
`;

const container = css`
  background: #fff;
`;

const card = css`
  background: #f6faff;
`;
const standard = css`
  background: #f6faff;
`;

const use = variant('use', { container, card, standard });

export default styled(base)(use);
