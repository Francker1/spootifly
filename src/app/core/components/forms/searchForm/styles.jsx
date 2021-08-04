import styled from 'styled-components';

export const StyledFormContainer = styled.div`
  display: flex;

  form {
    input {
      border: none;
      background: var(--gray-color-mid);
      color: var(--white-color);
      padding: 7px 15px;
      width: 350px;
    }
    button {
      border: none;
      background: var(--accent-color);
      color: var(--white-color);
      padding: 6px 25px;
      border-radius: 0px 4px 4px 0px;
    }
  }
`;

export const StyledInfoSearched = styled.div`
  color: var(--white-color);
  margin: 15px 0px;
`;
