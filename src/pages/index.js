import React from 'react';
import Head from 'next/head';
import CharacterList from './character';

// import Home from '../components/Home';
// import CharactersRoute from "./character";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Rick and Morty</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <CharacterList />
    </>
  );
};

export default HomePage;
