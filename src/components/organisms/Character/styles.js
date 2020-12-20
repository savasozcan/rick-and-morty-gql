import styled from 'styled-components';
import Image from '../../atoms/Image/Image';
import Link from 'next/link';
// import { rem, em } from 'polished';
// import { Wrapper as Title } from '../shared/Title/styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

export const StyledTitle = styled.div`
  margin: 10px;

  @media (max-width: 1300px) {
    margin: 10px;
    font-size: 10px;
  }
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  border: 5px solid #ff0080;
  border-radius: 5px;
  padding: 10px;
`;

export const Text = styled.span`
  font-size: 10px;
  margin: 10px;

  @media (max-width: 1300px) {
    font-size: 10px;
  }
`;

export const EpisodesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 30%;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Episode = styled.span`
  margin: 10px;
  font-size: 10px;
  font-weight: 300;
  font-style: italic;
  cursor: pointer;

  @media (max-width: 1300px) {
    font-size: 10px;
    margin: 10px;
  }
`;

export const StyledLink = styled.div`
  cursor: pointer;
  font-style: italic;
`;

export const StyledImage = styled(Image)`
  img {
    width: 100px;
    margin: 10px;
  }
`;

export const StyledBackLink = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  background: grey;
  padding: 10px;
  text-decoration: none;
  color: #000;
  border-radius: 2px;
  border: none;
  cursor: pointer;
`;

export const StyledInfo = styled.div`
  display: flex;
`;
