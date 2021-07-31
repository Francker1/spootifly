import styled from 'styled-components';

export const StyledSidebar = styled.div`
  color: var(--white-color);
  background: var(--black-color-mid);
  min-height: calc(100vh);
  padding: 15px 0px 15px 15px;
  border-right: 1px solid var(--gray-color-mid);

  a {
    color: var(--white-color);
  }
`;

export const SidebarHeader = styled.div`
  margin-bottom: 25px;
  padding-left: 10px;
  a {
    color: var(--white-color);
    font-size: 32px;
  }
`;

export const SidebarOptions = styled.div`
  ul {
    list-style: none;
    padding: 0;

    .active {
      background: rgba(255, 255, 255, 0.1);
      border-left: 3px solid var(--accent-color);
      color: var(--accent-color);
      font-weight: 700;
    }

    li {
      font-size: 18px;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      height: 40px;
      padding: 0;

      a {
        text-transform: capitalize;
        transition: 0.2s;
        width: 100%;
        padding: 10px;
        &:hover {
          color: var(--accent-color);
        }
      }
    }
  }
`;
