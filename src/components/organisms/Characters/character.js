import React from 'react';
import Link from 'next/link';

import { Wrapper, CharacterName, ImageWrapper } from './styles';

const Character = ({ character }) => {
  return (
    <Link href={`/character/${character.id}`}>
      <Wrapper>
        <CharacterName>{character.name}</CharacterName>
        <ImageWrapper src={character.image} alt={character.name} />
      </Wrapper>
    </Link>
  );
};

export default Character;
