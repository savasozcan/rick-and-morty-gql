import { createGlobalStyle } from 'styled-components';

import normalize from './normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  body {
    background: #333;
    color: #ddd;
  }

  ::-webkit-scrollbar {
  width: 2px
}

/* Track */
::-webkit-scrollbar-track {
  background: #212020;
  border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #ddd;
}
`;

export default GlobalStyles;
