import styled from 'styled-components';
import { Card } from 'react-bootstrap';

const { Body } = Card;

export const StyledAlbumCard = styled(Card)`
  background: var(--black-color-mid);

  figure {
    height: 165px;

    img {
      height: inherit;
      object-fit: cover;
      object-position: center;
    }
  }
`;

export const StyledBody = styled(Body)`
  color: var(--white-color);
  padding: 0 15px;

  .album_name {
    font-size: 16px;
  }

  .album_info {
    color: var(--gray-color-light);
    font-size: 14px;
  }
`;
