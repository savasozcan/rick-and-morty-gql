import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_CHARACTERS } from '../../../queries';
import { isObjectNotNull } from '../../../utils/helpers';
import InfiniteScroll from 'react-infinite-scroll-component';
import Character from './character';
import Loader from '../../atoms/Loader';
import { ListWrapper, CharacterListWrapper } from './styles';

const Characters = ({ characters }) => {
  const {
    results,
    info: { next },
  } = characters;
  const [nextPage, setNextPage] = useState(next);
  const [allCharacters, setAllCharacters] = useState(results);

  const [getCharacters, { loading, error, data }] = useLazyQuery(GET_CHARACTERS);

  useEffect(() => {
    if (!data || !data.characters) return;

    const {
      characters: {
        results: newResults,
        info: { next: newPageLink },
      },
    } = data;

    setNextPage(newPageLink);
    setAllCharacters([...allCharacters, ...newResults]);
  }, [data]);

  const renderCharacters = () => {
    return (
      <CharacterListWrapper>
        {allCharacters.map((character, key) => (
          <Character key={key} character={character} />
        ))}
      </CharacterListWrapper>
    );
  };

  const loadMoreData = () => {
    getCharacters({ variables: { page: nextPage } });
  };

  return (
    <ListWrapper>
      <InfiniteScroll
        dataLength={allCharacters?.length}
        next={loadMoreData}
        hasMore={nextPage}
        height="100vh"
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
        loader={<Loader />}>
        {renderCharacters()}
      </InfiniteScroll>
    </ListWrapper>
  );
};

export default Characters;
