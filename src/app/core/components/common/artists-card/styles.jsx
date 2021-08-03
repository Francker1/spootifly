import styled from 'styled-components';

import { Card } from 'react-bootstrap';

export const StyledArtistCard = styled(Card)`
  background: transparent;
  figure {
    border-radius: 50%;
    overflow: hidden;
    height: 170px;

    img {
      height: inherit;
    }
  }

  .card-body {
    padding: 0;
    text-align: center;
    color: var(--white-color);
  }
`;
