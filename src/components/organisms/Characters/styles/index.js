import styled from 'styled-components';
import Image from '../../../atoms/Image/Image';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  margin: 50px;
  padding: 10px;
  border: 1px solid white;
  border-radius: 10px;
  cursor: pointer;

  flex-grow: 1;
  flex-direction: row-reverse;
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
  -webkit-flex-basis: calc(25% - 30px);
  flex-basis: calc(25% - 30px);
  max-width: calc(25% - 30px);
  margin: 15px;
  overflow: hidden;
  position: relative;

  :hover {
    border: 2px solid white;
  }

  @media (max-width: 814px) {
    min-width: 50%;
    padding: 15px;
    flex-wrap: wrap;
    height: 25%;
  }
`;

export const CharacterName = styled.span`
  font-size: 20px;
  font-weight: 500;
  padding-left: 10px;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const ImageWrapper = styled(Image)`
  img {
    width: 100px;
    border-radius: 10px;
  }
`;

export const CharacterListWrapper = styled.div`
  margin: 0px auto;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 30px;
  overflow: auto;
`;

// export const IconWrapper = styled.span`
//   transform: translateY(-40%);
// `;
