import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from '@apollo/react-hooks';

import GlobalStyles from '../styles/globalStyles';
import { client } from '../services/ApolloClient';

const _app = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

_app.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default _app;
