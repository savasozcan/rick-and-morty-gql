import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_CHARACTERS } from '../../queries';
import { isObjectNotNull } from '../../utils/helpers';
import Characters from '../../components/organisms/Characters';

const CharacterList = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page: 1 },
  });

  const checkProperties = () => !!data?.characters;

  return (
    <>
      {!loading && !error && isObjectNotNull(data) && checkProperties() && (
        <div>
          <Characters characters={data?.characters} />
        </div>
      )}
    </>
  );
};

export default CharacterList;
