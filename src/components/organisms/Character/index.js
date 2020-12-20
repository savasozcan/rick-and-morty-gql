import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {
  Wrapper,
  StyledImage,
  StyledTitle,
  StyledLink,
  StyledBackLink,
  Card,
  Text,
  EpisodesWrapper,
  Episode,
  StyledInfo,
} from './styles';

const Character = ({ character }) => {
  const { name, type, image, status, gender, origin, species, episode, location } = character;

  const renderType = () => {
    if (type) {
      return (
        <Text>
          <b>Type:</b> {type}
        </Text>
      );
    }

    return null;
  };

  const renderEpisodes = () => {
    const size = 5;
    return episode.slice(0, size).map((ep, key) => (
      <Link href={`/episode/${ep.id}`} key={key}>
        <Episode>{ep.name}</Episode>
      </Link>
    ));
  };

  return (
    <Wrapper>
      <Card>
        <Link href="/">
          <StyledBackLink>Go Back</StyledBackLink>
        </Link>
        <StyledTitle>{name}</StyledTitle>
        <StyledImage src={image} alt="character" />
        {renderType()}
        <StyledInfo>
          <Text>
            <b>Status:</b> {status}
          </Text>
          <Text>
            <b>Gender:</b> {gender}
          </Text>
          <Link href={`/location/${origin.id}`}>
            <Text>
              <b>Origin:</b> <StyledLink>{origin.name}</StyledLink>
            </Text>
          </Link>
          <Text>
            <b>Species:</b> {species}
          </Text>
          <Link href={`/location/${location.id}`}>
            <Text>
              <b>Last known location:</b> <StyledLink>{location.name}</StyledLink>
            </Text>
          </Link>
        </StyledInfo>
        <Text>
          <b>Episodes</b>
        </Text>
        <EpisodesWrapper>{renderEpisodes()}</EpisodesWrapper>
      </Card>
    </Wrapper>
  );
};

Character.propTypes = {
  character: PropTypes.object,
};

export default Character;
